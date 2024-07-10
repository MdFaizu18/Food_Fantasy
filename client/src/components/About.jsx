import React from 'react';
import aboutImg from '../assets/images/home/burger.png'
import saleImg from '../assets/images/home/sale.png'
import Layer2 from '../assets/images/home/layer3.jpg'
import blur1 from '../assets/images/home/blur1.png'
import blur2 from '../assets/images/home/blur22.png'
import aboutIcon1 from '../assets/images/about-icon-1.png'
import aboutIcon2 from '../assets/images/about-icon-2.png'
import aboutIcon3 from '../assets/images/about-icon-3.png'
import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material';
import { WrapperBox1, MainBox, WrapperBox2, WrapperCard, WrapperBox3, WrapperButtonBox, SaleImageWrapper, GridOfferBox, Blur1ImageWrapper, Blur2ImageWrapper } from '../assets/wrapper/AboutWrapper';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const About = () => {
  return (
<>

    <MainBox >
     {/* left side content  */}
      <Box>
        <WrapperBox1>
          <Box>
            <img src={aboutImg} alt="" />
            <SaleImageWrapper>
              <img src={saleImg} alt="" />
            </SaleImageWrapper>
            <Blur1ImageWrapper>
              <img src={blur1} alt="" />
            </Blur1ImageWrapper>
            <Blur2ImageWrapper>
              <img src={blur2} alt="" />
            </Blur2ImageWrapper>
          </Box>

        </WrapperBox1>
      </Box>
     {/* right side content  */}
     <Box > 
        {/* heading  */}
        <WrapperBox2>
          {/* <Typography variant='h4' >Welcome To Our Restaurant</Typography> */}
          <Typography variant='h4' textAlign='center' sx={{ fontFamily: "'Pinyon Script', cursive", color: '#cc3333',fontWeight:'500' }}>Welcome To Our Restaurant</Typography>
          {/* <Typography variant='h4' textAlign='center' sx={{ fontWeight: '600', marginBottom: '5%',fontFamily:'popins, sans-serif',color:'#2a435d' }}>Fine & Delicious Foods</Typography> */}
          <Typography variant='h2' textAlign='center' sx={{ fontWeight: '600', marginBottom: '5%', fontFamily: 'popins, sans-serif', color: '#2a435d' }}>  Enjoy Your Favourite 
           <Typography variant='h2' textAlign='center' sx={{ fontWeight: '600', fontFamily: 'popins, sans-serif', color: '#cc3333' }}>Chicken Burger 
          </Typography>  </Typography>
       
      
        </WrapperBox2>
        {/* sub heading text  */}
          <a href="/menu" style={{textDecoration:'none'}}>
        <WrapperButtonBox>
          Hurry To Order <KeyboardDoubleArrowRightIcon sx={{
            marginTop:'-2px'
          }}/>
        </WrapperButtonBox>
        </a>
        {/* cards  */}
        <WrapperBox3>
          <Box sx={{display:'flex',gap:'12px'}}>
          <WrapperCard>
            <CardContent sx={{textAlign:"center"}}>
            <img src={aboutIcon1} alt="" />
             <Typography>Quality Food</Typography>
            </CardContent>
          </WrapperCard>

          <WrapperCard>
            <CardContent sx={{ textAlign: "center" }}>
              <img src={aboutIcon2} alt="" />
              <Typography>Food & Drinks</Typography>
            </CardContent>
          </WrapperCard>
      </Box>
          <WrapperCard>
            <CardContent sx={{ textAlign: "center" }}>
              <img src={aboutIcon3} alt=""  />
              <Typography>Expert Chefs</Typography>
            </CardContent>
          </WrapperCard>
        </WrapperBox3>
     </Box>

    </MainBox>

    <GridOfferBox >
    <a href="/menu">
    <img src={Layer2} alt=""  />
    </a>
    </GridOfferBox>


    </>
  )
}

export default About