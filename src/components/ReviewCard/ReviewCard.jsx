
import { Box, Typography } from '@mui/material'
import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import camel from '../../assests/images/camel.webp'

const ReviewCard = () => {
  return (
    <Container className='py-sm-2 py-md-4'>
       <Row>
            <Col sm={12} md={10} lg={9} >
               <Box sx={{minHeight : {
                xs : "540px",
                md : "200px"
               }, display : "flex", flexDirection : {
                xs : "column",
                md : 'row'
               }, columnGap : {
                xs : "0px",
                md : "20px"
               }, rowGap : {
                xs : "0px",
                md : "20px"
               }, paddingRight : {
                xs : "0",
                md : "20px"
               }}}>
                    <Box sx={{maxWidth : {
                        sm : "100%",
                        md : "34%"
                    }, padding : {
                        xs: "20px",
                        md : "10px"
                    }}}>
                        <img src={camel} alt="" height="100%" width="100%" />
                    </Box>
                    <Box sx={{maxWidth : {
                        sm : "100%",
                        md : "65%"
                    }, padding : {
                        xs: "20px",
                        md : "10px"
                    }}}>
                        <Typography variant='h2' fontWeight={"normal"} fontFamily={"'Oswald', sans-serif"} sx={{marginBottom : '10px'}}>02 <Typography variant='body2' component={"span"} fontWeight={"normal"} fontFamily={"'Oswald', sans-serif"}  sx={{color : "rgba(0,0,0,0.55)", marginBottom : "4px"}}>June</Typography></Typography>
                        <Typography variant='h5' fontWeight={"normal"} fontFamily={"'Oswald', sans-serif"} sx={{marginBottom : "8px"}}>Best Tips to Travel light</Typography>
                        <Typography variant='body2' fontWeight={"normal"} fontFamily={"'Oswald', sans-serif"} sx={{color : 'rgba(0,0,0,0.55)'}}>Rajasthan</Typography>
                        <Typography variant='body2' component={"p"} fontSize={"14px"} fontWeight={400}  fontFamily={"'Open Sans', sans-serif"} sx={{color : '#72728c', lineHeight : '1.9', marginTop : "14px"}} >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis consequatur repellendus a ipsam! aut aliquid.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis consequatur repellendus a ipsam! aut aliquid.
                        </Typography>
                    </Box>
               </Box>
            </Col>
            <Col sm={12} md={2} lg={3} className="d-none d-lg-block">
                 
            </Col>
       </Row>
    </Container>
  )
}

export default ReviewCard