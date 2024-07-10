import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box } from '@mui/material';

const AdminReservationTable = ({ details }) => {
    
    const rows = details.map(detail => {
        const reserveDate = new Date(detail.reserveDate);

        // Format date to day, month, and year separately
        const day = reserveDate.getDate();
        const month = reserveDate.getMonth() + 1; // Months are zero-based, so add 1
        const year = reserveDate.getFullYear();

        // Combine formatted day, month, and year
        const formattedDate = `${day}/${month}/${year}`;

        const time = new Date(`2000-01-01T${detail.reserveTime}:00`).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        return {
            Date: formattedDate,
            Time: time,
            Customers: detail.reserveName,
            Members: detail.reserveMember,
            Notes: detail.reserveNote,
            Updated: new Date(detail.createdAt).toLocaleString(),
            Actions: <>
            <EditIcon color="primary" />
            <DeleteForeverIcon color="error" />
            </>
        };
    });

    const Headers = [
        { id: 1, name: "Date" },
        { id: 2, name: "Time" },
        { id: 3, name: "Customers" },
        { id: 4, name: "Members" },
        { id: 5, name: "Notes" },
        { id: 6, name: "Updated" },
        { id: 7, name: "Actions" }
    ];

    return (
       <Box sx={{ paddingBottom: '5%' }}>

   

        <TableContainer component={Paper} sx={{ width: "1250px" }}>
            <Table sx={{ Width: "850px" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {Headers.map((title) => (
                            <TableCell
                                align="center"
                                sx={{ fontSize: "18px", fontWeight: "600" }}
                                key={title.id}
                            >
                                {title.name}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={index} // Using index as the key as the data doesn't seem to have a unique identifier
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="center">
                                {row.Date}
                            </TableCell>
                            <TableCell align="center">{row.Time}</TableCell>
                            <TableCell align="center">{row.Customers}</TableCell>
                            <TableCell align="center">{row.Members}</TableCell>
                            <TableCell align="center">{row.Notes}</TableCell>
                            <TableCell align="center">{row.Updated}</TableCell>
                            <TableCell align="center" sx={{cursor:'pointer'}}>{row.Actions}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

        </Box>
    );
};

export default AdminReservationTable;
