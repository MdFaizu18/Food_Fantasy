import { Box, styled } from "@mui/material";

export const WrapperChefContent = styled(Box)({
 height:'650px',
 background:'white',
    marginTop: '-8% ',
    marginBottom: '8% ',
    '@media (max-width: 600px)': {
        height:'1500px'
    }
})

export const WrapperMainContent = styled(Box)({
display:'flex',
padding:'0 5%',
justifyContent:'space-around',
marginTop:'3%',
    '@media (max-width: 600px)': {
        flexDirection:'column'
    },

})