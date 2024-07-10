import styled from "@emotion/styled";
import { Box ,Card} from "@mui/material";

export const MainBox = styled(Box)({
    width: '100%',
    padding: '9% 10% 6% 10%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0px',
    background:'#fff8ee',
    justifyContent: 'space-around',
    fontFamily: 'Ubuntu,sans-serif',


    '@media (max-width: 600px)': {
        display: 'grid',
        gridTemplateColumns: '1fr', // Single column for smaller screens
        padding: '25% 10%',
    },
})

export const SaleImageWrapper = styled(Box)({
    position:'absolute',
    top:'18%',
    left:'33%'

})
export const Blur1ImageWrapper = styled(Box)({
    position:'absolute',
    top:'8%',
    left:'0%'

})
export const Blur2ImageWrapper = styled(Box)({
    position:'absolute',
    top:'60%',
    left:'93%'

})

export const WrapperBox1 = styled(Box)({ 
    minHeight:'180px',
    minWidth:'320px',
 
    img: {
        width: '90%',
        height: '90%',
        marginLeft: '-10%',
        marginTop:'3%'
    },
    
});

export const GridOfferBox = styled(Box)({
        margin: '2.2% 8% 5% 8%',
         height: '500px',
    img: {
        width: '100%',
        height: '120%',
    },
})
export const GridImageBox = styled(Box)({
        margin: '1% 8% 5% 8%',
         height: '500px',
})
export const WrapperBox2 = styled(Box)({
    marginBottom:'3%',
   
})

export const WrapperButtonBox = styled(Box)({
  margin:'7% 35% 10% 35%',
  border:'1px solid green',
  width:'fit-content',
  padding:'15px 20px',
  display:'flex',
  cursor:'pointer',
  background:'green',
  color:'white',
  borderRadius:'10px',
  boxShadow:'0px 0px 5px black',
  transition: 'background 0.3s, color 0.3s', // Optional: Add transition for a smoother effect
    '&:hover': {
        background: '#cc3333',
    },

})

export const WrapperBox3 = styled(Box)({
    marginTop:'5%',
    display:'flex',
    gap:'2%',
    '@media (max-width: 600px)': {
      marginLeft:'0%',
      width:'100%',
      display:'grid',
      gridTemplateRows:'1fr 1fr'
  
    },
 


})

export const WrapperCard = styled(Card)({
    width:'200px',
    boxShadow:'1px 1px 2px black',
    background:'rgb(250, 256, 250)',
      '@media (max-width: 600px)': {
        width:'100%',
        marginBottom:'5%'
    },
})

