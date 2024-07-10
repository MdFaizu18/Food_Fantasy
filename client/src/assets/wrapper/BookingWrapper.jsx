import { Box,TextField,styled } from "@mui/material";
import img from '../images/Booking/booking.jpg'
import img1 from '../images/Booking/booking-01.jpg'
import img3 from '../images/Booking/booking-04.jpg'
import img2 from '../images/Booking/booking-main.jpg'


export const BookingWrapperMainBox = styled(Box)({
     display:'flex',
     padding:'8% 10%',
     '@media (max-width: 600px)': {
         paddingTop: '18%',
         flexDirection:'column'
    },
})

export const BgImageWrapper = styled(Box)({
    marginTop:'4%',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${img2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '250px',
    width: '100%',
    '@media (max-width: 600px)': {
        height: '150px',
    },
})

export const BgInnerBox = styled(Box)({
   position:'absolute',
   right:'2%',
   top:'25%',
   display:'flex',
   flexDirection:'column',
   gap:'10px',
   justifyContent:'center',
   color:'white',
    '@media (max-width: 600px)': {
        right: '2%',
        top: '8%',
    },
})
export const BookingImgBox = styled(Box)({
    margin: '-2% 0 0 8%',
    '@media (max-width: 600px)': {
        margin: '0% 0 0 -2%',
    },
})

export const BookingWrapperContent = styled(Box)({
    height:'600px',
     '@media (max-width: 600px)': {
         height: '800px',
    },
})

export const BoxStyledForm = styled(Box)({
    padding:'0% 10%',
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    gridTemplateRows:'100px 100px',
    gap:'10px',
    marginBottom: '8%',
    '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr',
       
    },
})