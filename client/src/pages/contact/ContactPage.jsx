import React, { useRef } from 'react'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import {WrapperButton, WrapperMainBox, WrapperHeaderBox, BgImageWrapper, BgInnerBox, BranchesInnerBox, BranchesWrapperBox, ContactBox, ContactSubBox, WrapperContactBox, WrapperLeftBox, WrapperRightBox, WrapperTextField, ImageBoxContact } from '../../assets/wrapper/ContactWrapper'
import { Avatar, Box, Stack, Typography } from '@mui/material';
import ContactsIcon from '@mui/icons-material/Contacts';
import img01 from '../../assets/images/contact/client1.png'
import img02 from '../../assets/images/contact/client2.png'
import img03 from '../../assets/images/contact/client3.png'
import { CategoryHeadingBox } from '../../assets/wrapper/CategoryWrapper';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import map from '../../assets/images/contact/map.png';
import mail from '../../assets/images/contact/mail.png';
import phone from '../../assets/images/contact/phone.png';
import clock from '../../assets/images/contact/clock.png';
import img from '../../assets/images/contactimg.jpg';






const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_msy9d84',
        'template_hzh853d',
        form.current, {
        publicKey: 'C7wuWUfbKA4Egj6vi',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Successfully Send');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
         <Navbar/>
          <BgImageWrapper>
              <BgInnerBox>
                  <Box sx={{ display: 'flex', gap: '10px' }}>
                      <Typography variant='h4'>Contact Us</Typography>
                      <Box style={{ fontSize: '2.3rem' }}>
                          <ContactsIcon />
                      </Box>
                  </Box>
                  <Typography variant='body2' textAlign='center' color='whitesmoke'>
                      Explore Fantasy </Typography>
              </BgInnerBox>
          </BgImageWrapper>
          <CategoryHeadingBox >
              <Typography variant='h3' textAlign='center' sx={{ fontFamily: "'Pinyon Script', cursive", color: 'green' }} gutterBottom>Our Various Branches</Typography>
              <Typography variant='h4' textAlign='center' sx={{ fontWeight: '600' }} gutterBottom>All Over Global Branches</Typography>
          </CategoryHeadingBox>
          <BranchesWrapperBox>
            <Box>
                  <img src={img01} alt="" height={220} width={350} />
              <BranchesInnerBox>
              <Stack direction={'row'}>
                      <FmdGoodIcon sx={{ color: 'green',margin:'3px ' }} /> 
                      <Typography variant='h5' sx={{fontWeight:'600'}}>Office in New York</Typography>
              </Stack>
             
                      <Typography variant='h6' sx={{ fontWeight: '600' }}>  Location</Typography>
                      <Typography variant='body1'> 27, Division Street, New York , NY 1002, USA</Typography>
                      <Typography variant='h6' sx={{ fontWeight: '600' }}>  Phone</Typography>
                      <Typography> +12 123456789</Typography>
                      <Typography variant='h6' sx={{ fontWeight: '600' }}>  Email</Typography>
                      <Typography> foodfantasy1@gmail.com</Typography>
           
              </BranchesInnerBox>
            </Box>
            <Box>
              <img src={img02} alt="" height={220} width={350} />
                      <BranchesInnerBox>
                          <Stack direction={'row'}>
                              <FmdGoodIcon sx={{ color: 'green', margin: '3px ' }} />
                              <Typography variant='h5' sx={{ fontWeight: '600' }}>Office in New York</Typography>
                          </Stack>

                          <Typography variant='h6' sx={{ fontWeight: '600' }}>  Location</Typography>
                          <Typography variant='body1'> 27, Division Street, New York , NY 1002, USA</Typography>
                          <Typography variant='h6' sx={{ fontWeight: '600' }}>  Phone</Typography>
                          <Typography> +12 123456789</Typography>
                          <Typography variant='h6' sx={{ fontWeight: '600' }}>  Email</Typography>
                          <Typography> foodfantasy1@gmail.com</Typography>

                      </BranchesInnerBox>
                
            </Box>
            <Box>
                  <img src={img03} alt="" height={220} width={350} />
                  <BranchesInnerBox>
                      <Stack direction={'row'}>
                          <FmdGoodIcon sx={{ color: 'green', margin: '3px ' }} />
                          <Typography variant='h5' sx={{ fontWeight: '600' }}>Office in New York</Typography>
                      </Stack>

                      <Typography variant='h6' sx={{ fontWeight: '600' }}>  Location</Typography>
                      <Typography variant='body1'> 27, Division Street, New York , NY 1002, USA</Typography>
                      <Typography variant='h6' sx={{ fontWeight: '600' }}>  Phone</Typography>
                      <Typography> +12 123456789</Typography>
                      <Typography variant='h6' sx={{ fontWeight: '600' }}>  Email</Typography>
                      <Typography> foodfantasy1@gmail.com</Typography>

                  </BranchesInnerBox>
            </Box>
     </BranchesWrapperBox>
      <Typography variant='h3' textAlign='center' sx={{ fontFamily: "'Pinyon Script', cursive", color: 'green' ,marginTop:'5%'}} gutterBottom>To Reach Us Soon</Typography>
      <Typography variant='h4' textAlign='center' sx={{ fontWeight: '600' }} gutterBottom>To More Order Contact Over Here</Typography>
            <ContactBox>

                <ContactSubBox > 
                <img src={map} alt="" height={100} width={100} style={{marginBottom:'2%'}} />
                <Typography variant='h5' sx={{fontWeight:'600'}} gutterBottom>Our Address</Typography>
                <Typography variant='body1' >Street: Park John Street</Typography>
                <Typography variant='body1' >Mexico, USA</Typography>
                </ContactSubBox>

                <ContactSubBox >
                <img src={mail} alt="" height={80} width={80} style={{ marginBottom: '2%',marginTop:'5%' }} />
                 <Typography variant='h5' sx={{ fontWeight: '600' }} gutterBottom>Email Address</Typography>
                <Typography variant='body1' >FoodFantasy01@gmail.com</Typography>
                <Typography variant='body1' >restartaunt@com</Typography>
                </ContactSubBox>

                <ContactSubBox >
               <img src={phone} alt="" height={100} width={100} style={{ marginBottom: '2%' }} />
                  <Typography variant='h5' sx={{ fontWeight: '600' }} gutterBottom>Phone Number</Typography>
                <Typography variant='body1' >+12 123456789</Typography>
                <Typography variant='body1' >+12 123456789</Typography>
                </ContactSubBox>

                <ContactSubBox >
               <img src={clock} alt="" height={100} width={100} style={{ marginBottom: '2%' }} />
               <Typography variant='h5' sx={{ fontWeight: '600' }} gutterBottom>Opening Time</Typography>
               <Typography variant='body1' >Mon-Friday 09AM-09PM</Typography>
               <Typography variant='body1' >Sunday Closed</Typography>
                </ContactSubBox>
               
            </ContactBox>
            


            {/* contact page for sending email  */}
      <Box sx={{marginTop:'3%'}}>
        <WrapperMainBox>
          <WrapperHeaderBox>
            <Typography color='green' variant='h3' gutterBottom sx={{ fontFamily: "'Pinyon Script', cursive", color: 'GREEN',}}>" Contact Us "</Typography>
            <Typography variant='h4' textAlign='center' sx={{ fontWeight: '600' }} gutterBottom>Message Here To Connect Us</Typography>
          </WrapperHeaderBox>

          <WrapperContactBox >
            <Box>
              <WrapperLeftBox>
                <Box sx={{marginLeft:'5%'}}>
                  <ImageBoxContact src={img} alt=""  />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                 
                </Box>
              </WrapperLeftBox>
            </Box>
            <form ref={form} onSubmit={sendEmail}>
              <WrapperRightBox>
                <Box>
                  <WrapperTextField name='user_name' label='name' variant="outlined" />
                </Box>
                <Box>
                  <WrapperTextField name='user_email' label='email' variant="outlined" />
                </Box>
                <Box>
                  <WrapperTextField name='message' label='message' variant="outlined" multiline
                    rows={4} />
                </Box>
                <Box>
                  <WrapperButton sx={{ backgroundColor: 'green' }} type='submit' variant="contained">Submit</WrapperButton>
                </Box>
              </WrapperRightBox>
            </form>

          </WrapperContactBox>
        </WrapperMainBox>
       
      </Box>
     
    </>
  )
}

export default ContactPage;