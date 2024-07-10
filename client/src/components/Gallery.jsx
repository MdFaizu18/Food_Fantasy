import React from 'react';
import { WrapperMainBox,WrapperHeaderBox } from '../assets/wrapper/GalleryWrapper'
import { Box, Typography } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
import DesertCarousel from './DesertCarousel';
import FastFoodCarousel from './FastFoodCarousel';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const Gallery = () => {

  return (
   <WrapperMainBox>

   <WrapperHeaderBox>
        <Typography color='green' variant='h3' gutterBottom sx={{ fontFamily: "'Pinyon Script', cursive", color: 'green',fontWeight: "600" }}>" Gallery " </Typography>

     <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
       <Box>
        Explore Our Fantasy
       </Box>
    </Typography>
   
        <Box sx={{padding:'0px 5%'}}>
        <Box sx={{display:'flex' ,alignItems:'center',cursor:'pointer'}}>
            <Typography color='red' variant='h5' textAlign='left' marginLeft='60px'>Deserts</Typography>
            <KeyboardDoubleArrowRightIcon/>
        </Box>
             <DesertCarousel />
        </Box>
    
        <Box sx={{ padding: '0px 5%' }}>

        <Box sx={{display:'flex' ,alignItems:'center',cursor:'pointer'}}>
            <Typography color='red' variant='h5' textAlign='left' marginLeft='60px'>Fast Foods</Typography>
            <KeyboardDoubleArrowRightIcon/>
        </Box>
                  <FastFoodCarousel/>
        </Box>
       
    
   </WrapperHeaderBox>

          

         


    </WrapperMainBox>
  )
}

export default Gallery