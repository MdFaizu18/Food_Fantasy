import { Box,Typography,styled } from "@mui/material";

export const AddDishesMainWrapper=styled(Box)({
      display:'flex',
      gap:'10px',
      height:'700px',
      marginTop:'3%'
})

export const AddDishesLeftWrapper=styled(Box)({
          flex:'30%',
          border:'1px solid #ddd',
          height:'450px',
         borderRadius: '10px'
})
export const AddDishesRightWrapper=styled(Box)({
          flex:'65%',
          border: '1px solid #ddd',
          height: '450px',
           borderRadius: '10px',
           padding:'4% 3% ',
           marginRight:'1%'
})
export const AddDishesRightInnerBox=styled(Box)({
    display: 'flex', 
    flexDirection: 'column',
     gap: '10px'
})


export const PreviewInnerBox = styled(Box)({
    border: '2px dotted orange',
    borderWidth:'4px',
    diplay:'flex',
    justifyContent:'center',
    width: '300px',
     height: '300px',
     padding:'10%',
     borderRadius:'10px',
    backgroundColor:'rgba(246, 177, 122,.2)'
 
})