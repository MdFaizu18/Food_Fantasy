import { Box, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { FooterWrapperIConBox, FooterWrapperMainBox } from '../assets/wrapper/FooterWrapper';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return (
        <>
            <FooterWrapperMainBox>
                <Box>
                    {/* Replaced <Box> with <div> here */}
                    <FooterWrapperIConBox>
                        <Tooltip title="Whatsapp" arrow>
                        <WhatsAppIcon />
                        </Tooltip>
                        <Tooltip title="Instagram" placement="top" arrow>
                        <InstagramIcon />
                        </Tooltip>
                        <Tooltip title="Facebook" arrow>
                        <FacebookIcon />
                        </Tooltip>
                        <Tooltip title="Twitter" placement="top" arrow>
                        <XIcon />
                        </Tooltip> 
                    </FooterWrapperIConBox>
                </Box>
                {/* Copyrights at the end */}
                <Box mt={3}>
                   
                        <Box sx={{ display: 'flex', gap: '3px', justifyContent: 'center' }}>
                            <Typography> © {new Date().getFullYear()}</Typography>
                            <Typography style={{ color: 'red' }}> Food </Typography>
                            <Typography> Fantasy. All rights reserved. </Typography>
                        </Box>
                 
                </Box>
            </FooterWrapperMainBox>
        </>
    );
};

export default Footer;
