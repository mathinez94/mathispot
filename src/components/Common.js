import React from 'react'
import NavBar from '../components/NavBar'
import { useTheme, useMediaQuery, Typography } from '@mui/material'
import DrawerContent from '../components/DrawerContent'
import Logo from '../images/Mathispot logo.jpg'

const Common = () => {
    const theme = useTheme();
    const isMediaMatch = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className='mb-2'>
        <div className=''>
        {
          isMediaMatch ? 
          <div className='flex items-center '>
            <DrawerContent />
            <div className='flex-1 text-center font-sans'>
              <div className='flex items-center justify-center '>
                <img src={Logo} alt="logo" className="w-24 mt-3"/>
                <Typography variant="h5" className='text-red-500' >Mathispot</Typography>
              </div>
            </div> 
          </div> : 
           <NavBar />
        }
      </div>
    </div>
  )
}

export default Common