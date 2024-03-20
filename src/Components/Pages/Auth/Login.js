import React, { useState } from 'react'
import { Box, Grid, InputAdornment, TextField, Typography, Checkbox, IconButton, Button } from '@mui/material'
import './../../../Styles/Login.css'
import { Visibility, Google } from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../../Context/authContext'
import GoogleAuth from './GoogleAuth'

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    const [eye, setEye] = useState(true);

    const login_user = async () => {
        try {
            const res = await axios.post(
                "http://localhost:8000/login",
                {
                    email: `${user}`,
                    password: `${password}`,
                },
                {
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                }
            );

            if (res.status === 200) {

                setAuth({
                    ...auth,
                    userId: res.data._id,
                    token: res.data.token,
                    name: res.data.name,
                    email: res.data.email,
                    address: res.data.address,
                    phone: res.data.phone
                });

                // SAVE in Local Storage
                localStorage.setItem('auth', JSON.stringify(res.data));
                console.log(res.data);

                navigate('/');
                alert('User exists');
            }

        } catch (e) {
            console.log("ERROR: SOMETING WENT WRONG");
            alert('User does not exist');
        }
    }

    return (
        <Box>
            {/* For lg and xl */}
            <Grid container display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}>
                <Grid item md={6} height='100vh'>
                    <Box height='100%' sx={{ backgroundImage: "url('/images/auth/login_image.png')", backgroundSize: 'cover', }}>
                        <Box marginLeft='7%' marginRight='7%' border='1px solid transparent'>
                            <Typography color='white' fontSize='32px' fontWeight='bold' marginTop='80%'>"Divine Connection Awaits: Log in for Seamless Online Prasad and Puja Experience!"</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={6} sx={{ backgroundImage: "url('/images/auth/login_background.png')", backgroundSize: 'cover' }}>
                    <Box display='flex' alignItems='center' marginLeft='5%' marginTop='5%'>
                        <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
                        <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' marginTop='5%'>
                        <Typography fontSize='40px'>Welcome back!</Typography>
                        <Typography fontSize='14px'>Enter your log in details</Typography>
                    </Box>
                    <Box marginLeft='15%' marginRight='15%' marginTop='5%'>
                        <Box>
                            <TextField placeholder='Username' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '3%' }} className='text-field-auth' value={user} onChange={(event) => setUser(event.target.value)}></TextField>
                            <TextField type={!eye ? 'text' : 'password'} placeholder='Password' fullWidth='true' InputProps={{ endAdornment: (<InputAdornment position='end'><IconButton onClick={() => setEye(!eye)}><Visibility style={{ color: '#f24e1e' }} /></IconButton></InputAdornment>) }} sx={{ border: 'none', "& fieldset": { border: 'none' }, }} className='text-field-auth' value={password} onChange={(event) => setPassword(event.target.value)}></TextField>
                        </Box>
                        <Box display='flex' justifyContent='space-between' marginTop='3%' marginBottom='3%'>
                            <Box display='flex' alignItems='center'>
                                <Checkbox title='Remember me' defaultChecked style={{ color: '#f24e1e' }}></Checkbox>
                                <Typography>Remember me</Typography>
                            </Box>
                            <IconButton>
                                <Typography onClick={() => { }} style={{ textDecoration: 'underline', cursor: 'pointer' }} >Forgot Password</Typography>
                            </IconButton>
                        </Box>
                        <Box>
                            <Box marginBottom='4%'>
                                <Button onClick={login_user} style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '20px', textTransform: 'none' }}>
                                    <Typography fontWeight='bold'>Log In</Typography>
                                </Button>
                            </Box>

                            <Box marginBottom='4%' display='flex' alignItems='center'>
                                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
                                <Typography>OR</Typography>
                                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
                            </Box>

                            {/* <Button style={{ backgroundColor: 'transparent', width: '100%', borderRadius: '20px', textTransform: 'none', border: '1px solid black' }}>
                                <IconButton>
                                    <Google />
                                </IconButton>

                                <Typography color='black'>Log in with Google</Typography>
                            </Button> */}
                            <Box display='flex' justifyContent='center'>
                                <GoogleAuth />
                            </Box>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='center' marginTop='3%'>
                            <Typography>Don't have an account?</Typography>
                            <IconButton>
                                <NavLink to="/create-account" style={{ textDecoration: 'none' }}>
                                    <Typography onClick={() => { }} style={{ color: '#f24e1e', cursor: 'pointer' }} >Sign Up</Typography>
                                </NavLink>
                            </IconButton>
                        </Box>

                    </Box>
                </Grid>
            </Grid>

            {/* For xs and sm */}
            <Grid container display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                <Grid item md={12} height='100vh' sx={{ backgroundImage: "url('/images/auth/login_background.png')", backgroundSize: 'cover' }}>
                    <Box display='flex' alignItems='center' marginLeft='7%' paddingTop='7%'>
                        <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
                        <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' marginTop='5%'>
                        <Typography fontSize='40px'>Welcome back!</Typography>
                        <Typography fontSize='14px'>Enter your log in details</Typography>
                    </Box>
                    <Box marginLeft='5%' marginRight='5%' marginTop='5%'>
                        <Box>
                            <TextField placeholder='Username' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '7%' }} className='text-field-auth'></TextField>
                            <TextField type={!eye ? 'text' : 'password'} placeholder='Password' fullWidth='true' InputProps={{ endAdornment: (<InputAdornment position='end'><IconButton onClick={() => setEye(!eye)}><Visibility style={{ color: '#f24e1e' }} /></IconButton></InputAdornment>) }} sx={{ border: 'none', "& fieldset": { border: 'none' }, }} className='text-field-auth' value={password} onChange={(event) => setPassword(event.target.value)}></TextField>
                        </Box>
                        <Box display='flex' justifyContent='space-between' marginTop='5%' marginBottom='7%'>
                            <Box display='flex' alignItems='center'>
                                <Checkbox title='Remember me' defaultChecked style={{ color: '#f24e1e' }}></Checkbox>
                                <Typography>Remember me</Typography>
                            </Box>
                            <IconButton>
                                <Typography onClick={() => { }} style={{ textDecoration: 'underline', cursor: 'pointer' }} >Forgot Password</Typography>
                            </IconButton>
                        </Box>
                        <Box>
                            <Box marginBottom='7%'>
                                <Button onClick={login_user} style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '20px', textTransform: 'none' }}>
                                    <Typography fontWeight='bold'>Log In</Typography>
                                </Button>
                            </Box>

                            <Box marginBottom='7%' display='flex' alignItems='center'>
                                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
                                <Typography>OR</Typography>
                                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
                            </Box>

                            <Button style={{ backgroundColor: 'transparent', width: '100%', borderRadius: '20px', textTransform: 'none', border: '1px solid black' }}>

                                <Typography color='black'>Log in with Google</Typography>
                            </Button>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='center' marginTop='7%'>
                            <Typography>Don't have an account?</Typography>
                            <IconButton>
                                <NavLink to="/create-account">
                                    <Typography onClick={() => { }} style={{ color: '#f24e1e', cursor: 'pointer' }} >Sign Up</Typography>
                                </NavLink>
                            </IconButton>
                        </Box>

                    </Box>
                </Grid>
            </Grid>

            {/* For md */}
            <Grid container display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }}>
                <Grid item md={12} height='100vh' sx={{ backgroundImage: "url('/images/auth/login_background.png')", backgroundSize: 'cover' }}>
                    <Box display='flex' alignItems='center' marginLeft='7%' paddingTop='7%'>
                        <Box sx={{ width: 58, height: 62 }} component="img" alt="Cart" src="/images/logo.png" />
                        <Typography className='nav-logo-text'>भगवान का प्रसाद</Typography>
                    </Box>
                    <Box display='flex' flexDirection='column' alignItems='center' marginTop='5%' marginBottom='10%'>
                        <Typography fontSize='48px'>Welcome back!</Typography>
                        <Typography fontSize='20px'>Enter your log in details</Typography>
                    </Box>
                    <Box marginLeft='8%' marginRight='8%' marginTop='5%'>
                        <Box>
                            <TextField placeholder='Username' fullWidth='true' sx={{ border: 'none', "& fieldset": { border: 'none' }, marginBottom: '7%' }} className='text-field-auth'></TextField>
                            <TextField type={!eye ? 'text' : 'password'} placeholder='Password' fullWidth='true' InputProps={{ endAdornment: (<InputAdornment position='end'><IconButton onClick={() => setEye(!eye)}><Visibility style={{ color: '#f24e1e' }} /></IconButton></InputAdornment>) }} sx={{ border: 'none', "& fieldset": { border: 'none' }, }} className='text-field-auth' value={password} onChange={(event) => setPassword(event.target.value)}></TextField>
                        </Box>
                        <Box display='flex' justifyContent='space-between' marginTop='5%' marginBottom='7%'>
                            <Box display='flex' alignItems='center'>
                                <Checkbox title='Remember me' defaultChecked style={{ color: '#f24e1e' }}></Checkbox>
                                <Typography>Remember me</Typography>
                            </Box>
                            <IconButton>
                                <Typography onClick={() => { }} style={{ textDecoration: 'underline', cursor: 'pointer' }} >Forgot Password</Typography>
                            </IconButton>
                        </Box>
                        <Box>
                            <Box marginBottom='7%'>
                                <Button onClick={login_user} style={{ backgroundColor: '#f24e1e', color: 'white', width: '100%', borderRadius: '20px', textTransform: 'none' }}>
                                    <Typography fontWeight='bold'>Log In</Typography>
                                </Button>
                            </Box>

                            <Box marginBottom='7%' display='flex' alignItems='center'>
                                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
                                <Typography>OR</Typography>
                                <Box sx={{ width: '50%', border: 'none', borderTop: '0.1px solid black', marginBottom: '2%' }} />
                            </Box>

                            <Button style={{ backgroundColor: 'transparent', width: '100%', borderRadius: '20px', textTransform: 'none', border: '1px solid black' }}>

                                <Typography color='black'>Log in with Google</Typography>
                            </Button>
                        </Box>
                        <Box display='flex' alignItems='center' justifyContent='center' marginTop='7%'>
                            <Typography>Don't have an account?</Typography>
                            <IconButton>
                                <NavLink to="/create-account">
                                    <Typography onClick={() => { }} style={{ color: '#f24e1e', cursor: 'pointer' }} >Sign Up</Typography>
                                </NavLink>
                            </IconButton>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login