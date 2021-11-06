import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const navigationBar = {
    color: '#fff',
    textDecoration: 'none'
}

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1, mb: 8 }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Doctor Portal
                        </Typography>
                        <Link to="/" style={navigationBar}><Button color="inherit" >Home</Button></Link>
                        <Link to="/appointment" style={navigationBar}><Button color="inherit" >Appointment</Button></Link>
                        {
                            user.email ? (
                                <NavLink to="/" style={navigationBar}>
                                    <Link to="/dashboard" style={navigationBar}><Button color="inherit" >Dashboard</Button></Link>
                                    <Button onClick={logout} style={navigationBar} color="inherit">Logout</Button>
                                    <Button style={navigationBar} color="inherit">{user.displayName}</Button>
                                </NavLink>
                            ) : (
                                <NavLink to="/login" style={navigationBar}>
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                            )
                        }
                    </Toolbar>
                </Container>
            </AppBar >
        </Box >
    );
};

export default Navigation;