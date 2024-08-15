import React, { useState } from 'react'
import "./Navbar.css"
import DestopMenu from './DestopMenu';
import MobileMenu from './MobileMenu';
import { Drawer } from 'antd';
import { MenuOutlined, MediumCircleFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [selected, setSelected] = useState(false);
  return (
    <div className='navbar'>
      <div className="mobileViewIcon">
          <MenuOutlined onClick={() => setSelected(true)} style={{fontSize: '40px', padding:'20px', flex:'1'}}/> 
          <div className="menulogo">
            <MediumCircleFilled style={{fontSize:'40px'}}/>
            <Link to='/'  className='logoText'>Mathispot</Link>
          </div>
      </div>
      <div className="desktopMenu">
        <DestopMenu />
      </div>
      <div className="mobileMenu">
        <Drawer
         style={{width: '80%'}}
        placement= 'left'
        open={selected}
        closable={false}
        onClose={() => {setSelected(false)}}
        >
           <MobileMenu />
        </Drawer>
      </div>
    </div>
    // MEDIA SCREEN

  )
}

export default Navbar
        