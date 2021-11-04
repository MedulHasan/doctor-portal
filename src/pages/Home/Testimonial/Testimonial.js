import React, { useEffect, useState } from 'react';
import { Box, CardMedia, Grid, Paper, Typography } from '@mui/material';

import testimonialBg from '../../../images/quote.png';

const test = {
    margin: '0 50px',
    textAlign: 'left',
    padding: '50px',
    background: `url(${testimonialBg})`,
    // opacity: '0.5',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
    position: 'relative',
    "&::before": {
        content: '',
        position: 'absolute',
        // backgroundColor: Fade("rgba(0, 0, 0, 0.12)", 0.5)
    }
}

const Testimonial = () => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        fetch('./testimonial.json')
            .then(res => res.json())
            .then(data => setComment(data))
    }, [])
    return (
        <Box>
            <Box style={test}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#65CCCC' }}>
                    TESTIMONIAL
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 400, fontSize: '40px' }}>
                    What's Our Patients <br />Says
                </Typography>
            </Box>
            <Box sx={{ mx: 10, mb: 10 }}>
                <Grid container spacing={3}>
                    {
                        comment.map(c =>
                            <Grid item xs={12} md={4} key={c.id}>
                                <Paper elevation={3} sx={{ p: 3, textAlign: 'left' }} >
                                    <Typography variant="" color="text.secondary">
                                        {c.body}
                                    </Typography>
                                    <Box style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '30px',
                                    }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '60px', mr: 3 }}
                                            image={c.img}
                                            alt="Paella dish"
                                        />
                                        <div>
                                            <Typography variant="h5" sx={{ fontSize: '18px', fontWeight: '600', color: '#5EC7C7' }}>{c.name}</Typography>
                                            <Typography variant="h6" sx={{ fontSize: '12px', fontWeight: '400' }}>{c.city}</Typography>
                                        </div>
                                    </Box>
                                </Paper>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default Testimonial;