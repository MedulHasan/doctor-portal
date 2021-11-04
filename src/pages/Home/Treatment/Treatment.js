import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import treatment from '../../../images/treatment.png';

const treatmentText = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
}

const Treatment = () => {
    return (
        // <Container sx={{ my: 10 }}>
        <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
                <img src={treatment} style={{ width: '450px' }} alt="" />
            </Grid>
            <Grid item xs={12} md={6} style={treatmentText} >
                <Typography variant="h3">
                    Exceptional Dental <br />
                    Care, on Your Terms
                </Typography>
                <Typography variant="p" sx={{ my: 3, color: '#AEAEAE', lineHeight: 1.5 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus quis officia corrupti amet autem eius, ipsum repellendus eum. Inventore, culpa aspernatur officiis ea repudiandae debitis tenetur vitae qui eius quas odio nobis illo sapiente ut delectus cumque cum esse possimus, excepturi ipsam nesciunt ad molestiae quia? Error nesciunt sit ullam voluptas aperiam vitae incidunt culpa, nulla quibusdam quasi exercitationem ea libero ipsam rem consequatur voluptatibus corrupti quaerat temporibus nostrum optio? Similique fuga repudiandae, nisi sapiente at molestias dolores eligendi quia ipsam. Magni corporis quibusdam, perspiciatis voluptas quia eum quidem nam? Tenetur vero repellendus iste distinctio, recusandae voluptas placeat enim?
                </Typography>
                <Button sx={{ mt: 3, background: '#14D1CC' }} style={{ width: '170px', height: '45px' }} variant="contained">Learn More</Button>
            </Grid>
        </Grid>
        // </Container>
    );
};

export default Treatment;