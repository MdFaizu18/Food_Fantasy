import React, { useState } from 'react'
import { Box, Button, Switch, TextField, Typography } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { AddDishesLeftWrapper, AddDishesMainWrapper, AddDishesRightInnerBox, AddDishesRightWrapper, PreviewInnerBox } from '../../assets/wrapper/AddDishesWrappper';
import customFetch from '../../utils/customFetch'
import { Form, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post('/admin/add-dish', data);
        toast.success("Dish Added Successfully");
        return redirect('/admin/items')
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error
    }
}


const AddDishesBox = () => {
    const navigate = useNavigate();
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const handleChangeCheck = (event) => {
        setChecked(event.target.checked);
    };
    const handleChange2 = (event) => {
        setChecked2(event.target.checked);
    };

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        newPrice: "",
        desc: "",
        quantity:"",
        rate: "",
        category: "",
        status:"",
        file: null,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            file: file, // Update key to 'image' instead of 'file'
        }));
        console.log("Image File:", file);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log("Form State:", formData); // Add this line
    };

    const handleSaveData = async (e) => {
        e.preventDefault();

        const formDataObject = new FormData();

        for (const key in formData) {
            if (formData[key] !== null && formData[key] !== undefined) {
                formDataObject.append(key, formData[key]);
            }
        }

        console.log("formDataObject:", formDataObject); // Log the formDataObject

        try {
            const response = await axios.post(
                "http://localhost:5005/api/v1/admin/addDish",
                formDataObject
            );
            console.log(response);
            toast.success("Dish Added successfully");
            console.log("Success:", response.data);
            navigate('/admin/items');
        } catch (error) {
            // console.error("Error status:", error.response.status);
            // console.error("Error data:", error.response.data);
            // console.error("Request config:", error.config);
            toast.error("Failed to add dish. Please try again later.");
        }
    };









    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    // Function to handle file selection
    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // Generate a preview URL for the selected image
        const reader = new FileReader();
        reader.onload = () => {
            setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };
    return (
       <form>
        <AddDishesMainWrapper>


           <AddDishesLeftWrapper>
                <Box sx={{ padding: '12%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {formData.file ? (
                        <Box >
                            {/* Display preview of the selected image */}
                            <img
                              src={URL.createObjectURL(formData.file)}
                                alt="Preview"
                                style={{ maxWidth: '300px', maxHeight: '300px', borderRadius: '10px' }}
                            />
                        </Box>
                    ) : (
                        <PreviewInnerBox>
                            <Typography textAlign={'center'} sx={{ marginTop: '40%' }}>Image Preview</Typography>
                        </PreviewInnerBox>
                    )}
                    <Box textAlign={'center'}>
                            <input type="file" onChange={handleFileChange} accept="image/*" />
                    </Box>

                </Box>
           </AddDishesLeftWrapper>
           
            <AddDishesRightWrapper>
                    <Box sx={{ display: 'flex', gap: '50px' }}>
                        <AddDishesRightInnerBox>
                            <Box sx={{ display: 'grid', gap: '10px', marginBottom: '1%' }}>
                                <label htmlFor="dish-name">Dish Name</label>
                                <TextField
                                    name="name"
                                    placeholder="Enter Dish Name"
                                    variant="outlined"
                                    value={formData.name}
                                    onChange={handleChange}
                                    sx={{
                                        width: '350px', '& .MuiOutlinedInput-root': {
                                            height: '40px',
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'orange', // Change the border color on hover
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'orange', // Change the border color on focus
                                            },
                                        },
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: 'grid', gap: '10px', marginBottom: '1%' }} >
                                <label htmlFor="dish-name">Category</label>
                                <TextField
                                    name="category"
                                    placeholder="Enter Category"
                                    variant="outlined"
                                    value={formData.category}
                                    onChange={handleChange}
                                    sx={{
                                        width: '350px', '& .MuiOutlinedInput-root': {
                                            height: '40px',
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'orange', // Change the border color on hover
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'orange', // Change the border color on focus
                                            },
                                        },
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '1%' }}>
                                <Box sx={{ display: 'grid', gap: '10px' }}>
                                    <label htmlFor="dish-name">Selling Price</label>
                                    <TextField
                                        name='newPrice'
                                        placeholder="Selling Price"
                                        variant="outlined"
                                        value={formData.newPrice}
                                        onChange={handleChange}
                                        sx={{
                                            width: '170px', '& .MuiOutlinedInput-root': {
                                                height: '40px', // Adjust the height of the input field
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'orange', // Change the border color on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'orange', // Change the border color on focus
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                                <Box sx={{ display: 'grid', gap: '10px' }}>
                                    <label htmlFor="dish-name">Cost Price</label>
                                    <TextField
                                        name='price'
                                        placeholder="Cost Price"
                                        variant="outlined"
                                        value={formData.price}
                                        onChange={handleChange}
                                        sx={{
                                            width: '170px', '& .MuiOutlinedInput-root': {
                                                height: '40px', // Adjust the height of the input field
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'orange', // Change the border color on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'orange', // Change the border color on focus
                                                },
                                            },
                                        }}
                                    />

                                </Box>
                            </Box>
                            <Box sx={{ display: 'grid', gap: '10px', marginBottom: '1%' }} >
                                <label htmlFor="dish-name">Quantity</label>
                                <TextField
                                    name="quantity"
                                    placeholder="Enter Quantity"
                                    variant="outlined"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    sx={{
                                        width: '350px', '& .MuiOutlinedInput-root': {
                                            height: '40px',
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'orange', // Change the border color on hover
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'orange', // Change the border color on focus
                                            },
                                        },
                                    }}
                                />
                            </Box>

                        </AddDishesRightInnerBox>
                        <AddDishesRightInnerBox>

                            <Box sx={{ display: 'grid', gap: '10px', marginBottom: '1%' }} >
                                <label htmlFor="dish-name">Description</label>
                                <TextField
                                    name="desc"
                                    placeholder="Description..."
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={formData.desc}
                                    onChange={handleChange}
                                    sx={{
                                        width: '350px', '& .MuiOutlinedInput-root': {
                                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'orange', // Change the border color on hover
                                            },
                                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                borderColor: 'orange', // Change the border color on focus
                                            },
                                        },
                                    }}
                                />
                            </Box>
                            <Box sx={{ display: 'flex', gap: '10px', marginBottom: '1%' }}>
                                <Box sx={{ display: 'grid', gap: '10px' }}>
                                    <label htmlFor="dish-name">Status</label>
                                    <TextField
                                        name='status'
                                        placeholder="Status"
                                        variant="outlined"
                                        value={formData.status}
                                        onChange={handleChange}
                                        sx={{
                                            width: '170px', '& .MuiOutlinedInput-root': {
                                                height: '40px', // Adjust the height of the input field
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'orange', // Change the border color on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'orange', // Change the border color on focus
                                                },
                                            },
                                        }}
                                    />
                                </Box>
                                <Box sx={{ display: 'grid', gap: '10px' }}>
                                    <label htmlFor="dish-name">Ratings</label>
                                    <TextField
                                        name='rate'
                                        placeholder="Ratings"
                                        variant="outlined"
                                        value={formData.rate}
                                        onChange={handleChange}
                                        sx={{
                                            width: '170px', '& .MuiOutlinedInput-root': {
                                                height: '40px', // Adjust the height of the input field
                                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'orange', // Change the border color on hover
                                                },
                                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                                    borderColor: 'orange', // Change the border color on focus
                                                },
                                            },
                                        }}
                                    />

                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '2% 0% 0% 0%' }}>
                                <Box sx={{ display: 'flex', gap: '140px' }}>
                                    <label htmlFor="dish-name">Discount</label>
                                    <Box display={'flex'} sx={{}}>

                                        <Typography sx={{ marginTop: '6px' }}>Add Discount</Typography>
                                        <Switch
                                            color='warning'
                                            checked={checked}
                                            onChange={handleChangeCheck}
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', gap: '10px', marginLeft: '40%'}}>
                                    <Button sx={{
                                        backgroundColor: 'rgb(255, 128, 128)',
                                        '&:hover': {
                                            backgroundColor: 'red'
                                        }
                                    }} variant="contained" startIcon={<CancelIcon />}>
                                        Clear
                                    </Button>
                                    <Button  variant="contained" startIcon={<BeenhereIcon />} type='submit'
                                    onClick={handleSaveData}
                                        sx={{
                                            background: 'rgb(252, 103, 54)',
                                            '&:hover': {
                                                backgroundColor: 'rgb(252, 103, 54)'
                                            }
                                        }} >
                                        Save
                                    </Button>
                                </Box>

                            </Box>


                        </AddDishesRightInnerBox>
                    </Box>





            </AddDishesRightWrapper>
        </AddDishesMainWrapper>
          </form>
    );
};

export default AddDishesBox;

