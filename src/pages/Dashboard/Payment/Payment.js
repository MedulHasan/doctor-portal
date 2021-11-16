import { CircularProgress } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvuqtDIBQXTyseWr2DBmTUEHU92dHY7QtS5XvXUDxRVJynMuLObBvZ4kn6pVSGqOglelW0HBDnVcO7nopGQ75W700RHLvvfFJ');

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        fetch(`https://doctor-portal-medul.herokuapp.com/appointment/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2>{appointment.patientName} please pay for {appointment.serviceName} service</h2>
            <h4>Your Bill - $ {appointment.price}</h4>
            {! appointment.price ? <CircularProgress /> : <Elements stripe={stripePromise}>
                <CheckoutForm appointment={appointment} />
            </Elements>}
        </div>
    );
};

export default Payment;