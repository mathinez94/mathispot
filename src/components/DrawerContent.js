import React from 'react'
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';

import {  useNavigate } from "react-router-dom";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import Logo from '../images/Mathispot logo.jpg'


 const DrawerContent = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const history = useNavigate();
    const redirect = (body) => {
        history(body);
      };

     const style={ padding:'10px', border:'1px dotted grey', margin:'0px 0px 10px 10px' }
  return (
    <>
      <Drawer 
      open={openDrawer}
      onClose={()=>setOpenDrawer(false)}
      PaperProps={{sx: {width: '80vw'}}}
      > 
      {/* className="flex w-full h-[15vh] justify-center items-center border-b-2 border-grey-500"
      style to the typography div below
       */}
       <div className="flex w-full px-5 h-[15vh] border-b-2 border-grey-500" >
         <div className="flex items-center">
            <div className="flex relative items-center gap-1 ">
              <img
                src={Logo}
                alt="Mathispot logo"
                className="cursor-pointer w-9"
                onClick={redirect}
              />
              <Typography variant="title1" className="font-bold text-red-400 mt-3" >Mathispot</Typography>
       
             </div>
         </div>
       </div>
       <List>
          <ListItem onClick={()=>setOpenDrawer(false)}>
          <ListItemButton onClick={() => redirect('/')} sx={style}>
            <ListItemIcon><MenuBookIcon/></ListItemIcon>
            <ListItemText primary='News'></ListItemText>
          </ListItemButton>
          </ListItem>

          <ListItem onClick={()=>setOpenDrawer(false)}>
          <ListItemButton onClick={() => redirect('/prediction')} sx={style}>
            <ListItemIcon><LightbulbOutlinedIcon/></ListItemIcon>
            <ListItemText primary='Prediction'></ListItemText>
          </ListItemButton>
          </ListItem>

          <ListItem onClick={()=>setOpenDrawer(false)}>
          <ListItemButton onClick={() => redirect('/livescore')} sx={style}>
            <ListItemIcon><SportsSoccerIcon/></ListItemIcon>
            <ListItemText primary='Livescore'></ListItemText>
          </ListItemButton>
          </ListItem>
      </List>
      </Drawer>
      <IconButton onClick={()=> setOpenDrawer(true)} sx={{padding:'20px'}}>
         <MenuIcon fontSize='large' color='inherit'/>
      </IconButton>
    </>
  )
  
}
export default DrawerContent;
