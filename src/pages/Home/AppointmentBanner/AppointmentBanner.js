import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import bannerBg from '../../../images/appointment-bg.png';
import doctor from '../../../images/doctor.png';
import { Button, Typography } from '@mui/material';

const AppointmentBanner = () => {
    const AppointmentBG = {
        background: `url(${bannerBg})`,
        backgroundColor: 'rgba(66, 73, 92, 0.9)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: '150px',
        marginBottom: '30px'
    };
    const appointmentText = {
        textAlign: 'left',
    }
    return (
        <Box style={AppointmentBG} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ p: 0 }}>
                <Grid item xs={12} md={5}>
                    <img
                        style={{ width: '450px', marginTop: '-120px' }}
                        src={doctor}
                        alt=""
                    />
                </Grid>
                <Grid item xs={12} md={6} style={appointmentText}>
                    <Typography variant="h5" sx={{ color: '#14D1CC' }}>
                        Appointment
                    </Typography>
                    <Typography variant="h3" sx={{ my: 1, width: '75%', color: '#fff', lineHeight: 1.2 }}>
                        Make an Appointment Today
                    </Typography>
                    <Typography variant="p" sx={{ color: '#fff', lineHeight: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae, voluptas nulla nam suscipit magnam quibusdam odit.
                    </Typography>
                    <br />
                    <Button sx={{ mt: 3, background: '#14D1CC' }} variant="contained">Learn More</Button>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;