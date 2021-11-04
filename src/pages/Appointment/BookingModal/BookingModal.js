import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    borderRadius: '10px',
    // border: '1px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openAppointment, handleCloseAppointmentModal, booking, date }) => {
    const { name, time } = booking;
    const handleAppointmentForm = (e) => {
        e.preventDefault();
        handleCloseAppointmentModal();
    }
    return (
        <Modal
            open={openAppointment}
            onClose={handleCloseAppointmentModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{ mb: 3, textAlign: 'center' }} id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form>
                    <TextField sx={{ width: '90%', mb: 2 }} label="Your Name" variant="outlined" size="small" />
                    <TextField sx={{ width: '90%', mb: 2 }} label="Your Email" variant="outlined" size="small" />
                    <TextField sx={{ width: '90%', mb: 2 }} label="Phone No." variant="outlined" size="small" />
                    <TextField sx={{ width: '90%', mb: 2 }} label="Time" defaultValue={time} disabled variant="outlined" size="small" />
                    <TextField sx={{ width: '90%', mb: 2 }} label="Date" defaultValue={date.toDateString()} disabled variant="outlined" size="small" />
                    <Button onClick={handleAppointmentForm} type="submit" sx={{ mt: 3, background: '#14D1CC', ml: 'auto' }} variant="contained">BOOK APPOINTMENT</Button>
                </form>
            </Box>
        </Modal >
    );
};

export default BookingModal;