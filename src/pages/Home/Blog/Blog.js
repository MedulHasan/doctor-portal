import React, { useEffect, useState } from 'react';
import { Box, CardMedia, Grid, Paper, Typography } from '@mui/material';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <Box sx={{ my: 10 }}>
            <Box>
                <Typography sx={{ fontSize: '22px', fontWeight: '400', color: '#5FC7C7' }}>
                    Our Blog
                </Typography>
                <Typography sx={{ fontSize: '48px', fontWeight: '500' }}>
                    From our Blog News
                </Typography>
            </Box>
            <Box sx={{ mx: 10, my: 10 }}>
                <Grid container spacing={3}>
                    {
                        blogs.map(blog =>
                            <Grid item xs={12} md={4} key={blog.id}>
                                <Paper elevation={2} sx={{ padding: '40px 20px', textAlign: 'left' }} >
                                    <Box style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: '60px', mr: 3 }}
                                            image={blog.img}
                                            alt="Paella dish"
                                        />
                                        <Box>
                                            <Typography variant="h5" sx={{ fontSize: '18px', fontWeight: '600' }}>{blog.name}</Typography>
                                            <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: '300' }}>{blog.date}</Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="h5" sx={{ fontSize: '28px', fontWeight: '500', my: 3 }}>{blog.title}</Typography>
                                    <Typography variant="h5" sx={{ fontSize: '18px', fontWeight: '300', color: '#B3B2B5' }}>{blog.body}</Typography>
                                </Paper>
                            </Grid>
                        )
                    }
                </Grid>
            </Box>
        </Box>
    );
};

export default Blog;