import React from 'react'
import './Predictions.css'
import { useState } from 'react'
import PredictionTable from './PredictionTable'
import PredictionTableContent from './PredictionTableContent'

const Predictions = () => {
  const [tableRows, setTableRows] = useState([
    {
      username: 'Mathinez', country: 'england', teams: 'arsenal vs man city', prediction: 'home and ov2'
    }
  ]);

  const  [ showAddTable, setShowAddTable ] = useState(false)

  const handleNewRow = ( newRow) => {
    setTableRows([...tableRows, newRow])
  }
 
  return (
    <div className='prediction'>
      <PredictionTable 
      tableRows={tableRows}
      setShowAddTable={setShowAddTable}
      />
      { showAddTable && <PredictionTableContent 
       setShowAddTable={setShowAddTable}
       submitRow={handleNewRow}
      />}
    </div>
  )
}

export default Predictions