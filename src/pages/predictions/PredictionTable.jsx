import React from 'react'
import './PredictionTable.css'
import Guardiola from '../../images/Guardiola.jpg.webp'

const PredictionTable = ({setShowAddTable, tableRows}) => {
  return (
    <div className='table-container'>
        <div className="predictionImgContainer">
            <img src={Guardiola} alt="Great Minds Only" className="prediction-img" />
        </div>
        <div className="rules-container">
            <p className='rules-welcome-note'>welcome to <span>fun</span> prediction page, kindly ensure to mix the fun with a bit of sincerity
               cause folks will be using you tips
            </p>
            <h1>Tips and Rules <hr className='hr'/></h1>
            <ol className='rules-list'>
                <li>click on 'add prediction' button below</li>
                <li>fill the form and submit to add your prediction</li>
                <li>do not repeat same match and outcome that has already been predicted by another user</li>
                <li>do not add more than two predictions in a day</li>
                <li>Ensure correct spellings before you sbumit your Predictions</li>
            </ol>
        </div>
    <div className="table-wrapper">
        <button className='addPrediction' onClick={()=>setShowAddTable(true)}>Add Prediction</button>
        <table className='table-content'>
            <thead>
                <tr>
                    <th>username</th>
                    <th>country</th>
                    <th>teams</th>
                    <th>prediction</th>
                </tr>
            </thead>
            <tbody>
                {
                    tableRows.map((rows, key) => {
                        return <tr key={key}>
                            <td>{rows.username}</td>
                            <td>{rows.country}</td>
                            <td>{rows.teams}</td>
                            <td>{rows.prediction}</td>
                        </tr>
                    }) 
                }
                
            </tbody>
        </table>
    </div>
    
</div>
  )
}

export default PredictionTable