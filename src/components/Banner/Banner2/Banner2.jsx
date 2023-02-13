import { Box, Typography } from '@mui/material'
import React from 'react'
import plane from '../../../assests/images/plane.webp'

const Banner2 = () => {
  return (
    <Box sx={{minHeight : "500px", backgroundImage : `linear-gradient(to right, rgba(0,0,0, 0.2) 10%, rgba(0,0,0,0.1) ), url(${plane})`, backgroundPosition : "center", backgroundSize : "cover", display : "flex", alignItems : 'center', justifyContent : "center" }}>
        <Typography variant='h1' color={"white"} fontFamily="'Oswald', sans-serif" fontWeight={"bold"} letterSpacing={2} fontSize={130}> All Reviews</Typography>
    </Box>
  )
}

export default Banner2