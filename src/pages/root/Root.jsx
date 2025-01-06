import React from 'react'
import '../root/Root.css'
import { Outlet, Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import { useTheme, useMediaQuery, Button, Paper, Typography } from '@mui/material'
import DrawerMenu from '../../components/DrawerMenu';
import logo from '../../images/mathispot logo.png'
import {auth} from '../../Firebase-config.js'


export const Root = ({isAuth}) => {

  const theme = useTheme();
    const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))
 
  return (
    <>
    <div className='m-0 p-0 w-full fixed top-0 z-40' >
      <Paper elevation={2} className=' py-4' >
      
       { 
        isMediaMatch ? 
        <div className='w-[100%] flex gap-2 items-center justify-center'>
          <div className='w-[20%] h-[100%] items-center justify-center '>
            <DrawerMenu /> 
          </div>
          <div className='w-[80%] flex items-center justify-between'>
            <div className=' items-center justify-center '>
              <Link  className=" flex-1 items-center">
                <img src={logo} alt="mathispot logo"  className='h-28 w-52 '/>
              </Link>
            </div>
            <div className='flex-2 mr-3'>
                  {
                    isAuth ? 
                    <div className='flex gap-2 items-center justify-center'>
                      <Typography variant='h6' fontFamily='serif'>Welcome {auth.currentUser.displayName}</Typography>
                      <img src={auth.currentUser.photoURL} alt={auth.currentUser.displayName} className='w-8 rounded-full'/>
                    </div>
                    :
                    <div className=''>
                      <Button variant='contained' color='primary'><Link to='/sign up'>Login / sign up</Link> </Button>
                    </div>
                  }
                </div>
        </div>
          </div>
        :
        <div>
           <Menu isAuth={isAuth}/>
        </div>
        }
      </Paper>
    </div>
    <div className='mt-44'>
     <Outlet />
    </div>
    </>
  )
}
