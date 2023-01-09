import './newsitem.css'
import { IconButton, styled, Tooltip } from '@mui/material';
import { Box, Button } from '@mui/material';
import { width } from '@mui/system';
import React, { useContext } from 'react';
import { searchInput } from '../App';
import GradeIcon from '@mui/icons-material/Grade';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from 'react-router-dom';

const articleCard = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'rgb(229, 231, 230)',
    border: '1px solid black'
})
function NewsItem({ title, description, url, urlToImage, index, article }, props) {
    const { favorites, setFavorites } = useContext(searchInput)
    const addToFavorites = () => {
        setFavorites([...favorites, article])
        console.log({ index });
    }
    return (
        <Box display='flex' justifyContent='space-between' flexDirection='column' marginBottom='5%' marginLeft='20%' style={{ backgroundColor: 'rgb(246, 246, 246)', width: '70vw', minHeight: '50vw', borderRadius: '1vw' }}>
            <img className='articleImg' src={urlToImage} alt={urlToImage}></img>
            <Box>
                <box>
                    <h3 className='articleHeader'><a className='articleTitle'>{title}</a></h3>
                    <p className='articleDescription'>{description}</p>
                </box>
            </Box>
            <Box padding='2%' paddingTop='0%' alignSelf='flex-start'>
                <Tooltip title='ADD TO FAVORITES' arrow><IconButton><GradeIcon onClick={addToFavorites}></GradeIcon></IconButton></Tooltip>
                <a href={url} target='_blank'><IconButton><LaunchIcon></LaunchIcon></IconButton></a>
            </Box>
        </Box>
    );
}

export default NewsItem;