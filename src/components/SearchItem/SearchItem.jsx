import React from 'react'
import './SearchItem.css'

function SearchItem() {
  return (
    <div className='searchItem'>
        <img src="https://img.freepik.com/free-photo/coconut-landscape-green-tropical-swimming_1253-651.jpg?size=626&ext=jpg&uid=R119851894&ga=GA1.1.1922389197.1677510164&semt=ais" className='searchItemImg' alt="img" />
        <div className="searchItemDesc">
            <h1 className="searchItemTitle">Tower Street Apartment</h1>
            <span className="searchItemDistance">500m from center</span>
            <span className="searchItemTaxiOp">Free Airport Taxi</span>
            <span className='searchItemSubtitle'>
                Studio Apartment with Air conditioning
            </span>
            <span className="searchItemFeatured">
                Entire Studio . 1 Bathroom . 21m<sup>2</sup> 1 full bed
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
                <span className="searchItemPrice">$123</span>
                <span className="searchItemTaxOp">Includes Taxes and fees</span>
                <button className='searchItemCheckBtn'>See Availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem