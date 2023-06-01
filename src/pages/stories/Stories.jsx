import axios from 'axios'
import './Stories.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Stories = () => {
  const [data, setData] = useState([])
  useEffect(() => {

            const options =  {
              method: 'GET',
              url: 'https://allscores.p.rapidapi.com/api/allscores/news',
              params: {
                sport: '1',
                timezone: 'America/Chicago',
                langId: '1'
              },
              headers: {
                'X-RapidAPI-Key': '9a6c81044bmshd1b5d03d345b732p1ef8f8jsn6f444d93d598',
                'X-RapidAPI-Host': 'allscores.p.rapidapi.com'
              }
            };
            
            try {
            axios.request(options).then((res) => {
              setData(res.data.newsSources)
              setData(res.data.news)
              console.log(res.data.newsSources);
            })
            } catch (error) {
              console.error(error);
            }
      },[])
  
  return (
    <div className='stories'>
      {data.map(news => {
        return <div className="newsContainer" key={news.id}>
          <div className="newsContent">
            <Link to={news.url} target='blank' className='link'>
              <p className='title'>{news.title}{news.name}</p>
              <img src={news.image} alt="#"  className='storiesImage'/>
              <span className='publishDate'>{news.publishDate}</span>
            </Link>

          </div>
        </div>
      })}
    </div>
  )
}

export default Stories