import React from 'react';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Button, Container, IconButton, Typography } from '@mui/material';

import chair from '../../../images/chair.png';
import bgimg from '../../../images//bg.png';
import { Box } from '@mui/system';
import { useAlert } from '../../../context/AlertMessage';

const bannerText = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left'
}

const bannerImg = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const bg = {
    background: `url(${bgimg})`,
    backgroundSize: 'cover',
    paddingBottom: '150px',
}

const Banner = () => {
    const { alertSuccessMessage,
        setAlertSuccessMessage } = useAlert();
    return (
        <Box sx={{ margin: '0 60px' }} style={bg}>
            {alertSuccessMessage &&
                <Alert
                    severity="success"
                    style={{ marginTop: '-50px', marginBottom: '20px' }}
                >
                    <Typography>User Login Successfully!</Typography>
                    <IconButton
                        aria-label="close"
                        onClick={() => setAlertSuccessMessage(false)}
                        sx={{
                            position: 'absolute',
                            right: 100,
                            top: 78,
                            mr: 1,
                            mt: 1
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Alert>}
            <Grid container spacing={20}>
                <Grid item xs={12} md={6} style={bannerText} >
                    <Typography variant="h3">
                        Your New Smile <br />
                        Starts Here
                    </Typography>
                    <Typography variant="p" sx={{ my: 3 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt vero vitae suscipit, omnis reprehenderit.
                    </Typography>
                    <Button sx={{ mt: 3, background: '#14D1CC' }} style={{ width: '170px', height: '45px' }} variant="contained">Get Appointment</Button>
                </Grid>
                <Grid item xs={12} md={6} style={bannerImg}>
                    <img src={chair} style={{ width: '550px' }} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;