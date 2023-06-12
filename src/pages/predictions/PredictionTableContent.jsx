import React from 'react'
import './PredictionTableContent.css'
import { useState } from 'react'
import { FaTimes }from 'react-icons/fa'

const PredictionTableContent = ({setShowAddTable, submitRow}) => {
    const [formInputs, setFormInputs] = useState({
        username: "",
        country: "",
        teams: "",
        prediction: ""
    });
    console.log(formInputs)
    const handleChange = (e) => {
        setFormInputs( {
            ...formInputs,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        submitRow(formInputs);
        setShowAddTable(false);
    }
  return (
    <div className='addTable-container'>
        <div className="addTable-content">
            <FaTimes  className='close-icon' onClick={()=>setShowAddTable(false)}/>
            <form className='form'>
                <div className='form-content'>
                    <label htmlFor="username">Username</label>
                    <input name="username" value={formInputs.username} onChange={ handleChange}/>
                </div>
                <div className='form-content'>
                    <label htmlFor="country">Country</label>
                    <input name="country" value={formInputs.country} onChange={ handleChange}/>
                </div>
                <div className='form-content'>
                    <label htmlFor="teams">Teams</label>
                    <input name="teams" value={formInputs.teams} onChange={ handleChange}/>
                </div>
                <div className='form-content'>
                    <label htmlFor="prediction">Prediction</label>
                    <input name="prediction" value={formInputs.prediction} onChange={ handleChange}/>
                </div>
                <button type='submit' className='btn' onClick={handleSubmit}>submit</button>
            </form>
        </div>
    </div>
  )
}

export default PredictionTableContent