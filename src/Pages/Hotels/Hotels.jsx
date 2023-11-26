import React, { useContext, useState } from 'react'
import './Hotels.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import useFetch from '../../Hooks/useFetch.js'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext.js'
import { AuthContext } from '../../context/AuthContext.js'
import Reserve from '../../components/Reserve/Reserve.jsx'


function Hotels() {
  const location = useLocation()
  // console.log(location);
  const id = location.pathname.split('/')[2]
  const [slideNumber , setSlideNumber] = useState(0);
  const [open , setOpen] = useState(false);
  const [openModal , setOpenModal] = useState(false);

  const {data , loading} = useFetch(`http://localhost:8000/api/hotels/find/${id}`)
  // console.log(data);
  // console.log(id);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const {dates , option} = useContext(SearchContext)
  
  // console.log(dates);
  
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  
  }
  
  const days = dayDifference(dates[0]?.endDate , dates[0]?.startDate);

  const photos = [
    {
      src : "https://img.freepik.com/free-photo/elegant-hotel-room-with-big-bed_1203-1494.jpg?size=626&ext=jpg&ga=GA1.1.1922389197.1677510164&semt=ais"
    },
    {
      src : "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?size=626&ext=jpg&ga=GA1.1.1922389197.1677510164&semt=ais"
    },
    {
      src : "https://img.freepik.com/premium-photo/beautiful-hotel-with-swimming-pool-aqua-slides-evening-concept-tourism_361821-777.jpg?size=626&ext=jpg&ga=GA1.1.1922389197.1677510164&semt=ais" 
    },
    {
      src : 'https://img.freepik.com/free-photo/tidy-hotel-room-with-brown-curtains_1203-1493.jpg?size=626&ext=jpg&ga=GA1.1.1922389197.1677510164&semt=ais'
    },
    {
      src : "https://img.freepik.com/free-photo/indoor-design-luxury-resort_23-2150497283.jpg?size=626&ext=jpg&ga=GA1.1.1922389197.1677510164&semt=ais"
    },
    {
      src : "https://img.freepik.com/free-photo/beach-cayman-water-sun-summer_1203-5570.jpg?size=626&ext=jpg&ga=GA1.1.1922389197.1677510164&semt=ais"
    }
  ]

  const handleOpen = (i) =>{
    setSlideNumber(i)
    setOpen(true)
  }
  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction === 'l'){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
    }
    setSlideNumber(newSlideNumber)
  }

  const handleClick = () =>{
    if(user){
      setOpenModal(true)
    }else{
      navigate('/login')
    }
  }


  return (
    <>
    <div>
      <Navbar/>
      <Header type='list'/>
      {loading ? "Loading..." :
        <>
        <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={data?.photos[slideNumber]} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className='booknow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">{data.hotelDB?.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>{data.hotelDB?.address}</span>
          </div>
          <span className='hotelDistance'>
            Excellent Location - {data.hotelDB?.distance}m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ${data.hotelDB?.cheapestPrice} at this property and get a free airport Taxi
          </span>
          <div className="hotelImages">
              {data.photos?.map((photo , i)=>(
                <div className="hotemImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo} className='hotelImage' alt="img" />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
                <div className="hotelDetailText">
                  <h1 className="HotelTitle">{data.hotelDB?.title}</h1>
                  <p className="hotelDesc">
                    {data.hotelDB?.desc}
                  </p>
                </div>
                <div className="hotelDetailPrice">
                  <h1>Perfect for a {days}-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>${days * data.hotelDB?.cheapestPrice * option.room}</b> ({days} nights)
                  </h2>
                  <button onClick={handleClick}>Reserve or Book Now!</button>
                </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div></>}

      {
        openModal && <Reserve  hotelId={id}/>
      }
    </div>
    </>
  )
}

export default Hotels