import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '10.05 AM - 11.30 AM',
        space: 10
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '05.00 PM - 06.30 PM',
        space: 10
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '07.00 AM - 08.30 AM',
        space: 10
    },
    {
        id: 5,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 PM',
        space: 10
    },
]

const AvailableAppointment = ({ date }) => {

    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ fontSize: '36px' }}>Available Appointment on {date.toDateString()}</Typography>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                {
                    bookings.map(booking => <Booking key={booking.id} booking={booking} date={date} />)
                }
            </Grid>
        </Container >
    );
};

export default AvailableAppointment;