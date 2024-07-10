import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import AppLogo from '../assets/images/logo03.png'
import { Link } from "react-router-dom";
import { Button} from '@mui/material';
import { Link as ReactRouterLink } from 'react-router-dom';
import { WrapAppBar,WrapBox,WrapBoxdemo, WrapperTypoCart } from "../assets/wrapper/NavbarWrapper";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarModal from "./NavbarModal";
import { useAuth } from '../context/AuthProvider';
import { useDashboardContext } from "../pages/HomeLayout";


const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const {  logoutUser } = useDashboardContext();

  const handleLogout = () => {
    // Perform logout actions (e.g., clear cookies, reset state, etc.)
    document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    setIsLoggedIn(false);
    logoutUser();
  };

  const targetUrl = isLoggedIn ? '/' : '/signin';
  const buttonText = isLoggedIn ? 'Logout' : 'Sign In';
  const buttonColor = isLoggedIn ? 'success' : 'error';

    return (
        <>
    <WrapAppBar position="fixed" sx={{}}>
     <Toolbar>
        <WrapBoxdemo>

         {/* box one  */}
         <WrapBox>
             <img src={AppLogo} alt="AppLogo" height="60px" width="60px" />
             <Box>
             <div style={{ fontSize: "24px" }}>
             <span style={{ color: "red" }}> Food</span>
             <span style={{ color: "black" }}>Fantacy</span>
             
             </div>
             </Box>
         </WrapBox>

         {/* box two  */}
         <Box sx={{ display: { xs: "none", sm: "inline" } }}>
             <Box sx={{ display: "flex", gap: "35px", alignItems: "center" }}>
           {/*----------------- link 1----------------------  */}
             <Link
             activeclassname="active-link"
             key={1}
             to='/'
             spy='true'
             smooth='true'
             offset={-70}
             duration={500}
             style={{ cursor: "pointer",textDecoration:'none' }}   
             >
             <WrapperTypoCart key={1} variant="h6" color={'black'}>
                 Home
             </WrapperTypoCart>
             </Link>
             {/*----------------- link 2----------------------  */}
             <Link
             activeclassname="active-link"
             key={2}
             to='/category'
             spy='true'
             smooth='true'
             offset={-70}
             duration={500}
             style={{ cursor: "pointer",textDecoration:'none' }}   
             >
             <WrapperTypoCart key={2} variant="h6" color={'black'}>
                 Category
             </WrapperTypoCart>
             </Link>
             {/*----------------- link 3----------------------  */}
            
          
             <Link
             activeclassname="active-link"
             key={4}
             to='/Menu'
             spy='true'
             smooth='true'
             offset={-70}
             duration={500}
             style={{ cursor: "pointer",textDecoration:'none' }}   
             >
             <WrapperTypoCart key={4} variant="h6" color={'black'}>
                 Menu
             </WrapperTypoCart>
             </Link>
                  {/*----------------- link 4----------------------  */}
             <Link
            activeclassname="active-link"
             key={5}
             to='/bookings'
             spy='true'
             smooth='true'
             offset={-70}
             duration={500}
             style={{ cursor: "pointer",textDecoration:'none' }}   
             >
             <WrapperTypoCart key={5} variant="h6" color={'black'}>
                Bookings
             </WrapperTypoCart>
             </Link>
                  {/*----------------- link 5----------------------  */}
                  <Link
                    activeclassname="active-link"
                    key={5}
                    to='/contact'  // Update this line
                    spy='true'
                    smooth='true'
                    offset={-70}
                    duration={500}
                    style={{ cursor: "pointer", textDecoration: 'none' }}
                  >
                    <WrapperTypoCart key={5} variant="h6" color={'black'}>
                      Contact
                    </WrapperTypoCart>
                  </Link>
             </Box>
      </Box>


        {/* box three  */}
         <Box sx={{ display: { xs: "none", sm: "inline" } }}>
            <Box sx={{ display: "flex" ,alignItems:'center',gap:'18px' ,cursor:'pointer'}}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center',gap:'4px' }}>
                   <ShoppingCartIcon />
                <Link to="/cart" style={{ textDecoration: 'none',color:'black' }}>
                  Cart
                </Link>
                </Typography>
                {/* <WrapperTypoCart variant="h6" sx={{ display: 'flex', alignItems: 'center',gap:'4px' }}>
                 <BookmarkAddedIcon />
                    <Link>
                      Orders
                     </Link>
                </WrapperTypoCart> */}
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center',gap:'4px' }}>
          
                    <Button
                      variant="outlined"
                      color={buttonColor}
                      component={ReactRouterLink}
                      to={targetUrl}
                      onClick={isLoggedIn ? handleLogout : null} // Conditionally attach handleLogout only if isLoggedIn is true
                    >
                      {buttonText}
                    </Button>
                  
                </Typography>
            </Box>
        </Box>
        </WrapBoxdemo>

        {/* for showing menu in mobile devices  */}
        <NavbarModal/>
    </Toolbar>
    </WrapAppBar>


    
        </>
    );
};

export default Navbar;