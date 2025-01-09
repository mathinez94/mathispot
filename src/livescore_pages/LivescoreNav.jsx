import React from 'react'
import { Button, ButtonGroup } from '@mui/material';
import { Link } from "react-router-dom";

const LivescoreNav = () => {
   
  
  return (
    <div className='bg-white flex items-center justify-center'>
          <ButtonGroup variant='outlined' className='px-3 py-2' >
            <Link to='/live'><Button >Live</Button></Link>
            <Link to='/today'><Button >Today</Button></Link>
          </ButtonGroup>
      </div>
  )
}

export default LivescoreNav