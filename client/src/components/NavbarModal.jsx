import React from 'react';
import logo from '../assets/images/logo03.png'
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import HomeIcon from '@mui/icons-material/Home';
import CollectionsIcon from '@mui/icons-material/Collections';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Button, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Modal, Stack, Typography } from '@mui/material';
import { WrapperButton, WrapperButton2, WrapperMainBox, WrapperStack, WrapperTypography } from '../assets/wrapper/NavbarModalWrapper';


const NavbarModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const targetUrl = '/sign-in';

    return (
        <div>
        {/* humburger menu icon */}
        <Button sx={{ display: { xs: "block", sm: "none",color:'black' } }}
             onClick={handleOpen}>
             <LunchDiningIcon />
        </Button>
        {/* modal effect  */}
         <Modal
             open={open}
             onClose={handleClose}
             aria-labelledby="modal-modal-title"
             aria-describedby="modal-modal-description"
         >
         {/* modal contents  */}
         <WrapperMainBox>
         <Box bgcolor={"background.default"} color={"text.primary"} width={350} height={680} p={3} borderRadius={5} justifyContent='center' alignItems='center'>
         {/* cancel icon  */}
         <IconButton
             onClick={handleClose}
             id="modal-modal-title"
             variant="h6"
             component="h2"
             sx={{
                position:'absolute',
                top:'11%',
                left:'78%'
             }}
         >
            <ClearIcon />
         </IconButton>
         {/* main content for responsive  */}
         <Box sx={{ textAlign: 'center',marginTop:'15%' }}>
             <img src={logo} alt="" height={100} width={100} />
         </Box>
         <Grid container
               direction="column"
               justifyContent="center"
               alignItems="center" >
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <List >
                <ListItem>
                <ListItemIcon>
                   <HomeIcon/>
                </ListItemIcon>
                <a href="/" style={{textDecoration:'none'}}>
                    <WrapperTypography  >Home </WrapperTypography>
                </a>
                <ListItemText />
                </ListItem>
            </List>
        
            <List >
                <ListItem>
                <ListItemIcon>
                 <CategoryIcon />
                </ListItemIcon>
                 <a href="/category" style={{ textDecoration: 'none' }}>
                  <WrapperTypography  >Category </WrapperTypography>
                 </a>
                <ListItemText />
                </ListItem>
            </List>
        
            <List >
                <ListItem>
                <ListItemIcon>
                    <CollectionsIcon />
                </ListItemIcon>
                 <a href="/gallery" style={{ textDecoration: 'none' }}>
                     <WrapperTypography  >Gallery </WrapperTypography>
                </a>
                <ListItemText />
                </ListItem>
            </List>
        
            <List >
                <ListItem>
               <ListItemIcon>
                 <MenuBookIcon  />
                </ListItemIcon>
             <a href="/menu" style={{ textDecoration: 'none' }}>
                 <WrapperTypography  >Menu </WrapperTypography>
             </a>
                <ListItemText />
                </ListItem>
            </List>
        
            <List >
                <ListItem>
                <ListItemIcon>
                  <RateReviewIcon />
                </ListItemIcon>
              <a href="/bookings" style={{ textDecoration: 'none' }}>
                 <WrapperTypography  >Bookings </WrapperTypography>
             </a>
                <ListItemText />
                </ListItem>
            </List>
        
            
            </Box>
        </Grid>
        <WrapperStack spacing={4}>

        <WrapperButton startIcon={<ShoppingCartIcon/> }>
               Cart
         </WrapperButton>
        <WrapperButton2
           variant="outlined"
           color="error"
           component={ReactRouterLink}
           to={targetUrl} >
              Sign In
         </WrapperButton2>

        </WrapperStack>
        </Box>

                </WrapperMainBox>
            </Modal>

        </div>
    )
}

export default NavbarModal