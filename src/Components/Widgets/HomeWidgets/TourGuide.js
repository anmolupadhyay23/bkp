import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Images from '../../../Constants/constant'


const TourGuide = () => {

    const [isKedarnath, setIsKedarnath] = useState('brightness(1)')
    const [isVrindavan, setIsVrindavan] = useState('brightness(1)')
    const [isSomnath, setIsSomnath] = useState('brightness(1)')
    const [isBtn, setIsBtn] = useState(false)

    return (
        <Box sx={{ backgroundImage: "url('https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/home/bn07fn0lgjlhzymvct8o')", backgroundSize: 'contain', backgroundPosition: 'center' }}>
            { /* For larger screens than sm */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='30%' marginRight='30%' paddingTop='2%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginRight: '1.5%', border: 'none' }}>
                    <img src={Images.services_sign} width='13px' height='16px' />
                </Paper>
                <Typography color='white' fontSize='24px' marginTop='1%'>PLAN YOUR TRIP</Typography>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginLeft: '1.5%', border: 'none' }}>
                    <img src={Images.services_sign} width='13px' height='16px' />
                </Paper>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' alignItems='center' marginLeft='25%' marginRight='25%' paddingTop='5%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginRight: '3%', border: 'none' }}>
                    <img src={Images.services_sign} width='11px' height='13px' />
                </Paper>
                <Typography color='rgba(255,255,255,0.6)' fontSize='13px' marginTop='1%'>PLAN YOUR TRIP</Typography>
                <Paper variant='outlined' style={{ background: 'transparent', marginLeft: '3%', border: 'none' }}>
                    <img src={Images.services_sign} width='11px' height='13px' />
                </Paper>
            </Box>

            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='32%' marginRight='32%'>
                <Typography color='#f8f7f4' fontSize='35px' marginTop='2.5%' textAlign='center'>Spiritual Tour Guide</Typography>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
                <Typography color='#f8f7f4' fontSize='16px' marginTop='2.5%' fontWeight='500' textAlign='center' style={{fontFamily:'ABeeZee'}}>Spiritual Tour Guide</Typography>
            </Box>

            { /* For larger screens than sm */}
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }} sx={{ width: '8%', border: 'none', borderTop: '5px solid #f24e1e', marginBottom: '5%' }} mx='auto' />
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'block', sm: 'block', md: 'none' }} sx={{ width: '12%', border: 'none', borderTop: '3px solid #f24e1e', marginBottom: '5%' }} mx='auto' />

            <Grid container>
                { /* For larger screens than md */}
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='4%' marginLeft='4%' >
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <NavLink to='/tour/kedarnath'>
                                    <img src={Images.tour_kedarnath} style={{ filter: isKedarnath }} width='100%' onMouseOver={() => setIsKedarnath('brightness(0.25)')} onMouseOut={() => setIsKedarnath('brightness(1)')} />
                                </NavLink>
                            </Paper>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='white' fontSize='40px' marginTop='2.5%' textAlign='center'>Kedarnath</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='4%' marginLeft='4%' marginTop='5%' >
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <NavLink to='/tour/vrindavan'>
                                    <img src={Images.tour_vrindavan} style={{ filter: isVrindavan }} width='100%' onMouseOver={() => setIsVrindavan('brightness(0.25)')} onMouseOut={() => setIsVrindavan('brightness(1)')} />
                                </NavLink>
                            </Paper>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='white' fontSize='40px' marginTop='2.5%' textAlign='center'>Vrindavan</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='4%' marginLeft='4%' >
                    <Box>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <NavLink to='/tour/somnath'>
                                    <img src={Images.tour_somnath} style={{ filter: isSomnath }} width='100%' onMouseOver={() => setIsSomnath('brightness(0.25)')} onMouseOut={() => setIsSomnath('brightness(1)')} />
                                </NavLink>
                            </Paper>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='white' fontSize='40px' marginTop='2.5%' textAlign='center'>Som Nath</Typography>
                        </Box>
                    </Box>
                </Grid>

                { /* For sm and smaller screens */}
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='5%' marginLeft='5%' marginBottom='8%' marginTop='5%' >
                    <Box position='relative'>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <NavLink to='/tour/kedarnath'>
                                    <img src='https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/home/ivcpg6ypuow78trc0mcl' width='100%' />
                                </NavLink>
                            </Paper>
                        </Box>
                        <Box position='absolute' left='0%' top='10%' sx={{backgroundColor:'rgba(255,255,255,0.4)', borderTopRightRadius: '12px', borderBottomRightRadius:'12px', paddingRight:'15px', paddingLeft:'7px'}}>
                            <Typography fontSize='16px' color='white'>Kedarnath</Typography>
                        </Box>
                        
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='5%' marginLeft='5%' marginBottom='8%' >
                    <Box position='relative'>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <NavLink to='/tour/vrindavan'>
                                    <img src='https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/home/yznrruwivmpnnmjcqfni' width='100%' />
                                </NavLink>
                            </Paper>
                        </Box>
                        <Box position='absolute' right='0%' top='10%' sx={{backgroundColor:'rgba(255,255,255,0.4)', borderTopLeftRadius: '12px', borderBottomLeftRadius:'12px', paddingLeft:'15px', paddingRight:'7px'}}>
                            <Typography fontSize='16px' color='white'>Vrindavan</Typography>
                        </Box>
                        
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='5%' marginLeft='5%' marginBottom='8%' >
                    <Box position='relative'>
                        <Box>
                            <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                <NavLink to='/tour/kedarnath'>
                                    <img src='https://res.cloudinary.com/dmfhdyvji/image/upload/f_auto,q_auto/v1/bkp/images/home/rdvtlr8wcdogb6dhnpx5' width='100%' />
                                </NavLink>
                            </Paper>
                        </Box>
                        
                        <Box position='absolute' left='0%' top='10%' sx={{backgroundColor:'rgba(255,255,255,0.4)', borderTopRightRadius: '12px', borderBottomRightRadius:'12px', paddingRight:'15px', paddingLeft:'7px'}}>
                            <Typography fontSize='16px' color='white'>Somnath</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} justifyContent='center' marginTop='3%' paddingBottom='2%'>
                <NavLink to='/tour'>
                    <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: isBtn ? '#f24e1e' : 'transparent', color: 'white', border: isBtn ? '1px solid #f24e1e' : '1px solid white', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none', boxShadow: isBtn ? '0px 2px 2px 2px rgba(0,0,0,0.15)' : 'none' }} onMouseOver={() => setIsBtn(true)} onMouseOut={() => setIsBtn(false)}>Explore</Button>
                </NavLink>
            </Box>
            { /* For larger screens than md */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent='center' marginTop='3%' paddingBottom='10%'>
                <NavLink to='/tour'>
                    <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none' }}>Explore</Button>
                </NavLink>
            </Box>
        </Box>
    )
}

export default TourGuide
