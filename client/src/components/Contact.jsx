import React, { useRef } from 'react'
import { WrapperMainBox,WrapperHeaderBox, WrapperContactBox, WrapperRightBox, WrapperLeftBox, WrapperTextField, WrapperButton } from '../assets/wrapper/ContactWrapper'
import { Typography,Box } from '@mui/material';
import img from '../assets/images/contactimg.jpg';
import PhoneIcon from '@mui/icons-material/Phone';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Contact = () => {
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
    <WrapperMainBox>
          <WrapperHeaderBox>
              <Typography color='green' variant='h3' gutterBottom sx={{ fontFamily: "'Pinyon Script', cursive", color: 'GREEN', fontWeight: '600' }}>" Contact Us "</Typography>
              <Typography variant='h4' sx={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  <Box color="black">
                      To Visit and Order
                  </Box>
              </Typography>
          </WrapperHeaderBox>

          <WrapperContactBox>
            <Box>
                <WrapperLeftBox>
                <Box>
                 <img src={img} alt="" height={320} width={420} />
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',gap:'10px'}}>

                <Box sx={{display:'flex',gap:'10px'}} >
                <LocationOnIcon />
                         <Typography>F-Complex, Opp AVR Mahal, Salem-1</Typography>
                </Box>
                <Box sx={{display:'flex',gap:'10px'}} >
                         <PhoneIcon/>
                         <Typography>+91-987654321 </Typography>
                </Box>
                 <Box sx={{ display: 'flex',gap:'10px' }} >
                          <MarkEmailReadIcon /> 
                          <Typography>foodfantasy@gmail.com </Typography>  
                </Box>
                </Box>
                </WrapperLeftBox>
            </Box>
              <form ref={form} onSubmit={sendEmail}>
            <WrapperRightBox>
            <Box>
            <WrapperTextField name='user_name'  label='name' variant="outlined" />
            </Box>
            <Box>
            <WrapperTextField name='user_email'  label='email' variant="outlined"  />
            </Box>
            <Box>
            <WrapperTextField name='message'  label='message' variant="outlined" multiline
             rows={4}/>
            </Box>
            <Box>
                    <WrapperButton sx={{ backgroundColor: 'green'  }} type='submit' variant="contained">Submit</WrapperButton>
                </Box>
            </WrapperRightBox> 
              </form>
         
              {/* <form ref={form} onSubmit={sendEmail}>
                  <label>Name</label>
                  <input type="text" name="user_name" />
                  <label>Email</label>
                  <input type="email" name="user_email" />
                  <label>Message</label>
                  <textarea name="message" />
                  <input type="submit" value="Send" />
                </form> */}
            
          </WrapperContactBox>
         </WrapperMainBox>
  )
}

export default Contact