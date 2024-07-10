import * as React from 'react';
import { Form, redirect} from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AppLogo from '../assets/images/logo03.png';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation } from 'react-router-dom';


export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const userEmail = data.email;

    try {
        // Get user details
        const userDetails = await customFetch.get(`/users/${userEmail}`);
        const userRole = userDetails.data?.user?.role;

        // Perform login by making a POST request to the authentication endpoint
        await customFetch.post('/auth/signin', data);

        // Show a success message
        toast.success('Login Successful');

        // Redirect the user based on their role
        const redirectTo = userRole === 'admin' ? '/admin' : '/';
        window.location.href = redirectTo; // Redirect immediately

        // No need to return anything since the page will be redirected
    } catch (error) {
        // Handle login failure
        toast.error(error?.response?.data?.msg);
        return error;
    }
};




function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
               Food Fantasy
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



export default function SignInSide() {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('refresh') === 'true') {
            setTimeout(() => {
                setIsLoading(false); // Set loading state to false after delay
                window.location.reload(); // Reload the page
            }, 100); // Adjust the delay as needed
        } else {
            setIsLoading(false); // If not refreshing, set loading state to false immediately
        }
    }, [location.search]);

    const [foodImageUrl, setFoodImageUrl] = useState('');

    useEffect(() => {
        // Fetch a random food image from Unsplash
        fetch('https://source.unsplash.com/random?food')
            .then(response => {
                setFoodImageUrl(response.url);
            })
            .catch(error => {
                console.error('Error fetching random food image:', error);
            });
    }, []);



    return (
        <>
      
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${foodImageUrl})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', height: '70px', width: '70px' }}>
                            <img src={AppLogo} alt="" height='100%' width='100%' />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign-in
                        </Typography>
                            <Form method="POST" >
                        <Box  noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 ,background:'green'}}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/" variant="body2">
                                       Back to Home
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                        </Form>
                    </Box>
                </Grid>
            </Grid>
         
        </>
    );
}