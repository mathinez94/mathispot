import React from 'react'
import './Livescore.css'
import { Link, Outlet } from 'react-router-dom'

const Livescore = () => {
  return (
    <div className='livescore'>
      <nav className='livescoreNav'>
        <Link to='live' className='livescoreNavLink'>Live</Link>
        <Link to='date' className='livescoreNavLink'>Date</Link>
        <Link to='league' className='livescoreNavLink'>League</Link>
      </nav>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}
// SoccerBasicMatchParser
// EXTRA_TIME = “Tr1ET”;
// HALF_TIME = “Trh1”;
// AWAY_PENALTY_SCORE = “Trp2”;
// HOME_PENALTY_SCORE = “Trp1”;
// MATCH_INFO_PROPERTIES = “EO”;
// PENALTY = “Trp1”;
export default Livescore