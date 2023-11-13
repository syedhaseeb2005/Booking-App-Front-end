import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import './List.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem/SearchItem'
import useFetch from '../../Hooks/useFetch.js'

function List() {

  const location = useLocation()
  // console.log(location);
  const [destination , setdestination] = useState(location.state.destination)
  const [dates , setdates] = useState(location.state.date)
  const [opendate , setdateopen] = useState(false)
  const [option , setoption] = useState(location.state.option)
  const [min , setmin] = useState(undefined)
  const [max , setmax] = useState(undefined)

  const {data , loading ,  refetch} = useFetch(`http://localhost:8000/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`)
  // console.log(data);

  const hanldeClick = () =>{
    refetch()
  }

  return (
    <>
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="ListContainer">
        <div className="ListWrapper">
          <div className="ListSearch">
            <h1 className="ListSearchTitle">Search</h1>
            <div className="ListSearchItem">
              <label>Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="ListSearchItem">
              <label>Check-in Date</label>
              <span className='dates' onClick={() => setdateopen(!opendate)}>
                {dates && dates.length > 0 &&
                  `${format(dates[0].startDate, "MM/dd/yyyy")} 
                    to 
                  ${format(dates[0].endDate, "MM/dd/yyyy")}`
                }
                 {opendate &&
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setdates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    mindates={new Date()}
                    className='date'
                  />}
              </span>
            </div>

            <div className="ListSearchItem">
              <label>Option</label>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">
                  Min Price <small>Per night</small>
                </span>
                <input type="number" onChange={e=>setmin(e.target.value)}  className="listsearchOptionInput"/>
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">
                  Max Price <small>Per night</small>
                </span>
                <input type="number" onChange={e=>setmax(e.target.value)} className="listsearchOptionInput"/>
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">
                  Adult 
                </span>
                <input type="number" min={1} placeholder={option.adult} className="listsearchOptionInput"/>
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">
                  Children
                </span>
                <input type="number" min={0} placeholder={option.children} className="listsearchOptionInput"/>
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">
                  Rooms
                </span>
                <input type="number" min={1} placeholder={option.room} className="listsearchOptionInput"/>
              </div>
            </div>
            <button onClick={hanldeClick}>Search</button>
          </div>
          <div className="ListResult">
            {loading ? "Loading" : 
              <>
              {data.map((item)=>(
                <SearchItem item={item} key={item?._id}/>
              ))}
            </>
            }
         
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default List