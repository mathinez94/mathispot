import React, { useState } from 'react'
import PredictionTableContent from '../components/PredictionTableContent'
import PredictionTableRows from '../components/PredictionTableRows'
// import { Typography } from '@mui/material'


export const Prediction = () => {
  const [showForm, setShowForm] = useState(false)
  
  const [tableRows, setTableRows] = useState([]);

  const handleNewRow = ( newRow) => {
    setTableRows([...tableRows, newRow])
  }

  return (
    <div className='bg-white w-full relative'>
      <div>
        <PredictionTableContent 
        tableRows={tableRows}
        setShowForm={setShowForm}
        />
      </div>
      
        
        {
          showForm && 
          <div className='absolute inset-x-0 inset-y-0 flex items-center justify-center bg-white bg-opacity-95 '>
            <PredictionTableRows 
            setShowForm={setShowForm}
            addRow={handleNewRow}
            />
          </div>
        }
      
    </div>
  )
}
