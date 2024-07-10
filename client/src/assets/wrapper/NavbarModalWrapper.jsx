import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";


export const WrapperMainBox = styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:'20%',
  
})

export const WrapperTypography =styled(Typography)({
    fontWeight:'600',
    color:'green',
    marginLeft:'-15%',

})

export const WrapperStack = styled(Stack)({
    marginTop:'15%'
})

export const WrapperButton = styled(Button)({
    border:'1px solid black',
    background:'orange',
    color:'black',
    fontWeight:'700'
})

export const WrapperButton2 = styled(Button)({
    border: '1px solid black',
    background: 'rgba(255,0,0,0.8)',
    color: 'black',
    fontWeight: '700'
})