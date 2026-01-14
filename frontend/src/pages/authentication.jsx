// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { AuthContext } from '../contexts/AuthContext';
// import { Snackbar } from '@mui/material';



// // TODO remove, this demo shouldn't need to reset the theme.

// const defaultTheme = createTheme();

// export default function Authentication() {

    

//     const [username, setUsername] = React.useState();
//     const [password, setPassword] = React.useState();
//     const [name, setName] = React.useState();
//     const [error, setError] = React.useState();
//     const [message, setMessage] = React.useState();


//     const [formState, setFormState] = React.useState(0);

//     const [open, setOpen] = React.useState(false)


//     const { handleRegister, handleLogin } = React.useContext(AuthContext);

//     let handleAuth = async () => {
//         try {
//             if (formState === 0) {

//                 let result = await handleLogin(username, password)


//             }
//             if (formState === 1) {
//                 let result = await handleRegister(name, username, password);
//                 console.log(result);
//                 setUsername("");
//                 setMessage(result);
//                 setOpen(true);
//                 setError("")
//                 setFormState(0)
//                 setPassword("")
//             }
//         } catch (err) {

//             console.log(err);
//             let message = (err.response.data.message);
//             setError(message);
//         }
//     }


//     return (
//         <ThemeProvider theme={defaultTheme}>
//             <Grid container component="main" sx={{ height: '100vh' }}>
//                 <CssBaseline />
//                 <Grid
//                     item
//                     xs={false}
//                     sm={4}
//                     md={7}
//                     sx={{
//                         backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundColor: (t) =>
//                             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 />
//                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                     <Box
//                         sx={{
//                             my: 8,
//                             mx: 4,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                             <LockOutlinedIcon />
//                         </Avatar>


//                         <div>
//                             <Button variant={formState === 0 ? "contained" : ""} onClick={() => { setFormState(0) }}>
//                                 Sign In
//                             </Button>
//                             <Button variant={formState === 1 ? "contained" : ""} onClick={() => { setFormState(1) }}>
//                                 Sign Up
//                             </Button>
//                         </div>

//                         <Box component="form" noValidate sx={{ mt: 1 }}>
//                             {formState === 1 ? <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="username"
//                                 label="Full Name"
//                                 name="username"
//                                 value={name}
//                                 autoFocus
//                                 onChange={(e) => setName(e.target.value)}
//                             /> : <></>}

//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 id="username"
//                                 label="Username"
//                                 name="username"
//                                 value={username}
//                                 autoFocus
//                                 onChange={(e) => setUsername(e.target.value)}

//                             />
//                             <TextField
//                                 margin="normal"
//                                 required
//                                 fullWidth
//                                 name="password"
//                                 label="Password"
//                                 value={password}
//                                 type="password"
//                                 onChange={(e) => setPassword(e.target.value)}

//                                 id="password"
//                             />

//                             <p style={{ color: "red" }}>{error}</p>

//                             <Button
//                                 type="button"
//                                 fullWidth
//                                 variant="contained"
//                                 sx={{ mt: 3, mb: 2 }}
//                                 onClick={handleAuth}
//                             >
//                                 {formState === 0 ? "Login " : "Register"}
//                             </Button>

//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>

//             <Snackbar

//                 open={open}
//                 autoHideDuration={4000}
//                 message={message}
//             />

