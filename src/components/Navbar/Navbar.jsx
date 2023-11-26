import React, { useContext } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function Navbar() {

  const { user } = useContext(AuthContext)
  // console.log(user.UserLoggedIn.username);
  return (
    <div className='navbar'>
        <div className="navContainer">
          <Link to='/' style={{color :'inherit',textDecoration:'none'}}>
            <span className="logo">Syed Booking App</span>
          </Link> 
            {user ? user.UserLoggedIn.username : 
            (<div className="navItem">
                <button className="navButton">Signup</button>
                <Link to='/login'>
                  <button className="navButton">Login</button>
                </Link>
            </div>)}
        </div>
    </div>
  )
}

export default Navbar