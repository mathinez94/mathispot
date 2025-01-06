import React,{useState} from 'react'
import { Button, Divider, Table, Typography } from 'antd'
import { useTheme, useMediaQuery, Paper } from '@mui/material'
import Cookies from 'universal-cookie'


const cookie = new Cookies();

const PredictionTableContent = ({tableRows,setShowForm}) => {
    const {Title, Text, Paragraph} = Typography

    const [isAuth, setIsAuth] = useState(cookie.get('auth-token'))

    
    console.log(tableRows)

    const column = [
      {
          title: 'Username',
          dataIndex: 'username'
      },
      {
          title: 'Country',
          dataIndex: 'country'
      },
      {
          title: 'Home',
          dataIndex: 'home'
      },
      {
          title: 'Away',
          dataIndex: 'away'
      },
      {
          title: 'Prediction',
          dataIndex: 'prediction'
      },
  ]

  const theme = useTheme();
  const isMediaMatch = useMediaQuery(theme.breakpoints.down('md'))

const style1 = 'w-full h-48 flex items-center justify-center px-3' 
const style2 =  isMediaMatch ? 'font-serif text-sm' : 'font-serif text-lg'

  return (
    <div className=''>
        <div className='flex-col h-[100%] w-full items-center justify-center'>

            <div className={isMediaMatch ?'' : 'bg-white w-full'}>
                    <div className='bg-white w-full'>
                        <div>
                            <Typography className={' flex-col items-center justify-center mt-3'}>
                                <Title className='text-center  font-serif'>welcome to fun prediction page</Title>
                                <Paragraph className='text-center  font-serif'>kindly ensure to mix the fun with a bit of sincerity</Paragraph>
                                {/* <Text style={{fontSize:'18px', color:'skyblue',textAlign:'center'}}>cause folks will be using you tips</Text> */}
                            </Typography>
                            <Divider type='horizontal' className='mt-5 mb-5'><Text className='font-serif text-xl'>Tips and Rules</Text></Divider>
                                <div className='grid gap-4 grid-cols-5 mt-10 px-5' >
                                    <div><Paper elevation={2} className={style1}><Text className={style2}>click on 'add prediction' button below</Text></Paper></div>
                                    <div><Paper elevation={2} className={style1}><Text className={style2}>fill the form and submit to add your prediction</Text></Paper></div>
                                    <div><Paper elevation={2} className={style1}><Text className={style2}>do not repeat an already predicted event and outcome</Text></Paper></div>
                                    <div><Paper elevation={2} className={style1}><Text className={style2}>do not add more than two predictions in a day</Text></Paper></div>
                                    <div><Paper elevation={2} className={style1}><Text className={style2}>Ensure correct spellings before you submit your Predictions</Text></Paper></div>
                                </div>
                        </div>
                        <div className='w-full h-32 flex items-center justify-center'>
                            <Title className='w-full flex items-center justify-center'>
                                <Text  className='font-serif text-2xl'>Cheers to Winning!!!</Text>
                            </Title>
                        </div>
                    </div>                
            </div>
            <div className="px-5 mt-3">
               {isAuth ? 
               <Button type='primary' onClick={()=>setShowForm(true)} block>Add Prediction</Button>
            :
                <Button type='default' block>Add Prediction</Button>
            }
                
                        <Table
                            columns={column}
                            dataSource={tableRows}
                        ></Table>
                    
            </div>
        </div>
    </div>
  )
}

export default PredictionTableContent