import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useTheme, useMediaQuery,Button, ButtonGroup, Divider, Paper, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'





export const News = () => {
  
  const [newsCategory, setNewsCategory] = useState('sport')
  
  // const queryClient = useQueryClient()
  const options = {
    method: 'GET',
    url: `https://google-news13.p.rapidapi.com/${newsCategory}`,
    params: {lr: 'en-US'},
    headers: {
      'x-rapidapi-key': 'f0b4169e9cmsh201998d27af28a4p107c0ajsn708e87b389ee',
      'x-rapidapi-host': 'google-news13.p.rapidapi.com'
    }
  };

  useEffect(() => {
    dataFetcher(options)
},[])



  const dataFetcher = () => {
    return  axios.request(options);
  }

  const {data} = useQuery({
    queryKey: ['news'],
    queryFn: dataFetcher
  })
//  console.log(data)

const theme = useTheme();
const isMediaMatch = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className='bg-white w-full'>

      <div className='w-full '>
      <ButtonGroup variant='outlined' size={isMediaMatch ? 'small' : 'medium'} className='px-3 py-2 ' >
           <Button onClick={()=>setNewsCategory('latest')}>Lattest</Button>
           <Button onClick={()=>setNewsCategory('sport')}>Sport</Button>
           <Button onClick={()=>setNewsCategory('world')}>World</Button>
           <Button onClick={()=>setNewsCategory('business')}>Business</Button>
           <Button onClick={()=>setNewsCategory('health')}>Health</Button>
           <Button onClick={()=>setNewsCategory('science')}>Science</Button>
      </ButtonGroup>
      </div>
      <Divider className=' mt-4 mb-6'><Typography variant={isMediaMatch ? 'title1' : 'h4'} color='primary' fontFamily={'serif'}>{newsCategory} news</Typography></Divider>
      <div className='mt-5 px-4'>
        {
          data?.data.items.map(newsData => {
            return<Link to={newsData.newsUrl} target='blank'>
              <div className='mt-1'>
               <Paper elevation={1} className='px-4 py-2'>
                {/* <div>
                  <img src={newsData.images.thumbnail} alt="News/Image" />
                </div> */}
                <div className='px-2 '>                
                    <Typography 
                    variant={isMediaMatch ? 'title1' : 'h6'} 
                    className='flex items-center justify-center'
                    fontFamily={'serif'} 
                    color='primary'>{newsData.title}</Typography>
                    <Typography variant={isMediaMatch ? 'title1' : 'title1'}>{newsData.snippet}</Typography>
                    <Typography variant={isMediaMatch ? 'title2' : 'title2'} color='primary'>{newsData.publisher}</Typography>
                </div>
               </Paper>
               </div>
            </Link>
          })
        }
      </div>
    </div>
  )

}