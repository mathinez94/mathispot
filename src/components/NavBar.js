import {  useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button, ButtonGroup } from '@mui/material';
import Logo from '../images/Mathispot logo.jpg'
import { Typography } from '@mui/material'


const NavBar = () => {
  const history = useNavigate();
  const redirect = (body) => {
    history(body);
  };


  return (
    <AppBar position="static" color='inherit' className='py-6'>
      <Container maxWidth="xl">
        <Toolbar disableGutters className='flex justify-between'>
          <div className='flex items-center justify-center '>
              <img src={Logo} alt="logo" className="w-24 mt-3"/>
              <Typography variant="h4" className='font-serif text-red-500' >Mathispot</Typography>
          </div>
          <ButtonGroup variant='text' color='inherit' className='px-3 py-2' >
            <Button onClick={() => redirect('/')}>News</Button>
            <Button onClick={() => redirect('/prediction')}>Prediction</Button>
            <Button onClick={() => redirect('/livescore')}>Livescore</Button>
          </ButtonGroup>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
