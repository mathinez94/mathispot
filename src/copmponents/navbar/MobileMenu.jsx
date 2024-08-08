import React from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const MobileMenu = () => {

    const navigate = useNavigate();
  return (
    <div className='MobileView'>
        <Menu 
        onClick={({key})=>{
            if(key === 'signout'){
             // do your signout function here
            }else{
             navigate(key)
            }
         }}
        items={[
            {label: 'Home', key: '/'},
            {label: 'Stories', key: '/stories'},
            {label: 'Prediction', key: '/predictions'},
            {label: 'Livescore', key: '/livescore'},
        ]}
        />
    </div>
  )
}

export default MobileMenu