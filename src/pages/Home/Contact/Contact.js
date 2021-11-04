import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import contactBg from '../../../images/bg.png';

const contact = {
    background: `url(${contactBg})`,
    backgroundPosition: 'left',
    backgroundColor: '#394052'
}

const Contact = () => {
    return (
        <Box sx={{ my: 10, px: 15, pb: 15, pt: 8 }} style={contact}>
            <Box>
                <Typography sx={{ fontSize: '22px', fontWeight: '400', color: '#5FC7C7' }}>
                    Contact Us
                </Typography>
                <Typography sx={{ fontSize: '48px', fontWeight: '400', mb: 4, color: '#fff' }}>
                    Always Contact with us
                </Typography>
            </Box>
            <Box style={{
                display: 'flex',
                flexDirection: 'column',
                width: '600px',
                rowGap: '15px',
                margin: '0 auto',
                backgroundColor: '#fff',
                padding: '15px',
                borderRadius: '5px'
            }}>
                <TextField size="small" label="Name" variant="outlined" />
                <TextField size="small" label="Email" variant="outlined" />
                <TextField
                    id="outlined-multiline-static"
                    label="Your Message"
                    multiline
                    rows={3}
                />
            </Box>
        </Box>
    );
};

export default Contact;