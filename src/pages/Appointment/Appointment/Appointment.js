import { CircularProgress, Container } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvaileableAppointment/AvaileableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    // const { isLoading } = useAuth();
    // if (isLoading) { return <CircularProgress /> }
    return (
        <div>
            <Navigation />
            <Container maxWidth="xl">
                <AppointmentHeader date={date} setDate={setDate} />
                <AvailableAppointment date={date} />
            </Container>
        </div>
    );
};

export default Appointment;