import React from 'react'
import './Featured.css'
import useFetch from '../../Hooks/useFetch.js'

function Featured() {
    
    const {data , loading , error} = useFetch('http://localhost:8000/api/hotels/countByCity?cities=kashmir,madrid,london')
  return (
    <div className='featured'>
        {loading ? "Loading..."
         : <>
            <div className="featuredItem">
            <img src="https://img.freepik.com/premium-photo/hotel_664434-4822.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" alt="img" className='featuredImg' />
        <div className="featuredTitle">
            <h1>Kashmir</h1>
            <h2>{data[0]} properties</h2>
        </div>
        </div>
        <div className="featuredItem">
            <img src="https://img.freepik.com/free-photo/silhouette-palm-tree-with-umbrella_74190-4056.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" alt="img" className='featuredImg' />
        <div className="featuredTitle">
            <h1>Madrid</h1>
            <h2>{data[1]} properties</h2>
        </div>
        </div>
        <div className="featuredItem">
            <img src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" alt="img" className='featuredImg' />
        <div className="featuredTitle">
            <h1>London</h1>
            <h2>{data[2]} properties</h2>
        </div>
        </div></>}
    </div>
  )
}

export default Featured