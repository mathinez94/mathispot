import React from 'react';
import './Livescore.css'
import { Link, Outlet } from 'react-router-dom'




const Livescore = () => {

  return (
    <div className='livescore'>
      <nav className='livescoreNav'>
        <Link to='live' className='livescoreNavLink'>Live</Link>
        <Link to='date' className='livescoreNavLink'>date</Link>
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}

export default Livescore