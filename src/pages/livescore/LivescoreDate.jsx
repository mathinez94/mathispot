import React from 'react'
import './LIvescoreDate.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { InfinitySpin } from 'react-loader-spinner'


const options = {
  method: 'GET',
  url: 'https://livescore6.p.rapidapi.com/matches/v2/list-by-date',
  params: {
    Category: 'soccer',
    Date: '20230614',
    Timezone: '-7'
  },
  headers: {
    'X-RapidAPI-Key': '9a6c81044bmshd1b5d03d345b732p1ef8f8jsn6f444d93d598',
    'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
  }
};
const dataFetcher = () => {
  return axios.request(options)
}
export const LivescoreDate = () => {

  const  { isLoading, data } = useQuery("date", dataFetcher);
  // console.log(data?.data.Stages)  
  
  if(isLoading){
    return <div className='loader'><InfinitySpin 
    width='200'
    color="#f9f9f9"
  /> </div>
  }



  return (
    <div className='LivescoreDate'>
         {
          data?.data.Stages.map( details => {
            return <div className="scoreDetailsContainer" key={details.Sid}>
              <div className="scoreDetailsContent">
                <div className="competitionName">
                  <span>{details.Cnm}</span>
                  <span>{details.Snm}</span>
                </div>
                <div className="events">
                  <div className="logoAndTeamName">
                    <img src={details.Events[0].T1[0].Img} alt="#" className="teamLogo" />
                    <span className="teamName">{details.Events[0].T1[0].Nm}</span>
                  </div>
                    
                    <div className="scores">
                      <div className="scoresMatch">
                        <span>{details.Events[0].Tr1}</span>
                        <span>-</span>
                        <span>{details.Events[0].Tr2}</span>
                      </div>
                      <div className="scoresHt">
                        <p>ht</p>
                        <span>{details.Events[0].Trh1}</span>
                        <span>-</span>
                        <span>{details.Events[0].Trh2}</span>
                      </div>
                    </div>

                    <div className="logoAndTeamName">
                      <span className="teamName">{details.Events[0].T2[0].Nm}</span>
                      <img src={details.Events[0].T2[0].Img} alt="#" className="teamLogo" />
                    </div>
                </div>
                {console.log(details)}
              </div>
            </div>
          })
         }
    </div>
  )
}
