import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import {
    decrementQuantity,
    incrementQuantity,
    removeProduct,
    selectAllProducts,
} from "../../features/carts/cartSlices";
import { Box, Chip, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
    const {
        cart: allProducts,
        totalPrice, // Add totalPrice from the Redux state
    } = useSelector(selectAllProducts);
    const dispatch = useDispatch();

    // Use a state to track the quantity for each product
    const [productQuantities, setProductQuantities] = useState({});

    const handleIncrement = (id) => {
        // Increment the quantity for the specific product
        setProductQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            updatedQuantities[id] = (updatedQuantities[id] || 0) + 1;
            return updatedQuantities;
        });

        // Dispatch the increment action
        dispatch(incrementQuantity({ id }));
    };

    const handleDecrement = (id) => {
        // Get the current quantity for the specific product
        const currentQuantity = productQuantities[id] || 0;

        if (currentQuantity > 0) {
            // Decrement the quantity for the specific product
            setProductQuantities((prevQuantities) => {
                const updatedQuantities = { ...prevQuantities };
                updatedQuantities[id] = currentQuantity - 1;
                return updatedQuantities;
            });

            // Dispatch the decrement action
            dispatch(decrementQuantity({ id }));
        }
    };

    const handleRemoveProduct = (productId) => {
        // Remove the product from the state
        setProductQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[productId];
            return updatedQuantities;
        });

        // Dispatch the remove product action
        dispatch(removeProduct({ id: productId }));
    };
    const taxRate = 0.1281;

    const subTotal = allProducts.reduce(
        (total, product) =>
            total + product.price * (productQuantities[product._id] || 0),
        0
    );
    const totalQuantity = Object.values(productQuantities).reduce(
        (total, quantity) => total + quantity,
        0
    );
    const taxAmount = subTotal * taxRate;
    const totalCost = subTotal + taxAmount;
    return (
        <div style={{ marginTop: "5%" }}>
            <Navbar />
            <div style={{ display: "flex", gap: "10px", padding: " 1% 5%" }}>
                <div
                    style={{
                        flex: 0.7,
                        padding: "3%",
                        height: "565px",
                        overflowY: "scroll",
                    }}
                >
                    <style>
                        {`
              ::-webkit-scrollbar {
                width: 0;
              }
              scrollbar-width: none;
            `}
                    </style>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontSize: "13px" }}>PRODUCTS</TableCell>
                                    <TableCell style={{ fontSize: "13px" }} align="center">
                                        PRICE
                                    </TableCell>
                                    <TableCell style={{ fontSize: "13px" }} align="center">
                                        QUANTITY
                                    </TableCell>
                                    <TableCell style={{ fontSize: "13px" }} align="center">
                                        SUB-TOTAL
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allProducts.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCell
                                            component="th"
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "20px",
                                                fontSize: "14px",
                                                fontWeight: "600",
                                            }}
                                            scope="row"
                                        >
                                            <DeleteIcon
                                                sx={{ marginTop: "2%" }}
                                                onClick={() => handleRemoveProduct(product._id)}
                                            />
                                            <img
                                                src={product.imageUrl}
                                                style={{
                                                    height: "60px",
                                                    width: "60px",
                                                    borderRadius: "10px",
                                                }}
                                                alt={product.name}
                                            />
                                            {product.name}
                                        </TableCell>

                                        <TableCell align="center"> $ {product.price}</TableCell>
                                        <TableCell
                                            align="center"
                                            sx={{ display: "flex", alignItems: "center" }}
                                        >
                                            <Chip
                                                label="-"
                                                onClick={() => handleDecrement(product._id)}
                                            />
                                            <Typography
                                                style={{
                                                    width: "30px",
                                                    height: "30px",
                                                    display: "grid",
                                                    placeItems: "center",
                                                    margin: " 0px 6px",
                                                    border: "none",
                                                    fontSize: "14px",
                                                }}
                                                defaultValue={productQuantities[product._id] || 0}
                                            >
                                                {productQuantities[product._id] || 0}
                                            </Typography>
                                            <Chip
                                                label="+"
                                                onClick={() => handleIncrement(product._id)}
                                            />
                                        </TableCell>
                                        <TableCell align="center">
                                            $ {product.price * productQuantities[product._id] || 0}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Box
                    sx={{
                        flex: 0.3,
                        padding: " 3%",
                        border: "1px solid black",
                        display: "grid",
                        gridTemplateRows: "1fr 1fr 1fr 1fr   ",
                    }}
                >
                    <Typography sx={{ textAlign: "center", fontSize: "25px" }}>
                        Food Fantacy Receipt
                    </Typography>

                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ flex: 1 }}>
                            Delivery:
                            <span>Free</span>
                        </Typography>
                        <Typography>
                            Tax
                            <span> : 12.81% </span>
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ flex: 1 }}>
                            Total quantity:
                            <span> {totalQuantity || 0} </span>
                        </Typography>
                        <Typography>
                            Tax Amount:
                            <span> $ {taxAmount.toFixed(2) || 0} </span>
                        </Typography>
                    </Box>

                    <Typography>
                        Total Cost (including tax) :<span> $ {totalCost.toFixed(2)}</span>
                    </Typography>
                </Box>
            </div>
        </div>
    );
};

export default Cart;