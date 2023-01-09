import { AppBar, Toolbar, styled, Typography, InputBase, Button, IconButton, Tooltip } from '@mui/material';
import React, { useContext, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import { searchInput } from '../App';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './navbar.css'
const StyledToolBar = styled(Toolbar)(
    {
        display: 'flex',
        justifyContent: 'space-between'
    })
const Search = styled('div')({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: '0.3vw',
    width: '50%'
})
const SearchButton = styled(Button)({
    color: 'white'
})
function NavBar(props) {
    const { userInput, setUserInput, toggleRightBar } = useContext(searchInput)
    const [ tempValue, setTempValue ] = useState('')
    const setInput = () => {
        props.setSend(true)
        setUserInput(tempValue);
        console.log(userInput);
    }
    return (
        <div>
            <AppBar position='fixed' sx={{ marginBottom: '30px', zIndex: '1' }}>
                <StyledToolBar>
                    <Typography className='Title' fontFamily='Prosto One, cursive' variant='h6' onClick={() => props.setSend(false)} sx={{ display: { xs: 'none', sm: 'block' } }}>THE CURRENT</Typography>
                    <Tooltip title='FEED' arrow><IconButton onClick={() => props.setSend(true)}><ArrowBackIosNewIcon/></IconButton></Tooltip>
                    <SearchIcon onClick={() => props.setSend(false)} sx={{ display: { xs: 'block', sm: 'none' } }}></SearchIcon>
                    <Search><InputBase placeholder='Search...' onChange={(e) => setTempValue(e.target.value)} /></Search>
                    <SearchButton onClick={setInput}>SUBMIT</SearchButton>
                    <>
                        <IconButton onClick={() => toggleRightBar(true)}>
                            <Tooltip title='FAVORITES' arrow><StarIcon /></Tooltip>
                        </IconButton>
                    </>
                </StyledToolBar>
            </AppBar>
        </div>
    );
}

export default NavBar;