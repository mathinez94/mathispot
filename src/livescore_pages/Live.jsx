import React from 'react'
import LivescoreNav from './LivescoreNav'
import Common from '../components/Common'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useTheme, useMediaQuery,Paper, Typography } from '@mui/material'
import { Spin } from 'antd'

const Live = () => {

    const theme = useTheme();
    const isMediaMatch = useMediaQuery(theme.breakpoints.down('sm'))
  
    const options = {
        method: 'GET',
        url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
        params: {
          Category: 'soccer',
          Timezone: '-1'
        },
        headers: {
          'X-RapidAPI-Key': '90f1f5611cmsh71a35539b7795f8p1e0ac0jsn17117842c2cb',
          'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
        }
      };

      const dataFetcher = () => {
        return  axios.request(options);
      }
    
      const {isLoading, data} = useQuery({
        queryKey: ['live'],
        queryFn: dataFetcher
      })
      // console.log(data?.data.Stages)
      if(isLoading){
        <div>
          <Spin />
        </div>
      }
  return (
    <div className='bg-white w-full'>
      <div>
        <Common />
      </div>
      <div>
        <LivescoreNav />
      </div>
      <div>
         {
          data?.data.Stages.map(LiveMatch => {
            return <div className='mt-1' key={LiveMatch.Events.Sid}>

                <Paper elevation={2} className='px-4 py-2 flex-col '>
                  <div className='text-blue-600 flex '>
                    <div className='flex-none w-14'>
                      {LiveMatch.Events[0].Eps === 'NS' ? <Typography variant={isMediaMatch ? 'subtitle1' : 'title1'}>{LiveMatch.Events[0].Esd}</Typography> : <Typography variant={isMediaMatch ? 'subtitle1' : 'title1'}>{LiveMatch.Events[0].Eps}</Typography>}
                    </div>
                    <div className='flex-1 '>
                      <div className='flex items-center justify-center'>
                        <Typography variant={isMediaMatch ? 'title1' : 'h6'}>{LiveMatch.Cnm}</Typography>:
                        <Typography variant={isMediaMatch ? 'title2' : 'h6'}>{LiveMatch.Snm}</Typography>
                      </div>
                   </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    <div className='w-[50%] flex items-center justify-between'>
                      <div className='flex-1 text-right'>
                        <Typography variant={isMediaMatch ? 'subtitle1' : 'title1'} className="">{LiveMatch.Events[0].T1[0].Nm}</Typography>
                      </div>
                      <div>
                      <div className="">
                        <div className='flex items-center justify-center px-2 mx-2 text-red-600 bg-gray-400'>
                          <Typography variant={isMediaMatch ? 'title1' : 'h6'}>{LiveMatch.Events[0].Tr1}</Typography>
                          <Typography variant={isMediaMatch ? 'title1' : 'h6'}>:</Typography>
                          <Typography variant={isMediaMatch ? 'title1' : 'h6'}>{LiveMatch.Events[0].Tr2}</Typography>
                        </div>
                      </div>
                      </div>
                      <div className='flex-1'>
                        <Typography variant={isMediaMatch ? 'subtitle1' : 'title1'} className="">{LiveMatch.Events[0].T2[0].Nm}</Typography>
                      </div>
                    </div>
                  </div>
                </Paper>
            </div>
          })
         }
      </div>
      
    </div>
  )
}

export default Live