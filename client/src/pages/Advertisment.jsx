import {  Modal, Stack, styled } from '@mui/material'
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react';
import adImg from '../assets/images/pamblet/ad01.jpg'


const WrapperBox = styled(Stack)({
    margin:'3% 12%',
    img: {
        width: '80vw',
        height: '80vh',
    },
})
const StyledModal = styled(Modal)({
    // Remove the border and box-shadow
    '& .MuiPaper-root': {
        border: 'none',
        boxShadow: 'none',
    },
});


const Advertisment = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const hasModalBeenDisplayed = localStorage.getItem('modalDisplayed');
        const lastClosedTime = localStorage.getItem('modalLastClosedTime');

        if (!hasModalBeenDisplayed || !lastClosedTime) {
            handleOpen();
        } else {
            const tenMinutesInMillis = 10 * 60 * 1000; // 10 minutes in milliseconds
            const currentTime = new Date().getTime();
            if (currentTime - parseInt(lastClosedTime) >= tenMinutesInMillis) {
                handleOpen();
            }
        }
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        localStorage.setItem('modalDisplayed', 'true');
        localStorage.setItem('modalLastClosedTime', new Date().getTime().toString());
    };

  return (
    <>
  
    <StyledModal
      open={open}
      onClose={handleClose}
       aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
            width:'80vw',
            height:'80vh',
        }}
          >
          
           <WrapperBox>  
                  <CloseIcon
                   onClick={handleClose}
                   sx={{
                      height: '60px',
                      width: '50px',
                      position:'absolute',
                      top:'8%',
                      right:'-10%',
                      color:'white',
                      cursor:'pointer'
                  }} />
                  <a href='/category'>
                  <img src={adImg} alt="" height={600} width={1100}  />
                  </a>
           </WrapperBox>
          </StyledModal>
    </>
  )
}

export default Advertisment;