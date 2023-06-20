import React, { useEffect } from 'react'
import './Predictions.css'
import { useState } from 'react'
import PredictionTable from './PredictionTable'
import PredictionTableContent from './PredictionTableContent'

const retrieveTableRows = () => {
  const tableRowsData = localStorage.getItem('tableRows');
  if(tableRowsData){
    return JSON.parse(tableRowsData)
  }else{
    return []
  }
}

const Predictions = () => {
  const [tableRows, setTableRows] = useState(retrieveTableRows());

  const  [ showAddTable, setShowAddTable ] = useState(false)



  useEffect(()=>{
    localStorage.setItem('tableRows', JSON.stringify(tableRows))
  },[tableRows])


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