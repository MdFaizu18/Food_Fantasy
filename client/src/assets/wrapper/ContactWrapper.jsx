import { Box, styled ,TextField,Button} from "@mui/material";
import img2 from '../images/contact/contact.jpg'
import { style } from "@mui/system";

export const WrapperMainBox = styled(Box)({
    height:'600px',
    background:'white',
    '@media (max-width: 600px)': {
        height: '900px',
    },
})

export const WrapperHeaderBox = styled(Box)({
    textAlign: 'center',
    paddingTop: '3%',
})

export const WrapperContactBox = styled(Box)({
    display:'flex',
    justifyContent:'space-around',
    '@media (max-width: 600px)': {
        display: 'flex',
        flexDirection: 'column',
    },
})

export const WrapperRightBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:'20px',
    paddingTop:'4%',
    marginLeft:'-15%',
      '@media (max-width: 600px)': {
          marginLeft: '5%',
    },
})

export const WrapperLeftBox = styled(Box)({
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center',
   maxWidth:'400px'
})

export const WrapperTextField = styled(TextField)({
    width:'500px',
    '@media (max-width: 600px)': {
        paddingLeft:'5%',
        width:'350px',
        '& label': {
            paddingLeft: '20px', // Adjust the value as needed
        },
    },
})


export const WrapperButton = styled(Button)({
    '@media (max-width: 600px)': {
        marginLeft: '5%',
    },
})


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

export const BranchesWrapperBox = styled(Box)({
    display:'flex',
    justifyContent:'space-around',
    padding:'0px 7%',
    '@media (max-width: 600px)': {
      flexDirection:'column', 
    },
})

export const BranchesInnerBox = styled(Box)({
    display:'flex',
    flexDirection:'column',
    gap:'8px',
    marginTop:'3%',
  
})

export const ContactBox = styled(Box)({
    marginTop:'3%',
    display:'flex',
    justifyContent:'space-around',
    padding:'0px 5%',
    '@media (max-width: 600px)': {
       flexDirection:'column',
    },

})
export const ContactSubBox =styled(Box)({
    border:'1px solid #ddd',
    height:'220px',
    width:'250px',
    borderRadius:'10px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px;',
    transition:'background .4s',
    '&:hover':{
       background:'rgba(0,200,10,.5)'
    },
    '@media (max-width: 600px)': {
        height: '220px',
        width: '370px',
        marginBottom:'2%'
    },

})

export const ImageBoxContact = styled('img')({
    height:'420px',
    width:'550px',
    '@media (max-width: 600px)': {
        height: '420px',
        width: '350px',
    },
})