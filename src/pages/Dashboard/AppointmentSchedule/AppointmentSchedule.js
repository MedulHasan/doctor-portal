import React from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import {Link} from 'react-router-dom';

const AppointmentSchedule = ({ appointments, date }) => {
    return (
        <div>
            <Box
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    margin: '5px 30px'
                }}
            >
                <Typography variant="h6" gutterBottom component="div">Appointments</Typography>
                <Typography component={'span'} variant="body2">{date.toLocaleDateString()}</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Schedule</TableCell>
                            <TableCell>Service</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            appointments.map(appointment =>
                                <TableRow
                                    key={appointment._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>
                                        {appointment.patientName}
                                    </TableCell>
                                    <TableCell>{appointment.time}</TableCell>
                                    <TableCell>{appointment.serviceName}</TableCell>
                                    <TableCell>
                                        {
                                            appointment.payment ? 'Paid' : <Link to={`/dashboard/payment/${appointment._id}`}><button>Pay</button></Link>
                                        }
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AppointmentSchedule;