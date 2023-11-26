import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import './Reserve.css'
import useFetch from "../../Hooks/useFetch.js";
import { SearchContext } from "../../context/SearchContext.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Reserve = ({ hotelId }) =>{
    const naviagte = useNavigate()
    const [selectedRooms , setSelectedRooms] = useState([])
    const [open , setOpen] = useState(true)
    const {data} = useFetch(`http://localhost:8000/api/hotels/room/${hotelId}`)
    // console.log(data);
    const { dates } = useContext(SearchContext);

    const getDatesInRange = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
  
      const date = new Date(start.getTime());
  
      const dates = [];
  
      while (date <= end) {
        dates.push(new Date(date).getTime());
        date.setDate(date.getDate() + 1);
      }
  
      return dates;
    };

    const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

    const isAvailable = (roomNumber) =>{
        const isFound = roomNumber.unavailableDates.some((date)=>allDates.includes(new Date(date).getTime()))
        return !isFound;
    }

    const handleSelect = (e) =>{
        const checked = e.target.checked;
        const value = e.target.value;
            
        setSelectedRooms(checked ? [...selectedRooms , value] 
        : selectedRooms.filter((item)=>item !== value)
        )
    }
    // console.log(selectedRooms);


    const handleClick = async () =>{
        try {
            await Promise.all(selectedRooms.map((roomId)=>{
                const res = axios.put(`http://localhost:8000/api/rooms/availability/${roomId}`,{dates : allDates})
                return res.data
            }))
            toast.success('Rooms Reserved Successfully')
            setTimeout(()=>setOpen(false),1500)
            setTimeout(()=>naviagte('/'),1500)
        } catch (error) {
            console.log(error);
        }
    }

        return(
        <>

        {open &&
        <>
        <div className="reserve">
             <div className="rContainer">
                <FontAwesomeIcon 
                icon={faCircleXmark} 
                className="close"
                onClick={()=>setOpen(false)}
                />
                <span>Select your Rooms:</span>
                {data.map(item=>(
                    <div className="rItem" key={item.id}>
                        <div className="rItemInfo">
                            <div className="rTilte">Title: <b>{item.title}</b></div>
                            <div className="rDesc">Desc: <b>{item.desc}</b></div>
                            <div className="rMax">MaxPeople : <b>{item.maxPeople}</b></div>
                            <div className="rPrice">Price : <b>{item.price}</b></div>
                            <div className="Selectedroom">
                                {item.roomNumber.map(roomNumber=>(
                                    <>
                                    <div className="room">
                                    <label >{roomNumber.number}</label>
                                    <input
                                     type="checkbox"
                                     value={roomNumber._id} 
                                     onChange={handleSelect}
                                     disabled={!isAvailable(roomNumber)} />
                                     </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                <button onClick={handleClick} className="rBtn">Reserve Now!</button>
            </div>
        </div>
        <ToastContainer/>
        </>}
        </>
    )
}
export default Reserve