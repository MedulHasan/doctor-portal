import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import { AccessTime, LocationOn, PhoneInTalk } from '@mui/icons-material'

const Information = () => {
    return (
        <Box sx={{ marginTop: '-70px', mb: 5, mx: 10 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                    <Paper elevation={3} sx={{ bgcolor: '#1CC7C1' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '20px',
                            padding: '20px 30px',
                            color: '#ffffff'
                        }}>
                            <AccessTime sx={{
                                fontSize: '60px'
                            }} />
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="h6" sx={{ fontSize: '18px' }}>
                                    Opening Hours
                                </Typography>
                                <Typography variant="" sx={{ fontSize: '14px' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Paper elevation={3} sx={{ bgcolor: '#3A4256' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '20px',
                            padding: '20px 30px',
                            color: '#ffffff'
                        }}>
                            <LocationOn sx={{
                                fontSize: '60px'
                            }} />
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="h6" sx={{ fontSize: '18px' }}>
                                    Visit Our Location
                                </Typography>
                                <Typography variant="" sx={{ fontSize: '14px' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={4}>
                    <Paper elevation={3} sx={{ bgcolor: '#1CC7C1' }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            columnGap: '20px',
                            padding: '20px 30px',
                            color: '#ffffff'
                        }}>
                            <PhoneInTalk sx={{
                                fontSize: '60px'
                            }} />
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="h6" sx={{ fontSize: '18px' }}>
                                    Contact us Now
                                </Typography>
                                <Typography variant="" sx={{ fontSize: '14px' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Information;