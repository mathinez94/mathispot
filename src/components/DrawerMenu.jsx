import React,{useState} from 'react'
import { Drawer, Button, Divider } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/mathispot logo.png'
import { BiotechOutlined, BookOnlineOutlined, SportsSoccer } from '@mui/icons-material';


const DrawerMenu = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const HideDrawer = () => {
        setOpenDrawer(false)
    }
  return (
    <div>
        <Drawer
        open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
        PaperProps={{sx: {width: '80vw'}}}
        >
            <div className='p-4 border-b-2'>
                <div className='w-full flex-2 items-center justify-center'>
                    <Link  className=" flex items-center px-5 ">
                        <img src={logo} alt="research group logo"  className='h-28 w-52 '/>
                    </Link>
                </div>
            </div>
            <div className="py-3 font-semibold font-serif">
                <div className='flex flex-col gap-10 items-start justify-between '>
                    <nav className='flex flex-col gap-3 items-start justify-center p-3'>            
                        <div><BookOnlineOutlined /><NavLink to='/' className='navlink' onClick={HideDrawer}>News</NavLink> </div>
                        <div><SportsSoccer/><NavLink to='/prediction' className='navlink' onClick={HideDrawer}>Livescore</NavLink></div>
                        <div><BiotechOutlined/><NavLink to='/Peoples' className='navlink' onClick={HideDrawer}>Prediction</NavLink></div>
                    </nav>
                    {/* <Divider /> */}
                </div>
            </div>
        </Drawer>
            <div onClick={() => setOpenDrawer(true)} className='p-5 '>
                <MenuIcon fontSize='large' className=''/>
            </div>
    </div>
  )
}

export default DrawerMenu