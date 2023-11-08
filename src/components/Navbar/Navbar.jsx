import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Syed Booking App</span>
            <div className="navItem">
                <button className="navButton">Signup</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar