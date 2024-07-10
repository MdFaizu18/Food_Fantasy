import React from 'react'
import AdminNavbar from '../../components/AdminNavbar'
import { WrapperAdminResponiveBox } from '../../assets/wrapper/AdminResponsiveWrapper'
import AdminFoodItemsOutlet from './AdminFoodItemsOutlet'
import { Box, Button, TextField, Typography } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import { useAllFoodItemsContext } from './AdminFoodItemsOutlet'
import AdminFoodItemsTable from './AdminFoodItemsTable'
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import img01 from '../../assets/images/food-galler-img-1.jpg'
import img02 from '../../assets/images/food-galler-img-2.jpg'
import img03 from '../../assets/images/food-galler-img-3.jpg'
import img04 from '../../assets/images/food-galler-img-4.jpg'
import img05 from '../../assets/images/food-galler-img-5.jpg'
import img06 from '../../assets/images/food-galler-img-6.jpg'
import img07 from '../../assets/images/deserts/deserts-07.jpg'

const AdminFoodItems = () => {
    const { data } = useAllFoodItemsContext();
    const { dishes } = data;
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
                            <Typography variant="h4">Dishes List </Typography>

                        </Box>
                     
                        <Button href='/admin/addDish' variant="contained" startIcon={<RamenDiningIcon />}
                            sx={{
                                backgroundColor: 'rgb(255, 167, 50)',
                                color: 'black',
                                height:'50px',
                                '&:hover':{
                                    background:'rgb(255, 167, 50)'
                                }
                            }}>
                           Add Dish
                        </Button>
                       
                        <TextField sx={{ width: '300px' }} id="outlined-basic" label="search..." variant="outlined" />

                        <SearchIcon sx={{ marginLeft: "-6%", marginRight: "5%" }} />
                    </Box>
                </Box>
                {/* food gallery images to display  */}
                <Box sx={{ margin: '3% 0 3% 1%', display:'flex',gap:'10px' }}>
                    <img src={img01} alt="image" height='150px' width='170px' style={{borderRadius:'10px'}} />
                    <img src={img02} alt="image" height='150px' width='170px' style={{ borderRadius: '10px' }} />
                    <img src={img03} alt="image" height='150px' width='170px' style={{ borderRadius: '10px' }} />
                    <img src={img04} alt="image" height='150px' width='170px' style={{ borderRadius: '10px' }} />
                    <img src={img05} alt="image" height='150px' width='170px' style={{ borderRadius: '10px' }} />
                    <img src={img06} alt="image" height='150px' width='170px' style={{ borderRadius: '10px' }} />
                    <img src={img07} alt="image" height='150px' width='170px' style={{ borderRadius: '10px' }} />
                   
                  
                </Box>
                <Box sx={{ margin: '2% 0 2% 1%' }}>

                    <AdminFoodItemsTable dishes={dishes} />
                </Box>
            </WrapperAdminResponiveBox>
        </>
    )
}

export default AdminFoodItems;