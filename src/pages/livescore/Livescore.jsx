import React, { useEffect, useState } from 'react'
import './Livescore.css'
import axios from 'axios'

const Livescore = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://allscores.p.rapidapi.com/api/allscores/games-scores',
      params: {
        startDate: '18/01/20223',
        langId: '1',
        sport: '1',
        endDate: '18/01/20223',
        timezone: 'Europe/London',
        onlyMajorGames: 'true',
        withTop: 'true'
      },
      headers: {
        'X-RapidAPI-Key': '9a6c81044bmshd1b5d03d345b732p1ef8f8jsn6f444d93d598',
        'X-RapidAPI-Host': 'allscores.p.rapidapi.com'
      }
    };
    
    try {
        axios.request(options).then(res => {
          setData(res.data.games);
          console.log(res.data.games);
      })
    } catch (error) {
      console.error(error);
    }
  },[])
  return (
    <div className='livescoreContainer'>
      {data.map(result => {
        return <div key={result.id}>
            <div className="liveScoreWrapper">
              <div className="nameOfCompetition">
                <span className='competitionName'><h3>{result.competitionDisplayName}</h3></span>  
              </div>
              <div className="livescoreTime">
               {
                result.gameTime < 0 ? <p>{result.startTime}</p> 
                : 
                result.gameTime === 90 ?
                <p>Ended</p>
                :
                <span className='gameTime'><h3>{result.gameTimeDisplay}</h3></span>}  
              </div>
              <div className="scoresSection">
                <p className='teams'>{result.homeCompetitor.name}</p>
                  <div className="scores">
                    { result.gameTime < 0 ? <p style={{color: 'gold'}}>Vs</p> 
                    : 
                    <div className="scores">
                      <span className='scoreNumber'>{result.homeCompetitor.score}</span>
                      <span><h1 className='scoreNumber dash'>:</h1></span>
                      <span className='scoreNumber'>{result.awayCompetitor.score}</span>
                    </div>
                    }
                  </div>
                <p className='teams'>{result.awayCompetitor.name}</p>
              </div>
            </div>
          </div>
      })}
    </div>
  )
}

export default Livescore