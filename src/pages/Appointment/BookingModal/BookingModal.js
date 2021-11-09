import { Button, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import useAuth from '../../../hooks/useAuth';

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

const BookingModal = ({ openAppointment, handleCloseAppointmentModal, booking, date, setAppointmentBooking }) => {
    const { name, time } = booking;
    const { user } = useAuth();
    const initialInfo = { patientName: user.displayName, email: user.email, phone: '' }
    const [appointment, setAppointment] = useState(initialInfo)

    const handleOnBlur = (e) => {
        const newAppointment = { ...appointment };
        newAppointment[e.target.name] = e.target.value;
        setAppointment(newAppointment);
    };

    const handleSubmit = (e) => {
        const appointmentInfo = {
            ...appointment,
            time,
            serviceName: name,
            date: date.toLocaleDateString()
        };

        fetch('https://doctor-portal-medul.herokuapp.com/appointment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appointmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAppointmentBooking(true);
                    handleCloseAppointmentModal();
                }
            })

        e.preventDefault();
    };

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
                <form onSubmit={handleSubmit}>
                    <TextField
                        sx={{ width: '90%', mb: 2 }}
                        label="Patient Name"
                        defaultValue={user.displayName}
                        variant="outlined"
                        size="small"
                        name="patientName"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', mb: 2 }}
                        label="Email"
                        defaultValue={user.email}
                        variant="outlined"
                        size="small"
                        name="email"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', mb: 2 }}
                        label="Phone No."
                        variant="outlined"
                        size="small"
                        name="phone"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', mb: 2 }}
                        label="Time"
                        defaultValue={time}
                        disabled variant="outlined"
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', mb: 2 }}
                        label="Date"
                        defaultValue={date.toDateString()}
                        disabled variant="outlined"
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <Button type="submit" sx={{ mt: 3, background: '#14D1CC', ml: 'auto' }} variant="contained">BOOK APPOINTMENT</Button>
                </form>
            </Box>
        </Modal >
    );
};

export default BookingModal;