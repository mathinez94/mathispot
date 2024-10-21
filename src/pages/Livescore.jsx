import React from 'react'
// import NavBar from '../components/NavBar'
import LivescoreNav from '../livescore_pages/LivescoreNav'
import Common from '../components/Common'



export const Livescore = () => {
  
 
  return (
    <div className='bg-white w-full'>
       <div className='mb-2'>
        <Common />
       </div>
      <div>
        <LivescoreNav />
      </div>
      
    </div>
  )
}