//         </ThemeProvider>
//     );
// }
import * as React from 'react';
import { 
    Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, 
    Typography, ThemeProvider, createTheme, Snackbar, IconButton 
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { AuthContext } from '../contexts/AuthContext';

// Creating a custom theme to match the UrRoomsy brand colors
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FF9839', // UrRoomsy Orange
        },
        background: {
            default: '#0f172a',
            paper: '#1e293b',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formState, setFormState] = React.useState(0); // 0 for Login, 1 for Register
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                await handleLogin(username, password);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("");
                setFormState(0);
                setPassword("");
            }
        } catch (err) {
            console.log(err);
            let msg = (err.response?.data?.message) || "An error occurred";
            setError(msg);
        }
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Grid container component="main" sx={{ height: '100vh', bgcolor: '#0f172a' }}>
                <CssBaseline />
                
                {/* Visual Side: Branded Image/Gradient */}
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        position: 'relative',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(255, 152, 57, 0.2) 100%)',
                        }
                    }}
                >
                    <Box sx={{ 
                        position: 'relative', 
                        zIndex: 1, 
                        height: '100%', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        px: 10 
                    }}>
                        <Typography variant="h2" sx={{ fontWeight: 800, color: 'white', mb: 2 }}>
                            UrRoomsy
                        </Typography>
                        <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: '500px' }}>
                            Experience seamless connections with our premium video conferencing platform.
                        </Typography>
                    </Box>
                </Grid>

                {/* Form Side */}
                <Grid item xs={12} sm={8} md={5} component={Box} sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#0f172a'
                }}>
                    <Paper elevation={0} sx={{ 
                        p: 4, 
                        width: '100%', 
                        maxWidth: '450px', 
                        bgcolor: 'transparent',
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar sx={{ m: 1, bgcolor: '#FF9839', width: 56, height: 56 }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            
                            <Typography component="h1" variant="h4" sx={{ fontWeight: 700, mt: 2, mb: 1 }}>
                                {formState === 0 ? "Welcome Back" : "Create Account"}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#94a3b8', mb: 4 }}>
                                {formState === 0 ? "Enter your details to access your rooms." : "Join Khushi's UrRoomsy today."}
                            </Typography>

                            {/* Switcher Buttons */}
                            <Box sx={{ 
                                bgcolor: 'rgba(255,255,255,0.05)', 
                                p: 0.5, 
                                borderRadius: '12px', 
                                mb: 4,
                                display: 'flex',
                                width: '100%'
                            }}>
                                <Button 
                                    fullWidth 
                                    onClick={() => setFormState(0)}
                                    sx={{ 
                                        borderRadius: '10px',
                                        bgcolor: formState === 0 ? '#1e293b' : 'transparent',
                                        color: formState === 0 ? '#FF9839' : '#94a3b8',
                                        boxShadow: formState === 0 ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
                                        '&:hover': { bgcolor: formState === 0 ? '#1e293b' : 'rgba(255,255,255,0.05)' }
                                    }}
                                >
                                    Sign In
                                </Button>
                                <Button 
                                    fullWidth 
                                    onClick={() => setFormState(1)}
                                    sx={{ 
                                        borderRadius: '10px',
                                        bgcolor: formState === 1 ? '#1e293b' : 'transparent',
                                        color: formState === 1 ? '#FF9839' : '#94a3b8',
                                        boxShadow: formState === 1 ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
                                        '&:hover': { bgcolor: formState === 1 ? '#1e293b' : 'rgba(255,255,255,0.05)' }
                                    }}
                                >
                                    Sign Up
                                </Button>
                            </Box>

                            <Box component="form" noValidate sx={{ width: '100%' }}>
                                {formState === 1 && (
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        label="Full Name"
                                        value={name}
                                        autoFocus
                                        onChange={(e) => setName(e.target.value)}
                                        sx={{ mb: 2 }}
                                    />
                                )}

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                                
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    value={password}
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{ mb: 1 }}
                                />

                                {error && (
                                    <Typography variant="body2" sx={{ color: '#f87171', mt: 1, textAlign: 'center' }}>
                                        {error}
                                    </Typography>
                                )}

                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    onClick={handleAuth}
                                    sx={{ 
                                        mt: 4, 
                                        mb: 2, 
                                        py: 1.5, 
                                        fontSize: '1rem', 
                                        fontWeight: 'bold',
                                        borderRadius: '12px',
                                        textTransform: 'none',
                                        boxShadow: '0 10px 20px rgba(255, 152, 57, 0.2)'
                                    }}
                                >
                                    {formState === 0 ? "Login to UrRoomsy" : "Create Account"}
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={() => setOpen(false)}
                message={message}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </ThemeProvider>
    );
}