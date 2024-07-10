import React from 'react'
import AdminNavbar from '../../components/AdminNavbar';
import { WrapperAdminResponiveBox } from '../../assets/wrapper/AdminResponsiveWrapper'
import { Box, Breadcrumbs, Link, TextField, Typography } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AddDishesBox from './AddDishesBox';


const AddDishes = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/admin/items" >
           Food Items
        </Link>,
        
        <Typography key="3" color="orange">
           Add Dishes
        </Typography>,
    ];
  return (
    <>
          <AdminNavbar propName='Food Items' />
          <WrapperAdminResponiveBox>
              <Box >
                  <Box
                      sx={{
                          display: "flex",
                          placeItems: "center",
                          justifyContent: "space-around",
                      }}
                  >
                      <Box
                          sx={{
                              display: "flex",
                              placeItems: "center",
                              flex: ".9",
                              gap: "5px",
                          }}
                      >
                          <Typography variant="h4">Add Dishes </Typography>

                      </Box>
                      <Breadcrumbs
                          separator={<NavigateNextIcon fontSize="small" />}
                          aria-label="breadcrumb"
                      >
                          {breadcrumbs}
                      </Breadcrumbs>
                      <TextField sx={{ width: '300px' }} id="outlined-basic" label="search..." variant="outlined" />

                      <SearchIcon sx={{ marginLeft: "-6%", marginRight: "5%" }} />
                  </Box>
              </Box>
              {/* food gallery images to display  */}
             
              <Box sx={{ margin: '2% 0 2% 1%' }}>
                <AddDishesBox/>  
              </Box>
          </WrapperAdminResponiveBox>
    </>
  )
}

export default AddDishes;