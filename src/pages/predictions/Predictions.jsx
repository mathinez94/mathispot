import React from 'react'
import './Predictions.css'
import { useState } from 'react'
import PredictionTable from './PredictionTable'
import PredictionTableContent from './PredictionTableContent'

const Predictions = () => {
  const [tableRows, setTableRows] = useState([
    {  username: 'Mathinez', country: 'euro', teams: 'andorra vs switzerland', prediction: 'ht away'},
    {  username: 'Mathinez', country: 'euro', teams: 'denmark vs northern ireland', prediction: 'home'},
    {  username: 'Mathinez', country: 'euro', teams: 'gilbrata vs france', prediction: 'ht away'},
    {  username: 'Mathinez', country: 'euro', teams: 'latvia vs turkey', prediction: 'ov 1.5'},
    {  username: 'Mathinez', country: 'euro', teams: 'north macedonia vs ukrain', prediction: '0v 1.5'},
    {  username: 'Mathinez', country: 'euro', teams: 'wales vs armenia', prediction: 'home'},
    {  username: 'Mathinez', country: 'euro', teams: 'wales vs armenia', prediction: 'ht away'},
    {  username: 'Mathinez', country: 'friendlies', teams: 'serbia vs jordan', prediction: 'home'},
    {  username: 'Mathinez', country: 'friendlies', teams: 'colombia vs iraq', prediction: 'home'}
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