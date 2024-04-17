import React, { useState } from 'react'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { ArrowForward } from '@mui/icons-material'
import { NavLink } from 'react-router-dom';
import Images from '../../../Constants/constant';

const Services = () => {

    const [isPuja, setIsPuja] = useState('brightness(1)');
    const [isPrasad, setIsPrasad] = useState('brightness(1)');
    const [isAstrology, setIsAstrology] = useState('brightness(1)');
    const [isBtn, setIsBtn] = useState(false)

    return (
        <Box bgcolor='#f8f7f4'>
            { /* For larger screens than sm */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='30%' marginRight='30%' marginTop='2%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginRight: '1.5%', border: 'none' }}>
                    <img src={Images.services_sign} width='13px' height='16px' />
                </Paper>
                <Typography color='black' fontSize='24px' marginTop='1%'>Services</Typography>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginLeft: '1.5%', border: 'none' }}>
                    <img src={Images.services_sign} width='13px' height='16px' />
                </Paper>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%' marginTop='3%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginRight: '1.5%', border: 'none' }}>
                    <img src={Images.services_sign} width='11px' height='13px' />
                </Paper>
                <Typography color='black' fontSize='18px' marginTop='1%'>Services</Typography>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginLeft: '1.5%', border: 'none' }}>
                    <img src={Images.services_sign} width='11px' height='13px' />
                </Paper>
            </Box>

            { /* For larger screens than sm */}
            <Box display={{ xs: 'none', sm: 'none', md: 'block' }} sx={{ width: '5%', border: 'none', borderTop: '5px solid #f24e1e', marginBottom: '2%' }} mx='auto' />
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'block', sm: 'block', md: 'none' }} sx={{ width: '12%', border: 'none', borderTop: '3px solid #f24e1e', marginBottom: '2%' }} mx='auto' />

            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='32%' marginRight='32%'>
                <Typography color='black' fontSize='35px' marginTop='2.5%' textAlign='center'>Explore the services we are offering</Typography>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
                <Typography color='black' fontSize='15px' marginTop='2.5%' fontWeight='500' textAlign='center'>Explore the services we are offering</Typography>
            </Box>

            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='20%' marginRight='20%'>
                <Typography color='black' fontSize='16px' marginTop='2.5%' textAlign='center' fontWeight='500'>"Discover the range of services we provide and unlock new possibilities today!"</Typography>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='20%' marginRight='20%'>
                <Typography color='black' fontSize='12px' marginTop='2.5%' textAlign='center' fontWeight='350'>"Discover the range of services we provide and unlock new possibilities today!"</Typography>
            </Box>

            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='45%' marginRight='45%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '10%', marginRight: '1.5%', border: 'none' }}>
                    <img src={Images.om} width='86px' height='81px' />
                </Paper>
            </Box>
            { /* For sm and smaller screens */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='45%' marginRight='45%' marginTop='3%'>
                <Paper variant='outlined' style={{ background: 'transparent', marginTop: '10%', marginRight: '1.5%', border: 'none' }}>
                    <img src={Images.om} width='46px' height='41px' />
                </Paper>
            </Box>

            <Grid container>
                { /* For larger screens than md */}
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='4%' marginLeft='4%' >
                    <Box>
                        <Box>
                            <NavLink to='/service/puja'>
                                <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                    <img src={Images.services_puja1} style={{ filter: isPuja }} width='100%' onMouseOver={() => setIsPuja('brightness(0.4)')} onMouseOut={() => setIsPuja('brightness(1)')} />
                                </Paper>
                            </NavLink>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='black' fontSize='40px' marginTop='2.5%' textAlign='center'>Puja</Typography>
                            <Typography color='black' fontSize='32px' marginTop='3.5%' textAlign='center'>(पूजा)</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='4%' marginLeft='4%' marginTop='5%' >
                    <Box>
                        <Box>
                            <NavLink to='/service/prasad'>
                                <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                    <img src={Images.services_prasad1} style={{ filter: isPrasad }} width='100%' onMouseOver={() => setIsPrasad('brightness(0.4)')} onMouseOut={() => setIsPrasad('brightness(1)')} />
                                </Paper>
                            </NavLink>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='black' fontSize='40px' marginTop='2.5%' textAlign='center'>Prasad</Typography>
                            <Typography color='black' fontSize='32px' marginTop='3.5%' textAlign='center'>(प्रसाद)</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }} marginRight='4%' marginLeft='4%' >
                    <Box>
                        <Box>
                            <NavLink to='/service/astrology'>
                                <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                    <img src={Images.services_astrology1} style={{ filter: isAstrology }} width='100%' onMouseOver={() => setIsAstrology('brightness(0.4)')} onMouseOut={() => setIsAstrology('brightness(1)')} />
                                </Paper>
                            </NavLink>
                        </Box>
                        <Box display='flex' justifyContent='center' >
                            <Typography color='black' fontSize='40px' marginTop='2.5%' textAlign='center'>Astrology</Typography>
                            <Typography color='black' fontSize='32px' marginTop='3.5%' textAlign='center'>(ज्योतिष)</Typography>
                        </Box>
                    </Box>
                </Grid>

                { /* For sm and smaller screens */}
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='5%' marginLeft='5%' marginBottom='8%' marginTop='5%' >
                    <Box position='relative'>
                        <Box>
                            <NavLink to='/service/puja'>
                                <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                    <img src='/images/home/services_puja1.png' width='100%' />
                                </Paper>
                            </NavLink>
                        </Box>

                        <Box position='absolute' right='0%' top='10%' sx={{backgroundColor:'#f8f7f4', borderTopLeftRadius: '12px', borderBottomLeftRadius:'12px', paddingLeft:'15px', paddingRight:'7px'}}>
                            <Typography fontSize='16px' color='#F24E1E'>Puja(पूजा)</Typography>
                        </Box>
                        
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='5%' marginLeft='5%' marginBottom='8%' >
                    <Box position='relative'>
                        <Box>
                            <NavLink to='/service/puja'>
                                <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                    <img src='/images/home/services_prasad1.png' width='100%' />
                                </Paper>
                            </NavLink>
                            <Box position='absolute' left='0%' top='10%' sx={{backgroundColor:'#f8f7f4', borderTopRightRadius: '12px', borderBottomRightRadius:'12px', paddingRight:'15px', paddingLeft:'7px'}}>
                            <Typography fontSize='16px' color='#F24E1E'>Prasad(प्रसाद)</Typography>
                        </Box>
                        </Box>
                        
                    </Box>
                </Grid>
                <Grid item md={3} display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }} marginRight='5%' marginLeft='5%' marginBottom='8%' >
                    <Box position='relative'>
                        <Box>
                            <NavLink to='/service/puja'>
                                <Paper variant='outlined' style={{ background: 'transparent', border: 'none' }}>
                                    <img src='/images/home/services_astrology1.png' width='100%' />
                                </Paper>
                            </NavLink>

                            
                        </Box>
                        <Box position='absolute' right='0%' top='10%' sx={{backgroundColor:'#f8f7f4', borderTopLeftRadius: '12px', borderBottomLeftRadius:'12px', paddingLeft:'15px', paddingRight:'7px'}}>
                            <Typography fontSize='16px' color='#F24E1E'>Astrology(ज्योतिष)</Typography>
                        </Box>
                    </Box>
                </Grid>

            </Grid>

            { /* For larger screens than md */}
            <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} justifyContent='center' marginTop='3%' paddingBottom='2%'>
                <NavLink to='/our-services'>
                    <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: isBtn ? '#f24e1e' : 'transparent', color: isBtn ? 'white' : '#f24e1e', border: '1px solid #f24e1e', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none', boxShadow: isBtn ? '0px 2px 2px 2px rgba(0,0,0,0.15)' : 'none' }} onMouseOver={() => setIsBtn(true)} onMouseOut={() => setIsBtn(false)}>Get Started Now</Button>
                </NavLink>
            </Box>
            { /* For larger screens than md */}
            <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} justifyContent='center' marginTop='3%' paddingBottom='10%'>
                <NavLink to='/our-services'>
                    <Button variant='outlined' endIcon={<ArrowForward />} style={{ backgroundColor: 'transparent', color: '#f24e1e', border: '1px solid #f24e1e', borderRadius: '20px', marginRight: '10px', fontWeight: 'bold', textTransform: 'none' }} >Get Started Now</Button>
                </NavLink>
            </Box>

        </Box>
    )
}

export default Services
