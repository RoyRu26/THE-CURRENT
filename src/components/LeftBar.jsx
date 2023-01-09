import './leftbar.css'
import { Box, Tooltip } from '@mui/material';
import React, { useContext } from 'react';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';import { searchInput } from '../App';
import { AppBar, Toolbar, styled, Typography, InputBase, Button } from '@mui/material';
import { height } from '@mui/system';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BiotechIcon from '@mui/icons-material/Biotech';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Icons = styled(Box)({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    height:'90vh',
    margin:'0',
})
function LeftBar(props) {
    const {userInput , setUserInput} = useContext(searchInput)
    const searchLogo = (category) =>
    {
        setUserInput(category)
        props.setSend(true)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <Box bgcolor='rgb(229, 231, 230)' flexDirection='column' minHeight='100vh' sx={{ top:{ xs:'4%', sm:'6%' }}} position='fixed' padding='3%' bottom='0'>
            <Icons>
                <Tooltip title='SPORT' arrow><SportsFootballIcon className='logo' onClick={() => searchLogo('sport')}/></Tooltip>
                <Tooltip title='REAL ESTATE' arrow><BusinessIcon className='logo' onClick={() => searchLogo('real estate')}/></Tooltip>
                <Tooltip title='ECONOMY' arrow><MonetizationOnIcon className='logo' onClick={() => searchLogo('economy')}/></Tooltip>
                <Tooltip title='SCIENCE' arrow><BiotechIcon className='logo' onClick={() => searchLogo('science')}/></Tooltip>
                <Tooltip title='MOTORS' arrow><DirectionsCarIcon className='logo' onClick={() => searchLogo('car')}/></Tooltip>
                <Tooltip title='FOOD' arrow><RamenDiningIcon className='logo' onClick={() => searchLogo('food')}/></Tooltip>
                <Tooltip title='HEALTH' arrow><LocalHospitalIcon className='logo' onClick={() => searchLogo('health')}/></Tooltip>
            </Icons>
        </Box>
    );
}

export default LeftBar;