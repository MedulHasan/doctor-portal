import { Container } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Information from '../Information/Information';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Treatment from '../Treatment/Treatment';

const Home = () => {
    return (
        <>
            <Navigation />
            <Container maxWidth="xl">
                <Banner />
                <Information />
                <Services />
                <Treatment />
                <AppointmentBanner />
                <Testimonial />
                <Blog />
            </Container>
        </>
    );
};

export default Home;