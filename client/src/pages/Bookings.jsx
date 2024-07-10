import React from 'react'
import Navbar from '../components/Navbar'
import {  BgImageWrapper, BgInnerBox, BookingImgBox, BookingWrapperContent, BookingWrapperMainBox, BoxStyledForm} from '../assets/wrapper/BookingWrapper';
import { Box, Button, TextField, Typography } from '@mui/material';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import img5 from '../assets/images/Booking/invitation.jpg'
import customFetch from '../utils/customFetch';
import { Form, redirect} from 'react-router-dom';
import { toast } from 'react-toastify';

export const action = async ({request})=>{
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try{
        await customFetch.post('reserve/reserve-details',data);
        toast.success("Booked Successfully");
        return redirect('/')
    }catch(error){
        toast.error(error?.response?.data?.msg);
        return error
    }
}

const Bookings = () => {
    return (
        <>
            <Navbar />
            <BgImageWrapper>
            <BgInnerBox>
            <Box sx={{display:'flex', gap:'10px'}}>
                        <Typography variant='h4'>Reservation</Typography>
                    <Box style={{ fontSize: '2.3rem' }}>
                        <EmojiFoodBeverageIcon />
                    </Box>
            </Box>
                    <Typography variant='body2' textAlign='center' color='whitesmoke'>
                    Book Your Table Here </Typography>
            </BgInnerBox>
            </BgImageWrapper>


            <BookingWrapperMainBox >
               <Box flex='60%' >
                    <Typography variant='h3' textAlign='center' sx={{ fontFamily: "'Pinyon Script', cursive", color:'green' }}>Make a Reservation</Typography>
                    <Typography variant='h3' textAlign='center' sx={{fontWeight:'600',marginBottom:'5%'}}>Private Dining & Events</Typography>

                    <Typography variant='body1' textAlign="center" sx={{marginBottom:'3%'}} >Welcome to our restaurant! Planning to dine with us? Secure your spot now by reserving a table with just a click! Our Reservation Button offers a seamless experience for guests eager to enjoy our culinary delights. With a simple design and vibrant color scheme, it beckons users to take action and ensures they don't miss out on the chance to savor our exquisite dishes and visit us for further experiences </Typography>
                    <Typography variant='h5' textAlign="center"  sx={{ fontWeight: '600',color:'green' }} gutterBottom>Reserved By Phone</Typography>
                    <Typography variant='h6' textAlign="center" sx={{ marginBottom: '5%' }}>+91 9876543210</Typography>
               </Box>
               <BookingImgBox flex='30% '>
                <img src={img5} alt="invitaiton"  height='430px' width='350px'/>
               </BookingImgBox>
                    
            </BookingWrapperMainBox>


            <BookingWrapperContent>
                <Typography variant='h3' textAlign='center' sx={{ fontFamily: "'Pinyon Script', cursive", color: 'green' }}>Online Reservation</Typography>
                <Typography variant='h3' textAlign='center' sx={{ fontWeight: '600', marginBottom: '5%' }}>No Need To Wait For Table</Typography>
                <Form method="POST" >
              <BoxStyledForm > 
                      <Box>
                        <label>
                            Name:
                        </label> <br />
                            <input type="text" name="reserveName" placeholder='enter your name' 
                                style={{ padding: '10px 20px', width: '350px', height: '50px', fontSize: '1rem', border: 'none', outline: 'none',borderBottom:'1px solid black' }} />
                     </Box>
                      <Box>
                        <label>
                            Date:
                        </label> <br />
                            <input type="date" name="reserveDate"
                                style={{ padding: '10px 20px', width: '350px', height: '50px', border: 'none', outline: 'none', borderBottom: '1px solid black' }} />
                      </Box>
                       <Box>
                        <label>
                            Timing:
                        </label><br />
                            <input type="time" name="reserveTime" 
                                style={{ padding: '10px 20px', width: '350px', border: 'none', outline: 'none', borderBottom: '1px solid black' }} />
                       </Box>
                    <Box>
                        <label>
                            Number of People:
                        </label><br />
                            <select name="reserveMember" 
                                style={{ padding: '10px 20px', width: '350px', height: '50px', border: 'none', outline: 'none', borderBottom: '1px solid black' }} >
                                {[...Array(10)].map((_, index) => (
                                    <option key={index + 1} value={(index + 1).toString()}>{index + 1}</option>
                                ))}
                            </select>
                    </Box>
                       <Box>
                        <label>
                            Note:
                        </label><br />
                            <input name="reserveNote" placeholder='for eg: birthday,anniversary'
                                style={{ padding: '10px 20px', width: '350px', fontSize: '1rem', height: '50px', border: 'none', outline: 'none', borderBottom: '1px solid black' }} />
                       </Box><br />
                    <Box>
                            <Button type='submit' variant="outlined" color='success'>Book a Table</Button>
                    </Box>
              </BoxStyledForm>
                    </Form>
          
            </BookingWrapperContent>
        </>
    )
}

export default Bookings