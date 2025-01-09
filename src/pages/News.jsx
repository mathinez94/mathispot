import React, { useEffect } from 'react'
import axios from 'axios'
import { useTheme, useMediaQuery, Divider, Paper, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { options } from '../apis/Newsapi'





export const News = () => {
  

  
  // const queryClient = useQueryClient()
 

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
const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <div className='bg-white w-full'>
      <Divider className=' mt-4 mb-6'><Typography variant={isMediaMatch ? 'title1' : 'h4'} color='primary' fontFamily={'serif'}>Sports news</Typography></Divider>
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