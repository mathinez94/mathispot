import React from 'react'
import './LivescoreLive.css'
import axios from 'axios'
import { useQuery } from 'react-query'
// import { useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export const LivescoreLive = () => {
  const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
    params: {
      Category: 'soccer',
      Timezone: '-7'
    },
    headers: {
      'X-RapidAPI-Key': 'f0b4169e9cmsh201998d27af28a4p107c0ajsn708e87b389ee',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };
  
  const dataFetcher = () => {
    return  axios.request(options);
  }
  const  { isLoading, data } = useQuery("live", dataFetcher);
  console.log(data?.data.Stages)

  if(isLoading){
    return <div className='loader'><InfinitySpin 
    width='200'
    color="#f9f9f9"
  /> </div>
  }
  
 
  return (
      <div className='LivescoreLive'>
          {
            
          }
      </div>
  )
}
