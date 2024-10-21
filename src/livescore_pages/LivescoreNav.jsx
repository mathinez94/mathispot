import React from 'react'
import { Button, ButtonGroup } from '@mui/material';
import {  useNavigate } from "react-router-dom";

const LivescoreNav = () => {
    const history = useNavigate();
  const redirect = (body) => {
    history(body);
  }
  return (
    <div className='bg-white flex items-center justify-center'>
          <ButtonGroup variant='outlined' className='px-3 py-2' >
            <Button onClick={() => redirect('/live')}>Live</Button>
            <Button onClick={() => redirect('/date')}>Today</Button>
          </ButtonGroup>
      </div>
  )
}

export default LivescoreNav