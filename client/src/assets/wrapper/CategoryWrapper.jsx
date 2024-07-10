import { Box, styled } from "@mui/material"
import img2 from '../images/category/background.jpg'

export const BgImageWrapper = styled(Box)({
    marginTop: '4%',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8)), url(${img2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '250px',
    width: '100%',
    '@media (max-width: 600px)': {
        height: '150px',
    },
})

export const BgInnerBox = styled(Box)({
    position: 'absolute',
    right: '2%',
    top: '25%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'center',
    color: 'white',
    '@media (max-width: 600px)': {
        right: '2%',
        top: '8%',
    },
})

export const CategoryHeadingBox = styled(Box)({
    margin: '5% 24% ',
     width: '50%'
})

export const CategoryMainBox = styled(Box)({
    // boxShadow:'0px 0px 5px black',
    backgroundColor:'rgba(225, 240, 218,0.3)',
    borderRadius:'20px',
    // backgroundColor:'#fff8ee',
    height:'2200px',
    width:'1100px',
    marginBottom:'5%',
    '@media (max-width: 600px)': {
        width: '400px',
        height: '3700px',
    },
})
export const CategoryInnerBox = styled(Box)({
    display:'flex',
    justifyContent:"space-between",
    padding:' 3%',
    gap:'5%',
    '@media (max-width: 600px)': {
       flexDirection:'column'
    },
})
export const CategoryLeftInnerBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    flex:'40%'
})
export const CategoryRighttInnerBox = styled(Box)({
    flex:'40%'
})
export const CategoryContentBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    marginTop:'5%'
})
export const CategoryImageBox = styled('img')({
    height:'400px',
    width:'500px',
    borderRadius:'20px',
   '@media (max-width:600px)':{
       height: '350px',
       width: '380px',
    //    display:'none'
   }
})