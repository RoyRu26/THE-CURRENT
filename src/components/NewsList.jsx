import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import { searchInput } from '../App';
import { Box } from '@mui/system';
function NewsList() {
    const { userInput } = useContext(searchInput)
    const [articles, setArticles] = useState(JSON.parse(localStorage.getItem('articles')))
    const [error, setError] = useState()
    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await axios.get(`https://newsapi.org/v2/everything?q=${userInput}&apiKey=6a219461fbbc42bd9f486f5060c0fcbd`)
                setArticles(response.data.articles)
            } catch (errors) {
                setError(error)
            }
        }
        getArticles()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [userInput])
    localStorage.setItem('articles', JSON.stringify(articles))
    if (articles) {
        return (
            articles.map((article , index) => {
                return (
                    <Box>
                        <NewsItem 
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            urlToImage={article.urlToImage}
                            index={index}
                            article={article}
                        />
                    </Box>
                )
            })
        )
    }
    else if (error) return <div>Something went wrong</div>
    return <div>Loading...</div>
}

export default NewsList;