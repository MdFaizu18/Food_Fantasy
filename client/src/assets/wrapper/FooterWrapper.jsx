import { Box, styled } from "@mui/material";

export const FooterWrapperMainBox = styled(Box)({
    height:'150px',
    background:'#f5f5f5',
    '@media (max-width: 600px)': {
        height: '100px',
    },
})

export const FooterWrapperIConBox = styled(Box)({
    display:'flex',
    gap:'2%',
    justifyContent:'center',
    paddingTop:'2.5%',
    cursor:'pointer'
})