import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Images from '../../../Constants/constant'

const ServicesIntro = () => {
    return (
        <Box paddingTop='100px' >
            {/* For lg and xl */}
            <Grid xs={12} height='54vh' display={{xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}}>
                <Paper sx={{ backgroundSize: 'cover', backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Four_services.png?alt=media&token=a43e6607-68f1-4c08-84ee-0c816dd497de')", backgroundPosition: 'center', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontWeight='bold' fontSize='96px' style={{
                        WebkitBackgroundClip: 'text',
                        color: '#f8f7f4',
                        display: 'inline-block',
                    }}>Our Services</Typography>
                </Paper>
            </Grid>
            {/* For md */}
            <Grid xs={12} height='32vh' display={{xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none'}}>
                <Paper sx={{ backgroundSize: 'cover', backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Four_services.png?alt=media&token=a43e6607-68f1-4c08-84ee-0c816dd497de')", backgroundPosition: 'center', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontWeight='bold' fontSize='70px' style={{
                        WebkitBackgroundClip: 'text',
                        color: '#f8f7f4',
                        display: 'inline-block',
                    }}>Our Services</Typography>
                </Paper>
            </Grid>
            {/* For sm and xs */}
            <Grid xs={12} height='22vh' display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
                <Paper sx={{ backgroundSize: 'cover', backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Four_services.png?alt=media&token=a43e6607-68f1-4c08-84ee-0c816dd497de')", backgroundPosition: 'center', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontWeight='bold' fontSize='40px' style={{
                        WebkitBackgroundClip: 'text',
                        color: '#f8f7f4',
                        display: 'inline-block',
                    }}>Our Services</Typography>
                </Paper>
            </Grid>

            {/* For lg and xl */}
            <Grid xs={12} marginRight='30%' marginLeft='30%' marginTop='3%' display={{xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontSize='48px' fontWeight='bold' textAlign='center'>
                        Get benefit of services we are offering
                    </Typography>
                </Box>
                <Box>
                    <img src={Images.services_underline} height='auto' width='100%' />
                </Box>
            </Grid>
            {/* For md */}
            <Grid xs={12} marginRight='30%' marginLeft='30%' marginTop='3%' display={{xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none'}}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontSize='32px' fontWeight='bold' textAlign='center'>
                        Get benefit of services we are offering
                    </Typography>
                </Box>
                <Box>
                    <img src={Images.services_underline} height='auto' width='100%' />
                </Box>
            </Grid>
            {/* For xs and sm */}
            <Grid xs={12} marginRight='30%' marginLeft='30%' marginTop='3%' display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography fontSize='13px' fontWeight='bold' textAlign='center'>
                        Get benefit of services we are offering
                    </Typography>
                </Box>
                <Box>
                    <img src={Images.services_underline} height='auto' width='100%' />
                </Box>
            </Grid>
        </Box>
    )
}

export default ServicesIntro
