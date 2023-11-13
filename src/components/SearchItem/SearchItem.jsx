import React from 'react'
import './SearchItem.css'
import { Link } from 'react-router-dom'

function SearchItem({item}) {
  return (
    <div className='searchItem'>
        <img src={item.photos[0]} className='searchItemImg' alt="img" />
        <div className="searchItemDesc">
            <h1 className="searchItemTitle">{item.name}</h1>
            <span className="searchItemDistance">{item.distance}m from center</span>
            <span className="searchItemTaxiOp">Free Airport Taxi</span>
            <span className='searchItemSubtitle'>
                Studio Apartment with Air conditioning
            </span>
            <span className="searchItemFeatured">
                {item.desc}
            </span>
            <span className="searchItemCancel">Free Cancellation</span>
            <span className="searchItemCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="searchItemDetails">
            <div className="searchItemRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="searchItemDetailText">
                <span className="searchItemPrice">${item.cheapestPrice}</span>
                <span className="searchItemTaxOp">Includes Taxes and fees</span>
                <Link to={`/hotel/${item._id}`}>
                <button className='searchItemCheckBtn'>See Availability</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SearchItem