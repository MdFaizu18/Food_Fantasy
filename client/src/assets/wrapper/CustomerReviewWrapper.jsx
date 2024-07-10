import { Box, Card, styled } from "@mui/material";
import img from '../images/home-slide-2.jpg';

export const BlogContainWrapper = styled(Box)({
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    background:'#f5f5f5',
    '@media (max-width: 600px)': {
        paddingTop:'5%',
       height:'1000px'
    },
})

export const WrapperHeaderBox = styled(Box)({
    textAlign: 'center',
    paddingTop:'5%',
    '@media (max-width: 600px)': {
        paddingTop: '0%',
    },

})

export const CutomerReviewResponsiveBox = styled(Box)({
    minWidth: 205,
    display: 'flex',
    gap: '30px',
    paddingTop: '2%',
    '@media (max-width: 600px)': {
      display:'grid',
    },

})

export const WrapperCard = styled(Card)({
    width: '450px',
    borderRadius: '20px',
    backgroundColor: 'rgb(225, 240, 218)',
    boxShadow: ' 0 0 10px 1px rgba(0, 0, 0, 0.25)',
    backdropFilter: ' blur(15px)',
    '@media (max-width: 600px)': {
        width: '350px',
    },
})
