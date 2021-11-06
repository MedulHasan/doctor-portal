import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setAppointmentBooking }) => {
    const [openAppointment, setOpenAppointment] = React.useState(false);
    const handleOpenAppointmentModal = () => setOpenAppointment(true);
    const handleCloseAppointmentModal = () => setOpenAppointment(false);
    const { name, time, space } = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 5 }}>
                    <Typography variant="h5" sx={{ fontSize: '30px', color: '#14D1CC' }}>
                        {name}
                    </Typography>
                    <Typography variant="h5" sx={{ fontSize: '20px' }}>
                        {time}
                    </Typography>
                    <Typography sx={{ color: 'GrayText' }}>
                        {space} Space Available
                    </Typography>
                    <Button onClick={handleOpenAppointmentModal} sx={{ mt: 3, background: '#14D1CC' }} variant="contained">BOOK APPOINTMENT</Button>
                </Paper>
            </Grid >
            <BookingModal
                booking={booking}
                date={date}
                openAppointment={openAppointment}
                handleCloseAppointmentModal={handleCloseAppointmentModal}
                setAppointmentBooking={setAppointmentBooking}
            />
        </>
    );
};

export default Booking;