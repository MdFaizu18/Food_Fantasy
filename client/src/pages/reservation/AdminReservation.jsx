import AdminNavbar from '../../components/AdminNavbar';
import { WrapperAdminResponiveBox } from '../../assets/wrapper/AdminResponsiveWrapper';
import React from 'react';
import { useAllReserveContext } from './AdminReservationLoader';
import AdminReservationTable from './AdminReservationTable';
import { Box, TextField, Typography } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";


const AdminReservation = () => {
    const { data } = useAllReserveContext();
    const { details } = data;

    return (
        <div>
            <AdminNavbar propName='Reservation' />
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
                            <Typography variant="h4">Bookings </Typography>
                         
                        </Box>
                        <TextField sx={{width:'300px'}} id="outlined-basic" label="search..." variant="outlined" />

                        <SearchIcon sx={{ marginLeft: "-6%", marginRight: "5%" ,cursor:'pointer'}} />
                    </Box>
          </Box>
                 <Box sx={{margin:'2% 0 2% 1%'}}>

                    <AdminReservationTable details={details}  />
                 </Box>
            </WrapperAdminResponiveBox>
        </div>
    );
};

export default AdminReservation;
