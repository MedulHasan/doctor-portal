import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import { AiFillDashboard } from 'react-icons/ai';
import { RiAdminFill } from 'react-icons/ri';
import { FaHospitalUser } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddDoctor from '../AddDoctor/AddDoctor';
import AdminRoute from '../../Login/PrivateRoute/AdminRoute';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [appointments, setAppointments] = React.useState([]);
    const [date, setDate] = React.useState(new Date());
    const { user, admin, token } = useAuth();
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    React.useEffect(() => {
        const url1 = `https://doctor-portal-medul.herokuapp.com/appointment?email=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url1, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [date, user.email, token])

    const drawer = (
        <Box
            sx={{ pt: 5 }}
            style={{
                background: 'linear-gradient(#18D2AE, #0FCFEA)',
                height: '100vh'
            }}>
            <List>
                <Link id="RouterNavLink" to="/home" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ListItem button>
                        <HomeIcon />
                        <Button sx={{ color: '#fff' }}>Home</Button>
                    </ListItem>
                </Link>
                <Link id="RouterNavLink" to="/appointment" style={{
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ListItem button>
                        <DashboardCustomizeIcon />
                        <Button sx={{ color: '#fff' }}>Appointment</Button>
                    </ListItem>
                </Link>
                <Link id="RouterNavLink" to={`${url}`} style={{
                    color: '#fff',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <ListItem button>
                        <AiFillDashboard style={{ fontSize: '25px' }} />
                        <Button sx={{ color: '#fff' }}>Dashboard</Button>
                    </ListItem>
                </Link>
                {admin &&
                    <Box>
                        <Link id="RouterNavLink" to={`${url}/makeAdmin`} style={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ListItem button>
                                <RiAdminFill style={{ fontSize: '25px' }} />
                                <Button sx={{ color: '#fff' }}>Make Admin</Button>
                            </ListItem>
                        </Link>
                        <Link id="RouterNavLink" to={`${url}/addDoctor`} style={{
                            color: '#fff',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <ListItem button>
                                <FaHospitalUser style={{ fontSize: '25px' }} />
                                <Button sx={{ color: '#fff' }}>Add Doctor</Button>
                            </ListItem>
                        </Link>
                    </Box>}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', background: '#F4FDFB', height: '100vh' }}>
            <MenuIcon
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 2, mt: 2, display: { md: 'none' } }}
            />
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome date={date} setDate={setDate} appointments={appointments} />
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
