import React from 'react'
import { Button } from 'antd'
import { Paper } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../Firebase-config'
import Cookies from 'universal-cookie'


const cookie = new Cookies();

const SignUp = ({setIsAuth}) => {

  const SignInWithGoogle = async () => {
    try{

      const result = await signInWithPopup(auth, provider)
      cookie.set('auth-token', result.user.refreshToken)
      setIsAuth(true)
      console.log(result)
    }catch(err){
      console.error(err)
    }
  }

  return (
    <div>
      <div className='w-full h-[100%] bg-white flex items-center justify-center'>
      <Paper elevation={2}>
        <div className=''>
            <Button onClick={SignInWithGoogle}>Sign in with Google</Button>
        </div>
        </Paper>
    </div>
    </div>
  )
}

export default SignUp
