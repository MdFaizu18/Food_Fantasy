import React, { useState } from 'react';
import { Box, Button, Switch, TextField, Typography } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddDishesBox = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        newPrice: "",
        desc: "",
        quantity: "",
        rate: "4",
        category: "",
        status: "available",
        file: null,
    });

    const [checked, setChecked] = useState(false);

    const handleChangeCheck = (event) => {
        setChecked(event.target.checked);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            file: file,
        }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveData = async (e) => {
        e.preventDefault();

        const formDataObject = new FormData();

        for (const key in formData) {
            formDataObject.append(key, formData[key]);
        }

        try {
            const response = await axios.post(
                "http://localhost:5005/api/v1/admin/orders",
                formDataObject
            );
            toast.success("Dish Added successfully");
            console.log("Success:", response.data);
        } catch (error) {
            // console.error("Error status:", error.response.status);
            // console.error("Error data:", error.response.data);
            // console.error("Request config:", error.config);
            toast.error("Failed to add dish. Please try again later.");
        }
    };

    return (
        <Box>
            <Typography variant="h5">Add Dish</Typography>
            <form onSubmit={handleSaveData}>
                <Box display="flex" gap="50px">
                    <Box>
                        <Typography>Image Preview</Typography>
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        {/* Display preview of the selected image */}
                        {formData.file && (
                            <img src={URL.createObjectURL(formData.file)} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px', borderRadius: '10px' }} />
                        )}
                    </Box>
                    <Box>
                        <TextField name="name" label="Dish Name" variant="outlined" value={formData.name} onChange={handleChange} fullWidth margin="normal" />
                        <TextField name="category" label="Category" variant="outlined" value={formData.category} onChange={handleChange} fullWidth margin="normal" />
                        <TextField name="newPrice" label="Selling Price" variant="outlined" value={formData.newPrice} onChange={handleChange} fullWidth margin="normal" />
                        <TextField name="price" label="Cost Price" variant="outlined" value={formData.price} onChange={handleChange} fullWidth margin="normal" />
                        <TextField name="quantity" label="Quantity" variant="outlined" value={formData.quantity} onChange={handleChange} fullWidth margin="normal" />
                        <TextField name="desc" label="Description" variant="outlined" multiline rows={4} value={formData.desc} onChange={handleChange} fullWidth margin="normal" />
                        <TextField name="status" label="Status" variant="outlined" value={formData.status} onChange={handleChange} fullWidth margin="normal" />
                        <Box display="flex" gap="20px">
                            <Typography>Add Discount</Typography>
                            <Switch color="warning" checked={checked} onChange={handleChangeCheck} inputProps={{ 'aria-label': 'controlled' }} />
                        </Box>
                        <Box display="flex" gap="20px">
                            <Button variant="contained" startIcon={<CancelIcon />} color="error">Clear</Button>
                            <Button type="submit" variant="contained" startIcon={<BeenhereIcon />} color="success">Save</Button>
                        </Box>
                    </Box>
                </Box>
            </form>
        </Box>
    );
};

export default AddDishesBox;
