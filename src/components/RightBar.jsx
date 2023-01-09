import { Box, Drawer, IconButton, List, ListItem, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { searchInput } from '../App';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './rightbar.css'

function RightBar(props) {
    const { favorites, setFavorites, rightBar, toggleRightBar } = useContext(searchInput)
    const deleteFav = index => { setFavorites(favorites.filter((favorite, favIndex) => index !== favIndex)) }
    return (
        <Drawer open={rightBar} onClose={() => toggleRightBar(false)}>
            <Box bgcolor='rgb(229, 231, 230)' maxWidth='50vw' position='fixed' padding='1%' right='0' minHeight='100vh' top='0' flexDirection='column' flexWrap='wrap'>
                    <Typography variant='h5' textAlign='center' fontFamily='Prosto One, cursive' color='rgb(72,72,72)' marginLeft='2%'>FAVORITES</Typography>
                <List>
                    {favorites.length === 0 ? <Typography textAlign='center'>Nothing To See :(</Typography> :
                        favorites.map((article, i) =>
                            <ListItem>
                                <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                                    <a className='favoriteLink' href={article.url}>{article.title}</a>
                                    <IconButton onClick={() => deleteFav(i)}><DeleteForeverIcon/></IconButton>
                                </Box>
                            </ListItem>)}
                    {favorites.length > 12 && alert(`"${favorites.shift().title}" has been removed from your favorites`)}
                    {favorites.length > 12 && favorites.shift()}
                </List>
            </Box>
        </Drawer>
    );
}

export default RightBar;