import React, { useContext, useEffect, useState } from 'react'
import withAuth from '../utils/withAuth'
import { AuthContext } from '../contexts/AuthContext'
import { Box, Card, CardContent, Typography, IconButton, Container, Grid } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate } from 'react-router-dom';
import "../App.css";

function History() {
    const { getHistory } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistory();
                setMeetings(history);
            } catch {
                // Handle error if needed
            }
        }
        fetchHistory();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#0f172a', py: 4 }}>
            <Container maxWidth="md">
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                    <IconButton 
                        onClick={() => navigate("/home")} 
                        sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.05)', mr: 2 }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
                        Meeting <span style={{ color: '#FF9839' }}>History</span>
                    </Typography>
                </Box>

                {meetings.length === 0 ? (
                    <Box sx={{ textAlign: 'center', mt: 10 }}>
                        <Typography sx={{ color: '#94a3b8' }}>No meeting history found.</Typography>
                    </Box>
                ) : (
                    <Grid container spacing={2}>
                        {meetings.map((e, i) => (
                            <Grid item xs={12} key={i}>
                                <Card sx={{ 
                                    bgcolor: 'rgba(30, 41, 59, 0.7)', 
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '16px'
                                }}>
                                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box>
                                            <Typography sx={{ color: '#FF9839', fontWeight: 'bold', mb: 0.5 }}>
                                                Code: {e.meetingCode}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', color: '#94a3b8' }}>
                                                <CalendarTodayIcon sx={{ fontSize: '0.9rem', mr: 1 }} />
                                                <Typography variant="body2">
                                                    {formatDate(e.date)}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontWeight: 'bold' }}>
                                            #{meetings.length - i}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    )
}

export default withAuth(History);