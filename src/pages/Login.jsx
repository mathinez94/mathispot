import React from 'react'
import { Button, Divider, Form, Input, Typography } from 'antd'
import { Paper } from '@mui/material'
// import {  useNavigate } from "react-router-dom"
import {Link } from 'react-router-dom'

const Login = () => {

  const OnFinish = (e) => {
    console.log(e)
  }
  
  return (
    <div className='w-full h-[100%] bg-white flex items-center justify-center'>
      <Paper elevation={2}>
        <div className='min-w-80 h-80 flex flex-col justify-between'>
             <Typography className='text-center font-semibold font-serif text-2xl px-2 py-2 '>Welcome back!!..</Typography>
             <div className='flex-1 '>
              <Form onFinish={OnFinish} className='flex items-center justify-center flex-col mt-1 w-full h-fit'>
                <div className=''>
                  <Form.Item 
                  rules={[
                    {
                      required: true,
                      type: 'email',
                      message: 'kindly enter a valid email'
                    }
                  ]}
                  label='Email' 
                  name={'email'}>
                    <Input placeholder='enter your email'/>
                  </Form.Item>
                  <Form.Item
                   rules={[
                    {
                      required: true,
                      message: 'kindly enter a valid password'
                    }
                  ]} 
                  label='Password' name={'password'}>
                    <Input.Password placeholder='enter your password'/>
                  </Form.Item>
                </div>
                <Button type='primary' htmlType='submit' block ><Typography className='font-semibold text-white'>Login</Typography></Button>
              </Form>
              <Divider className=''>Don't have an account? </Divider>
              <Button type='text' block className='flex'><Link to='/sign up' className='flex gap-1'><Typography>Click here to</Typography><Typography className='font-extrabold'>Sign Up</Typography></Link></Button>
            </div>
        </div>
        </Paper>
    </div>
  )
}

export default Login