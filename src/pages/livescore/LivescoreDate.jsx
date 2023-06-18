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
    'X-RapidAPI-Key': 'f0b4169e9cmsh201998d27af28a4p107c0ajsn708e87b389ee',
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
                  <span className='competitionGroup'>{details.Cnm}</span>:
                  <span className='competitionStage'>{details.Snm}</span>
                </div>
                <div className="events">
                  <div className="matchStatus">
                    <span>{details.Events[0].Eps}</span>
                  </div>
                  <div className="matchDetails">

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
                </div>
                {console.log(details)}
              </div>
            </div>
          })
         }
    </div>
  )
}
