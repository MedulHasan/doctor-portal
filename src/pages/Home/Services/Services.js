import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from '../Service/Service';
import { Typography } from '@mui/material';
import { teal } from '@mui/material/colors';

const Services = () => {
    const t = teal['A700'];
    const services = [
        {
            name: 'Fluoride Treatment',
            description: 'Aroma Dental is here to serve all your dental needs, from simple dental cleaning to placing dental implants or covering all your orthodontics treatments. We server all Adults and children under one roof. Book your next appointment today to learn more about how to have the healthiest and most beautiful smile. ',
            img: fluoride
        },
        {
            name: 'Cavity Filling',
            description: 'Aroma Dental is here to serve all your dental needs, from simple dental cleaning to placing dental implants or covering all your orthodontics treatments. We server all Adults and children under one roof. Book your next appointment today to learn more about how to have the healthiest and most beautiful smile. ',
            img: cavity
        },
        {
            name: 'Teeth Whitening',
            description: 'Aroma Dental is here to serve all your dental needs, from simple dental cleaning to placing dental implants or covering all your orthodontics treatments. We server all Adults and children under one roof. Book your next appointment today to learn more about how to have the healthiest and most beautiful smile. ',
            img: whitening
        }
    ]
    return (
        <Box sx={{ flexGrow: 1, mx: 8, mb: 10 }}>
            <Typography variant="h6" component="div" sx={{ my: 1 }} color={t}>
                OUR SERVICES
            </Typography>
            <Typography variant="h4" component="div" sx={{ mb: 2, fontWeight: 600 }}>
                SERVICES WE PROVIDE
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service key={service.name} service={service} />)
                }
            </Grid>
        </Box>
    );
};

export default Services;