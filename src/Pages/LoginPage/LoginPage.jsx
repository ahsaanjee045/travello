import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import loginImage from '../../assests/images/login.jpg'

const LoginPage = () => {
    const [login, setLogin] = useState(true)
    console.log(login)
  return (
    <Box>
        <Box className="login__banner" sx={{
            display : "flex",
            alignItems : 'center',
            justifyContent : 'center',
            minHeight : '400px',
            backgroundImage : `linear-gradient(45deg, rgba(0,0,0,1.2) 0%, rgba(0,0,0,0.1)), url(${loginImage})`,
            backgroundPosition : "center",
            backgroundSize : "cover"
        }}>
            <Typography variant='h1' color={"white"} fontWeight={600} fontFamily="'Oswald', sans-serif" letterSpacing={3} fontSize={120}>
                Login
            </Typography>
        </Box>
        <Box sx={{maxWidth : '1270px', margin : "0 auto", padding : '40px 0'}}>
          <Typography variant='h5' fontWeight={500} fontFamily="'Oswald', sans-serif" letterSpacing={2} sx={{textAlign : "center"}}>Enter Your {login ? "Login" : "Register"} Details</Typography>
          <Box component={"form"} className="login__form" sx={{textAlign : "center", width :{
            xs : '80%',
            md : "70%",
            lg : "60%"
          }, margin : "20px auto"}}>
                <input type="text" placeholder='User name' />
                {!login && <input type="email" placeholder='User Email' />}
                <input type="text" placeholder='Password' />
                {!login && <input type="text" placeholder='Password' />}
                <button type='submit' className='login__submit'>{login ? "Login" : "Register"}</button>
                {login ? (<Typography variant='body2' marginTop={2}>
                    Don't Have an account? <span className='register' onClick={() => setLogin(false)} style={{textDecoration : "underline", cursor : "pointer"}}>Register</span>
                </Typography>) : ( <Typography variant='body2' marginTop={2}>
                    Already have an account? <span className='register' onClick={() => setLogin(true)} style={{textDecoration : "underline", cursor : "pointer"}}>Login Instead</span>
                </Typography>) }
               
          </Box>
        </Box>

    </Box>
  )
}

export default LoginPage