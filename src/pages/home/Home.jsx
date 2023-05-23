import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom'


const Home = () => {
  return (
        <div className="home">
            <div className='home-divs'><NavLink to='/stories' className='home-div-texts'>Stories</NavLink></div>
            <div className='home-divs'><NavLink to='/predictions' className='home-div-texts'>Predictions</NavLink></div>
            <div className='home-divs'><NavLink to='/livescore' className='home-div-texts'>Livescore</NavLink></div>
            <div className='home-divs'><NavLink to='/about' className='home-div-texts'>About</NavLink></div>
            <div className='home-divs'><NavLink to='contact' className='home-div-texts'>Contact</NavLink></div>
        </div>
  )
}

export default Home