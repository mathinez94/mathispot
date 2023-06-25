import React from 'react'
import './LIvescoreDate.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';






export const LivescoreDate = () => {
  
  const [date, setDate] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const options = {
    method: 'GET',
    url: 'https://livescore6.p.rapidapi.com/matches/v2/list-by-date',
    params: {
      Category: 'soccer',
      Date: '20230622',
      Timezone: '-7'
    },
    headers: {
      'X-RapidAPI-Key': '90f1f5611cmsh71a35539b7795f8p1e0ac0jsn17117842c2cb',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    }
  };
  const dataFetcher = () => {
    return axios.request(options)
  }
  const  { isLoading, data } = useQuery("date", dataFetcher);
  console.log(data?.data.Stages)  
  
  if(isLoading){
    return <div className='loader'><h2>Loading</h2><InfinitySpin 
    width='200'
    color="#f9f9f9"
  /> </div>
  }

   

  return (
    <div className='LivescoreDate'>
      <div className="calender">
        <p  onClick={()=>setShowDate(!showDate)} className='showDateToggle'>select date</p>
        { showDate && 
        <Calendar  
        onChange={ setDate} 
        value={date}
       
        />}
        {date.toLocaleDateString()}
      </div>
      <div className="outlet">

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
                        {details.Events[0].Eps === 'NS' ? <span>{details.Events[0].Esd}</span> : <span>{details.Events[0].Eps}</span>}
                      </div>
                      <div className="matchDetails">

                        <div className="logoAndTeamName">
                          {/* <img src={details.Events[0].T1[0].Img} alt="#" className="teamLogo" /> */}
                          <span className="teamName">{details.Events[0].T1[0].Nm}</span>
                        </div>
                          
                          <div className="scores">
                            <div className="scoresMatch">
                              <span>{details.Events[0].Tr1}</span>
                              <span>-</span>
                              <span>{details.Events[0].Tr2}</span>
                            </div>
                            
                          </div>

                          <div className="logoAndTeamName">
                            <span className="teamName">{details.Events[0].T2[0].Nm}</span>
                            {/* <img src={details.Events[0].T2[0].Img} alt="#" className="teamLogo" /> */}
                          </div>
                      </div>
                    </div>
                    {console.log(details)}
                  </div>
                </div>
              })
            }
      </div>
    </div>
  )
}
