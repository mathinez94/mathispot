import React from 'react'
import { Button, Carousel, Divider, Table, Typography } from 'antd'
import { useTheme, useMediaQuery, Paper } from '@mui/material'

const PredictionTableContent = ({tableRows,setShowForm}) => {
    const {Title, Text, Paragraph} = Typography

    
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
  const isMediaMatch = useMediaQuery(theme.breakpoints.down('sm'))

const style1 = 'w-full h-48 flex items-center justify-center px-3' 
const style2 =  isMediaMatch ? 'font-serif text-sm' : 'font-serif text-lg'

  return (
    <div className='relative'>
        <div className='flex-col h-[100%] w-full items-center justify-center'>

            <div className={isMediaMatch ?'' : 'bg-white h-[70vh] w-full'}>
                <Carousel
                autoplay
                dots
                draggable
                pauseOnHover
                >
                    <div className='bg-white h-[70vh] w-full'>
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
                    </div>
                    <div className='bg-white h-[100vh] w-full flex items-center justify-center'>
                        <Title className='w-full h-[50vh] flex items-center justify-center'>
                        <Text  className='font-serif text-5xl'>Cheers to Winning!!!</Text>
                        </Title>
                    </div>
                </Carousel>                 
            </div>
            <div className="px-5">
                <Button type='primary' onClick={()=>setShowForm(true)} block>Add Prediction</Button>
                
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