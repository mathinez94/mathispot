import React, { useEffect } from 'react'
import './Stories.css'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Spin, Typography } from 'antd';


const options = {
  method: 'GET',
  url: 'https://livescore6.p.rapidapi.com/news/v2/list-by-sport',
  params: {
    category: '2021020913321150030',
    page: '1'
  },
  headers: {
    'x-rapidapi-key': '9a6c81044bmshd1b5d03d345b732p1ef8f8jsn6f444d93d598',
    'x-rapidapi-host': 'livescore6.p.rapidapi.com'
  }
};


const Stories = () => {

  useEffect(() => {
    dataFetcher()
  },[]);
  
  const dataFetcher = () => {
    return axios.request(options)
  };
  const {isLoading, data} = useQuery({
    queryKey: 'newsData',
    queryFn: ()=>dataFetcher()
  });
  // console.log(data.data.data)
  if(isLoading){
    return <div className="spin">
            <Spin />
    </div> 
  };
  return (
    <div className='stories' >
        {
          data?.data.data.map( news => {
           return <Link to={'https://google.com'} className='link' target='blank' key={news.id}>
                      <div className="newsContainer" >
                        <div className="newsContent">
                          <Typography.Text className='news-category'>{news.category.title} news</Typography.Text>
                          <Typography.Title className='news-title'>{news.title}</Typography.Title>
                          {/* <img src={news.images.thumbnail} alt={news.title}  width='20px' height='20px' className='img'/> */}
                        </div>
                      </div>
                  </Link>
          })
          
        }
    </div>
  )
}

export default Stories

