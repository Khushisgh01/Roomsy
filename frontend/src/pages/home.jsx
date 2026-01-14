import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField, Box, Typography } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {
    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    const {addToUserHistory} = useContext(AuthContext);

    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#0f172a' }}>
            <div className="navBar">
                <Typography variant="h5" sx={{ color: "#FF9839", fontWeight: 'bold' }}>UrRoomsy</Typography>
                <div style={{ display: "flex", alignItems: "center", gap: '15px' }}>
                    <IconButton onClick={() => navigate("/history")} sx={{ color: 'white' }}>
                        <RestoreIcon />
                    </IconButton>
                    <Typography sx={{ color: 'white' }}>History</Typography>
                    <Button onClick={() => { localStorage.removeItem("token"); navigate("/auth"); }} sx={{ color: '#FF9839' }}>
                        Logout
                    </Button>
                </div>
            </div>

            <div className="meetContainer">
                <div className="mainActionCard">
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Welcome to UrRoomsy</Typography>
                    <Typography sx={{ color: '#94a3b8', mb: 4 }}>Premium Video Conferencing Redefined by Khushi</Typography>
                    
                    <Box sx={{ display: 'flex', gap: "10px", flexDirection: 'column' }}>
                        <TextField 
                            onChange={e => setMeetingCode(e.target.value)} 
                            label="Enter Meeting Code" 
                            variant="outlined" 
                            fullWidth
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    color: 'white',
                                    '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                                    '&:hover fieldset': { borderColor: '#FF9839' },
                                },
                                '& .MuiInputLabel-root': { color: '#94a3b8' }
                            }}
                        />
                        <Button 
                            onClick={handleJoinVideoCall} 
                            variant='contained' 
                            fullWidth
                            sx={{ bgcolor: '#FF9839', height: '56px', borderRadius: '8px', mt: 1 }}
                        >
                            Join Video Call
                        </Button>
                    </Box>
                    <img src='/logo3.png' alt="" style={{ width: '150px', marginTop: '30px', opacity: 0.8 }} />
                </div>
            </div>
        </Box>
    )
}

export default withAuth(HomeComponent)