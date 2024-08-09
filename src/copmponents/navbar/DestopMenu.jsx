import { Menu } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MediumCircleFilled } from '@ant-design/icons';

const DestopMenu = ({isInline=false}) => {

    const navigate = useNavigate();
  return (
    <div className='desktopView'>
        <div className="menulogo">
               <MediumCircleFilled style={{fontSize:'40px'}}/>
               <Link to='/'  className='logoText'>Mathispot</Link>
        </div>
        <Menu 
        style={{padding: '30px', fontSize:'18px', flex: '2', alignItems:'center', justifyContent: 'center', fontWeight:'bold'}}
        mode={isInline ? 'inline' : 'horizontal'}
        onClick={({key})=>{
           if(key === 'signout'){
            // do your signout function here
           }else{
            navigate(key)
           }
        }}
        items={[
            {label: 'Stories', key: '/'},
            {label: 'Prediction', key: '/predictions'},
            {label: 'Livescore', key: '/livescore'},
        ]}
        />
    </div>
  )
}

export default DestopMenu;