import * as React from 'react';
import AppointmentSchedule from '../AppointmentSchedule/AppointmentSchedule';
import Calender from '../../Shared/Calender/Calender';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const DashboardHome = ({ date, setDate, appointments }) => {
    return (
        <div>
            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'left' }}>Appointments</Typography>
            <Grid container spacing={2} sx={{ p: 3 }}>
                <Grid item xs={12} lg={4}>
                    <Calender date={date} setDate={setDate} />
                </Grid>
                <Grid item xs={12} lg={8}>
                    <AppointmentSchedule appointments={appointments} date={date} />
                </Grid>
            </Grid>
        </div>
    );
};

export default DashboardHome;