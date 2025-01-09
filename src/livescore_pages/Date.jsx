import React from 'react'
import LivescoreNav from './LivescoreNav'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useTheme, useMediaQuery,Paper, Typography } from '@mui/material'
import { Spin } from 'antd'
import { options } from '../apis/Dateapi'


const Date = () => {
  
  const dataFetcher = () => {
    return  axios.request(options);
  }

  const {isLoading, data} = useQuery({
    queryKey: ['live'],
    queryFn: dataFetcher
  })

  if(isLoading){
    <div>
      <Spin />
    </div>
  }

  const theme = useTheme();
  const isMediaMatch = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className='bg-white w-full'>

      <div>
        <LivescoreNav />
      </div>
      <div>
         {
          data?.data.Stages.map(TodayMatch => {
            return <div className='mt-1' key={TodayMatch.Sid}>

                <Paper elevation={2} className='px-4 py-2 flex-col '>
                  <div className='text-blue-600 flex '>
                    <div className={isMediaMatch ? 'flex-none w-7 ' : 'flex-none w-14'}>
                      {TodayMatch.Events[0].Eps === 'NS' ? <Typography variant={isMediaMatch ? 'subtitle1' : 'title1'} >{TodayMatch.Events[0].Esd}</Typography> : <Typography variant={isMediaMatch ? 'subtitle1' : 'title1'}>{TodayMatch.Events[0].Eps}</Typography>}
                    </div>
                    <div className='flex-1 '>
                      <div className={ isMediaMatch ? 'flex items-center justify-center w-[100%] rounded-sm ' : 'flex items-center justify-center'}>
                        <Typography variant={isMediaMatch ? 'title1' : 'h6'}>{TodayMatch.Cnm}</Typography>:
                        <Typography variant={isMediaMatch ? 'title1' : 'h6'}>{TodayMatch.Snm}</Typography>
                      </div>
                   </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    <div className={isMediaMatch ? 'w-[100%] flex items-center justify-between ' : 'w-[50%] flex items-center justify-between'}>
                      <div className='flex-1 text-right'>
                        <Typography variant={isMediaMatch ? 'subtitle1' : 'title1'} className={isMediaMatch?'text-xs':'text-base'}>{TodayMatch.Events[0].T1[0].Nm}</Typography>
                      </div>
                      <div>
                      <div className="">
                        <div className='flex items-center justify-center px-2 mx-2 text-red-600 bg-gray-400 rounded-sm'>
                          <Typography variant={isMediaMatch ? 'title2' : 'h6'}>{TodayMatch.Events[0].Tr1}</Typography>
                          <Typography variant={isMediaMatch ? 'title2' : 'h6'}>:</Typography>
                          <Typography variant={isMediaMatch ? 'title2' : 'h6'}>{TodayMatch.Events[0].Tr2}</Typography>
                        </div>
                      </div>
                      </div>
                      <div className='flex-1'>
                        <Typography variant={isMediaMatch ? 'subtitle1' : 'title1'} className="">{TodayMatch.Events[0].T2[0].Nm}</Typography>
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

export default Date