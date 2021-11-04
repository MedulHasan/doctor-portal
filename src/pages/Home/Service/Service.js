import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Service = (props) => {
    // console.log(props.Service);
    const { name, description, img } = props.service
    return (
        <Grid item xs={2} sm={4} md={4}>
            <Container maxWidth="xl">
                <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, mt: 5 }}>
                    <CardMedia
                        component="img"
                        style={{ width: 'auto', height: '80px', margin: '0 auto' }}
                        image={img}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </Grid>
    );
};

export default Service;