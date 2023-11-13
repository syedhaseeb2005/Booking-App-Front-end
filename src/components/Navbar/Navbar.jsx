import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navContainer">
          <Link to='/' style={{color :'inherit',textDecoration:'none'}}>
            <span className="logo">Syed Booking App</span>
          </Link> 
            <div className="navItem">
                <button className="navButton">Signup</button>
                <Link to='/login'>
                  <button className="navButton">Login</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar