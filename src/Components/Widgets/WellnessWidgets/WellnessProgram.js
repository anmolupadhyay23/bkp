import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const WellnessProgram = () => {
    return (
        <Box>
            <Box marginTop='2%'>
                <Typography fontSize='48px' display='flex' justifyContent='center'>
                    Our Program
                </Typography>
            </Box>
            <Box position='relative'>
                <img src='/images/wellness/wellness_ring.png' width='100%' style={{ marginTop: '10%' }} />
                <Grid container position='absolute' top='5%'>
                    <Grid item xs={1} />
                    <Grid item xs={4.5}>
                        <NavLink to='/yogamain' style={{ textDecoration: 'none' }}>
                            <Box display='flex' flexDirection='column' position='relative' sx={{ cursor: 'pointer' }}>
                                <img src='/images/wellness/wellness_yoga.png' width='100%' />
                                <img src='/images/wellness/wellness_yoga_underline.png' width='100%' />

                                <Box position='absolute' bottom='7%' left='10%' display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}>
                                    <Typography fontSize='32px' fontWeight='500' color='black'>
                                        Yoga
                                    </Typography>
                                </Box>
                                <Box position='absolute' bottom='4%' left='10%' display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
                                    <Typography fontSize='16px' fontWeight='500' color='black'>
                                        Yoga
                                    </Typography>
                                </Box>
                            </Box>
                        </NavLink>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item xs={4.5}>

                        <NavLink to='/meditation' style={{ textDecoration: 'none' }}>
                            <Box display='flex' flexDirection='column' position='relative'>
                                <img src='/images/wellness/wellness_meditation.png' width='100%' />
                                <img src='/images/wellness/wellness_meditation_underline.png' width='100%' />
                                <Box position='absolute' bottom='7%' right='10%' display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}>
                                    <Typography fontSize='32px' fontWeight='500' color='black'>
                                        Meditation
                                    </Typography>
                                </Box>
                                <Box position='absolute' bottom='4%' right='10%' display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
                                    <Typography fontSize='16px' fontWeight='500' color='black'>
                                        Meditation
                                    </Typography>
                                </Box>
                            </Box>
                        </NavLink>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default WellnessProgram
