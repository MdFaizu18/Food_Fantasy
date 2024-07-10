import { styled,Box, CardMedia,Button } from "@mui/material";

export const WrapperMainBox = styled(Box)({
    background:'#f5f5f5',
    height:'730px',
})

export const WrapperHeaderBox = styled(Box)({
    textAlign:'center',
    paddingTop:'10%',
})

export const WrapperContentBox = styled(Box)({
    padding:'3%'

})

export const WrapperCardMedia = styled(CardMedia)({
   display:'flex',
   justifyContent:'center',
   alignItems:'center'
    
})

export const WrapperButton = styled(Button)({
    color: "white",
    background:'green',
 
    border: "1px solid black",
    "&:hover":{
        color: "white",
        background: 'green',
    }
   
});