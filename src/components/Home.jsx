import './home.css'
import { Box, Typography } from '@mui/material';

function Home(props) {
    return (
        <Box marginLeft='16%' sx={{width: {xs: '50vw', sm: '70vw'}}} display='flex' flexDirection='column'>
            <Typography variant='h1' className='Header' marginBottom='2%' fontFamily='Prosto One, cursive' textAlign='center'>THE CURRENT</Typography>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' style={{alignSelf:'center'}} alt='THE CURRNET logo'></img>
            <Typography variant='h3' marginTop='2%' fontFamily='Prosto One, cursive' textAlign='center'>Stay informed, stay ahead</Typography>
        </Box>
    );
}

export default Home;