import React from 'react'
import './Predictions.css'
import { useState } from 'react'
import PredictionTable from './PredictionTable'
import PredictionTableContent from './PredictionTableContent'

const Predictions = () => {
  const [tableRows, setTableRows] = useState([
    {  username: 'Mathinez', country: 'nations league', teams: 'netherland vs italy', prediction: 'draw/away'},
    {  username: 'Mathinez', country: 'nations league', teams: 'croatia vs spain', prediction: 'ov1.5'},
    {  username: 'Mathinez', country: 'afcon', teams: 'congo vs mali', prediction: 'draw/away'},
    {  username: 'Mathinez', country: 'afcon', teams: 'uganda vs algeria', prediction: 'ov 1.5'},
    {  username: 'Mathinez', country: 'afcon', teams: 'Sierra Leone vs nigeria', prediction: '0v 1.5'},
    {  username: 'Mathinez', country: 'concacaf', teams: 'panama vs mexico', prediction: 'ov1.5'},
    {  username: 'Mathinez', country: 'friendlies', teams: 'venezuela vs guatemala', prediction: 'draw/home'},
    {  username: 'Mathinez', country: 'friendlies', teams: 'singapore vs solomon island', prediction: 'draw/home'},
    {  username: 'Mathinez', country: 'friendlies', teams: 'egypt vs south sudan', prediction: 'home'}
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