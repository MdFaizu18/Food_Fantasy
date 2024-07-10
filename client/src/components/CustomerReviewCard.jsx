import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { Box, CardHeader, IconButton } from '@mui/material';
import { WrapperHeaderBox, CutomerReviewResponsiveBox, WrapperCard } from '../assets/wrapper/CustomerReviewWrapper';
import { customerData } from '../constants/CustomerReview';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const CustomerReviewCard = ({ }) => {

   return (
    <Box sx={{marginTop:'-5%'}}>
     <WrapperHeaderBox>
               <Typography color='green' variant='h3' gutterBottom sx={{ fontFamily: "'Pinyon Script', cursive",  fontWeight: '600' }}>" Blogs " </Typography>
     <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
        <Box color="black">
       Our Happy Customer's
        </Box>
    </Typography>
    </WrapperHeaderBox>


           <CutomerReviewResponsiveBox>
       {customerData.map((data)=>(
           <WrapperCard key={data.id} sx={
               { 
              }
           }>
               <CardHeader
                   avatar={
                       <Avatar
                           alt={`${data.name}'s Avatar`}
                           sx={{
                               width: 64,
                               height: 64,
                               '& > img': {
                                   width: '100%',
                                   height: '100%',
                                   objectFit: 'cover', // Adjust as needed (cover, contain, etc.)
                               },
                           }}
                       >

                           {data.avatarUrl && <img src={data.avatarUrl} alt={`${data.name}'s Avatar`} />}
                       </Avatar>
                   }
                   action={
                       <IconButton  aria-label="settings">
                           <MoreVertIcon sx={{color:'white',background:'grey',borderRadius:'50px',padding:'5px'}}/>
                       </IconButton>
                   }
                
               />
               <CardContent sx={{color:'black',marginTop:'-5%'}}>
                    {/* <Avatar
                       alt={`${data.name}'s Avatar`}
                       sx={{
                           width: 64,
                           height: 64,
                           '& > img': {
                               width: '100%',
                               height: '100%',
                               objectFit: 'cover', // Adjust as needed (cover, contain, etc.)
                           },
                       }}
                    > 
                    
                       {data.avatarUrl && <img src={data.avatarUrl} alt={`${data.name}'s Avatar`} />}
                   </Avatar> */}
                   <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                       {data.name}
                   </Typography>
                   <Typography color="gray"  gutterBottom>
                       {data.date}
                   </Typography>
                   <Typography variant="body2" component="div" sx={{ mt: 1 }} gutterBottom>
                       {data.feedback}
                   </Typography>
                   <Box sx={{display:'flex'}}>
                       <Typography>  Rating:  </Typography> 
                   <Rating name="read-only" value={data.rating} readOnly />
                   </Box>
               </CardContent>
           </WrapperCard>
       ))}
       </CutomerReviewResponsiveBox>
    </Box>
    );
};

export default CustomerReviewCard;
