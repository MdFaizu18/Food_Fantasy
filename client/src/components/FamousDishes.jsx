import React from 'react';
import { Box, Typography } from '@mui/material';
import {  WrapperContentBox, WrapperHeaderBox, WrapperMainBox } from '../assets/wrapper/FamousDishesWrapper';

import CardDishes from './CardDishes';
import ResponsiveFamousDishes from './ResponsiveFamousDishes';



const FamousDishes = () => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const dayName = daysOfWeek[date.getDay()];


  return (
    <div>
    <WrapperMainBox>
    {/* heading  */}
    <WrapperHeaderBox>
          <Typography color='green' variant='h3' gutterBottom sx={{ fontFamily: "'Pinyon Script', cursive", color: 'GREEN',fontWeight:'600' }}>" {dayName} "</Typography>
      
       <Typography variant='h4' sx={{display:'flex',justifyContent:'center' ,gap:'8px'}}>
       <Box>
       Special Dishes
       </Box>
      
     
    </Typography>
    </WrapperHeaderBox>
    {/* card box  */}
    <WrapperContentBox >
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <CardDishes />
          </Box>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <ResponsiveFamousDishes/>
          </Box>
  
    </WrapperContentBox>

    </WrapperMainBox>
    </div>
  )
}

export default FamousDishes;