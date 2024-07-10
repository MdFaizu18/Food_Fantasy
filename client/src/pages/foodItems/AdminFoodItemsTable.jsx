import { Box} from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useLoaderData } from 'react-router-dom';





const AdminFoodItemsTable = ({dishes}) => {
    

    const rows = dishes.map((detail) => {
        return {
            preview: detail.imageUrl, // Use detail.imageUrl instead of dishes.imageUrl
            name: detail.name, // Use detail.name instead of dishes.name
            category: detail.category, // Use detail.category instead of dishes.category
            newPrice: detail.newPrice, // Use detail.newPrice instead of dishes.newPrice
            price: detail.price, // Use detail.price instead of dishes.price
            quantity: detail.quantity, // Use detail.quantity instead of dishes.quantity
            status: detail.status, // Use detail.status instead of dishes.status
            actions: (
                <>
                    <EditIcon color="primary" />
                    <DeleteForeverIcon color="error" />
                </>
            ),
        };
    });

    const Headers = [
        { id: 1, name: "Preview" },
        { id: 2, name: "Dish Name" },
        { id: 3, name: "Category" },
        { id: 4, name: "Selling Price" },
        { id: 5, name: "Cost Price" },
        { id: 6, name: "Quantity" },
        { id: 7, name: "Status" },
        { id: 8, name: "Actions" }
    ];


    return (
        <>
           
                {/* //*-------------Reservation details------------------- */}
            <Box sx={{ paddingBottom: '5%' }} >
                    <TableContainer component={Paper} sx={{ width: "1250px" }}>
                        <Table sx={{ Width: "850px" }} aria-label="simple table">
                       
                            <TableHead>
                                <TableRow>
                                    {Headers.map((title) => (
                                        <TableCell
                                            align="center"
                                            sx={{ fontSize: "18px", fontWeight: "600", color:'rgb(255, 167, 50)' }}
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
                                    key={index}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                        <img src={row.preview} alt="" height='60px' width='60px' style={{borderRadius:'10px'}} />
                                           
                                        </TableCell>
                                        <TableCell align="center">{row.name}</TableCell>
                                        <TableCell align="center">{row.category}</TableCell>
                                    <TableCell align="center">$ {row.newPrice}</TableCell>
                                    <TableCell align="center">$ {row.price}</TableCell>
                                        <TableCell align="center">{row.quantity}</TableCell>
                                       
                                        <TableCell align="center">{row.status}</TableCell>
                                        <TableCell align="center">
                                            <EditIcon color="primary" />
                                            <DeleteForeverIcon color="error" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
          
        </>
    );
};

export default AdminFoodItemsTable;