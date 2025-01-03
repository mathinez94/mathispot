import React from 'react'
import logo from '../../src/images/mathispot logo.png'
import {  Link, NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

const Menu = () => {
  return (
    <div>
        <div className='w-full flex items-center justify-center h-20'>
            <div className=' flex-2'>
              <Link  className=" flex items-center px-5 ">
                <img src={logo} alt="research group logo"  className='h-28 w-52 '/>
              </Link>
            </div>
            <div className="flex-1 py-3 font-semibold font-serif ">
              <div className='flex gap-2 items-center justify-between '>
                <nav className='flex-1 flex items-center justify-center'>            
                      <NavLink to='/' className='navlink'>News</NavLink> 
                      <NavLink to='/prediction' className='navlink'>Prediction</NavLink>
                      <NavLink to='/livescore' className='navlink'>Livescore</NavLink>
                </nav>
                <div className='flex-2 mr-3'>
                  <Button variant='contained' color='primary'><Link to='/login'>Login</Link> </Button>
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Menu