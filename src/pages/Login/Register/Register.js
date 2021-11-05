import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const [loginData, setLoginData] = useState({});
    const handleOnChange = (e) => {
        let newData = { ...loginData };
        newData[e.target.name] = e.target.value;
        setLoginData(newData);
    }
    const handleLogin = (e) => {
        e.preventDefault();

        registerUser(loginData.email, loginData.password);
    }
    return (
        <Container maxWidth="xl" sx={{ mt: 2 }}>
            {authError &&
                <Alert
                    severity="error"
                    style={{
                        display: 'flex',
                    }}
                >
                    <Typography>User Register Failed</Typography>
                    {/* <CloseIcon /> */}
                </Alert>}
            {user.email && <Alert severity="success">User Register Successfully</Alert>}
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} sx={{ mt: 12 }}>
                    <Typography variant="button" display="block" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '400px', m: 1 }}
                            id="standard-basic-name"
                            label="Your Name"
                            type="text"
                            variant="standard"
                            name="name"
                            onChange={handleOnChange}
                            helperText=""
                        />
                        <TextField
                            sx={{ width: '400px', m: 1 }}
                            id="standard-basic-email"
                            label="Your Email"
                            type="email"
                            variant="standard"
                            name="email"
                            onChange={handleOnChange}
                            helperText=""
                        />
                        <TextField
                            sx={{ width: '400px', m: 1 }}
                            id="standard-basic-password"
                            label="Your Password"
                            type="password"
                            variant="standard"
                            name="password"
                            onChange={handleOnChange}
                            helperText=""
                        />
                        <TextField
                            sx={{ width: '400px', m: 1 }}
                            id="standard-basic-confirm-password"
                            label="Confirm Password"
                            type="password"
                            variant="standard"
                            name="confirm_password"
                            onChange={handleOnChange}
                            helperText=""
                        />
                        <Button variant="contained" sx={{ width: '400px', m: 3 }} type="submit">Register</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/login"><Button variant="text">Already Registered? Please Login</Button></NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;