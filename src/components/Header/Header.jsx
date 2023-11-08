import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRange} from 'react-date-range'
import format from 'date-fns/format';
import { useNavigate } from 'react-router-dom';


function Header({type}) {
    const [destination , setdestination] = useState('')
    const navigate = useNavigate()
    const [openDate  ,setOpenDate] = useState(false)
    const [date , setdate] = useState([{
        startDate : new Date(),
        endDate : new Date(),
        key : 'selection'
    }])
    const [openOption  ,setopenOption] = useState(false)
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1
    });
    
    const handleOption = (name, operation) => {
        setOption(pre => {
            return {
                ...pre,
                [name]: operation === 'i' ? option[name] + 1 : option[name] - 1
            };
        });
    }
    
    const handleSearch = () =>{
        navigate('/hotel' , {state : { destination , date , option }})
    }

  return (
    <div className="header">
        <div className={type === 'list' ? 'headerContainer listMode' : 'headerContainer'}>
            <div className="headerList">
                <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span> 
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span> 
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car rentals</span> 
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Atraction</span> 
                </div>
                <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxi</span> 
                </div>
            </div>
            { type !== 'list' &&
                <><h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
            <p className="headerDesc">
                Get reawarded for your travels - unlock instant sabings of 10% or more with a free Booking account
            </p>
            <button className="headerBtn">Signup / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input 
                type="text"
                placeholder='Where are you going?'
                className='headerSearchInput'
                onChange={(e)=> setdestination(e.target.value) }
                 />
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>
                    {`${format(date[0].startDate, "MM/dd/yyyy")} 
                    to 
                    ${format(date[0].endDate, "MM/dd/yyyy")}` }</span>
                {openDate && <DateRange
                editableDateInputs={true}
                onChange={(item)=> setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
                className='date'
                />}
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span onClick={()=>setopenOption(!openOption)} className='headerSearchText'>
                    {`${option.adult} Adult . ${option.children} Children . ${option.room} Rooms`}
                </span>
                {openOption && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                            <button
                            disabled={option.adult === 1} 
                            className="optionCounterButton" 
                            onClick={()=>handleOption('adult','d')}>-</button>
                            <span className="optionCounterNumber">{option.adult}</span>
                            <button   
                            className="optionCounterButton"  
                            onClick={()=>handleOption('adult','i')}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                            <button
                            disabled={option.children === 0}  
                            className="optionCounterButton"  
                            onClick={()=>handleOption('children','d')}>-</button>
                            <span className="optionCounterNumber">{option.children}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption('children','i')}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionCounter">
                            <button 
                            disabled={option.room === 1} 
                            className="optionCounterButton" 
                            onClick={()=>handleOption('room','d')}>-</button>
                            <span className="optionCounterNumber">{option.room}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption('room','i')}>+</button>
                        </div>
                    </div>
                </div>}
                </div>
                <div className="headerSearchItem">
                    <button className='headerBtn' onClick={handleSearch}>Search</button>
                </div>
            </div></>}
        </div>
    </div>
  );
}

export default Header;
