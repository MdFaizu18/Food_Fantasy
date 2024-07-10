import { styled,Box } from "@mui/material";

export const WrapperMainBox = styled(Box)({
    height:'800px',
    background:'white',
     '@media (max-width: 600px)': {
       height:'900px'
    },

})
export const WrapperHeaderBox = styled(Box)({
    textAlign: 'center',
    paddingTop: '3%',
})
