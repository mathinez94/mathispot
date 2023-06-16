import React from 'react'
import './Stories.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner'


const options = {
  method: 'GET',
  url: 'https://livescore6.p.rapidapi.com/news/v2/list',
  headers: {
    'X-RapidAPI-Key': '9a6c81044bmshd1b5d03d345b732p1ef8f8jsn6f444d93d598',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
};
const dataFetcher = () => {
  return axios.request(options)
}
const Stories = () => {
  
    const  { isLoading, data } = useQuery("news", dataFetcher);
    console.log(data?.data.topStories)

    if(isLoading){
      return <div className='loader'><InfinitySpin 
      width='200'
      color="#f9f9f9"
    /> </div>
    }
  return (
    <div className='stories'>
        {
          data?.data.topStories.map( news => {
            return <Link to={news.url} key={news.id}  className='link'>
            <div className="newsContainer">
              <div className="newsContent">
                <p className='news-category'>{news.categoryLabel} news</p>
                <h1 className='news-title'>{news.title}</h1>
                <img src={news.mainMedia.gallery.url} alt={news.mainMedia.gallery.alt}  width={news.mainMedia.gallery.width} height={news.mainMedia.gallery.height} className='img'/>
              </div>
            </div>
            </Link>
          })
        }
    </div>
  )
}

export default Stories