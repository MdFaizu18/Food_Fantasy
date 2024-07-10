import { Box, styled } from "@mui/material";
import img from '../images/home-slide-2.jpg';


export const WrapperMainBox = styled(Box)({
    height: '950px',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',  
    position: 'relative',  
    paddingTop:'3%'

})
export const WrapperMainBox2 = styled(Box)({
    height:'auto',
    background:'#f5f5f5'
})
export const WrapperHeaderBox = styled(Box)({
    textAlign: 'center',
    // paddingTop: '3%',
})