import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Grid, Typography, TextField, Button, Alert, IconButton, CircularProgress } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, setAuthError } = useAuth();
    const [error, setError] = useState({});

    const handleOnChange = (e) => {
        let newData = { ...loginData };
        newData[e.target.name] = e.target.value;
        setLoginData(newData);
    };

    const handleLogin = (e) => {
        if (Object.keys(loginData).length === 0) {
            error.email = 'Email must be required';
            error.password = 'Password must be required';
            setError(error);
        } else if (Object.keys(loginData).length > 0 && loginData.email) {
            error.email = '';
            error.password = 'Password must be required';
            setError(error);
        } else if (Object.keys(loginData).length > 0 && loginData.password) {
            error.email = 'Email must be required';
            error.password = '';
            setError(error);
        } else {
            setError({});
        }
        e.preventDefault();
        loginUser(loginData.email, loginData.password, location, history);
    };

    return (
        <Container maxWidth="xl">
            {/* {authError &&
                <Alert
                    severity="error"
                    sx={{ mt: 1 }}
                >
                    <Typography>User Login Failed</Typography>
                    <IconButton
                        aria-label="close"
                        onClick={() => setAuthError(false)}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            mr: 3,
                            mt: 1
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Alert>}
            {user.email && <Alert severity="success">User Login Successfully</Alert>} */}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} sx={{ mt: 12 }}>
                    <Typography variant="button" display="block" gutterBottom>
                        Log In
                    </Typography>
                    {
                        Object.keys(error).length === 0 && isLoading ? (<CircularProgress />) : (
                            <form onSubmit={handleLogin}>
                                <TextField
                                    error={error.email ? true : false}
                                    sx={{ width: '400px', m: 1 }}
                                    id="standard-basic-email"
                                    label="Your Email"
                                    type="email"
                                    variant="standard"
                                    name="email"
                                    onChange={handleOnChange}
                                    helperText={error.email ? error.email : ''}
                                />
                                <TextField
                                    error={error.password ? true : false}
                                    sx={{ width: '400px', m: 1 }}
                                    id="standard-basic-password"
                                    label="Your Password"
                                    type="password"
                                    variant="standard"
                                    name="password"
                                    onChange={handleOnChange}
                                    helperText={error.password ? error.password : ''}
                                />
                                <Button variant="contained" sx={{ width: '400px', m: 3, mb: 1 }} type="submit">Login</Button>
                                <NavLink style={{ textDecoration: 'none' }} to="/register"><Button variant="text" sx={{ width: '400px', m: 3 }}>New User? Please Register</Button></NavLink>
                            </form>
                        )
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;