import React from 'react'
import './FeaturedProperties.css'
import useFetch from '../../Hooks/useFetch'

function FeaturedProperties() {
    const {data , loading } = useFetch('http://localhost:8000/api/hotels?featured=true')
    // console.log(data);

  return (
    <div  className='fp'>
       {loading ? 'Loading...'
        : <> 
        {data.map((item) =>(
            <div className="fpItem" key={item?._id}>
                <img src={item.photos[0]} alt='img' className='fpImg' />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        ))}
        </>}
    </div>
  )
}

export default FeaturedProperties