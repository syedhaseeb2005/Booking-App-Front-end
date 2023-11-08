import React, { useState } from 'react'
import './Hotels.css'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

function Hotels() {
  const [slideNumber , setSlideNumber] = useState(0);
  const [open , setOpen] = useState(false);
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

  return (
    <>
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>
        </div>}
        <div className="hotelWrapper">
          <button className='booknow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className='hotelDistance'>
            Excellent Location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport Taxi
          </span>
          <div className="hotelImages">
              {photos.map((photo , i)=>(
                <div className="hotemImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={photo.src} className='hotelImage' alt="img" />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
                <div className="hotelDetailText">
                  <h1 className="HotelTitle">Stay in the heart of Krakow</h1>
                  <p className="hotelDesc">
                    Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                    Street Apartments has accommodations with air conditioning and
                    free WiFi. The units come with hardwood floors and feature a
                    fully equipped kitchenette with a microwave, a flat-screen TV,
                    and a private bathroom with shower and a hairdryer. A fridge is
                    also offered, as well as an electric tea pot and a coffee
                    machine. Popular points of interest near the apartment include
                    Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                    airport is John Paul II International Kraków–Balice, 16.1 km
                    from Tower Street Apartments, and the property offers a paid
                    airport shuttle service.
                  </p>
                </div>
                <div className="hotelDetailPrice">
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 9.8!
                  </span>
                  <h2>
                    <b>$945</b> (9 nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default Hotels