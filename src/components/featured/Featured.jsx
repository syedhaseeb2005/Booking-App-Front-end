import React from 'react'
import './Featured.css'

function Featured() {
    


  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://img.freepik.com/premium-photo/hotel_664434-4822.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" alt="img" className='featuredImg' />
        <div className="featuredTitle">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
        </div>
        <div className="featuredItem">
            <img src="https://img.freepik.com/free-photo/silhouette-palm-tree-with-umbrella_74190-4056.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" alt="img" className='featuredImg' />
        <div className="featuredTitle">
            <h1>Austin</h1>
            <h2>532 properties</h2>
        </div>
        </div>
        <div className="featuredItem">
            <img src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" alt="img" className='featuredImg' />
        <div className="featuredTitle">
            <h1>Reno</h1>
            <h2>533 properties</h2>
        </div>
        </div>
    </div>
  )
}

export default Featured