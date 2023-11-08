import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import './List.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem/SearchItem'

function List() {

  const location = useLocation()
  // console.log(location);
  const [destination , setdestination] = useState(location.state.destination)
  const [date , setdate] = useState(location.state.date)
  const [option , setoption] = useState(location.state.option)
  const [opendate , setdateopen] = useState(false)
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
              <span className='dates' onClick={()=> setdateopen(!opendate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} 
                    to 
                    ${format(date[0].endDate, "MM/dd/yyyy")}` }
              {opendate &&
                <DateRange
                editableDateInputs={true}
                onChange={(item)=> setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
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
                <input type="number"  className="listsearchOptionInput"/>
              </div>
              <div className="listSearchOptionItem">
                <span className="listSearchOptionText">
                  Max Price <small>Per night</small>
                </span>
                <input type="number" className="listsearchOptionInput"/>
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
            <button>Search</button>
          </div>
          <div className="ListResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default List