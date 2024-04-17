import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Images from '../../../Constants/constant'

const WellnessCard = () => {
    return (
        <Box bgcolor='#f8f7f4' paddingTop='5%' paddingBottom='5%'>
            <Grid container>
                <Grid item xs={1} />
                <Grid item xs={4.5}>
                    <Box sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Fwellness_card.png?alt=media&token=ed72c179-1625-4dc8-8bf9-5c48b105b04a')", backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', paddingLeft: '10%', paddingTop: '5%', paddingBottom: '5%' }}>
                        <Box display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}>
                            <Box marginBottom='2%'>
                                <Typography color='white' fontSize='32px' fontWeight='bold'>
                                    Yoga
                                </Typography>
                            </Box>
                            <Box marginBottom='2%'>
                                <Typography color='white' fontSize='16px'>
                                    Yoga is a holistic practice that combines physical postures, breath control, meditation, and ethical principles to promote overall health and well-being, fostering harmony between body, mind, and spirit.
                                </Typography>
                            </Box>
                            <img src={Images.wellness_card_underline} width='50%' />
                        </Box>
                        <Box display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
                            <Box marginBottom='2%'>
                                <Typography color='white' fontSize='20px' fontWeight='bold'>
                                    Yoga
                                </Typography>
                            </Box>
                            <Box marginBottom='2%'>
                                <Typography color='white' fontSize='8px'>
                                    Yoga is a holistic practice that combines physical postures, breath control, meditation, and ethical principles to promote overall health and well-being, fostering harmony between body, mind, and spirit.
                                </Typography>
                            </Box>
                            <img src={Images.wellness_card_underline} width='50%' />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={4.5}>

                    <Box height='100%' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Fwellness_card.png?alt=media&token=ed72c179-1625-4dc8-8bf9-5c48b105b04a')", backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '10px', paddingLeft: '10%', paddingTop: '5%', paddingBottom: '5%' }}>
                        <Box display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}} >
                            <Box marginBottom='2%'>
                                <Typography color='white' fontSize='32px' fontWeight='bold'>
                                    Meditation
                                </Typography>
                            </Box>
                            <Box marginBottom='2%'>
                                <Typography color='white' fontSize='16px'>
                                    Meditation is a practice focused on calming the mind, enhancing self-awareness, and promoting inner peace.
                                </Typography>
                            </Box>
                            <img src={Images.wellness_card_underline} width='50%' />
                        </Box>
                        <Box display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}} >
                            <Box marginBottom='2%'>
                                <Typography color='white' fontSize='20px' fontWeight='bold'>
                                    Meditation
                                </Typography>
                            </Box>
                            <Box marginBottom='2%'>
                                <Typography color='white' fontSize='8px'>
                                    Meditation is a practice focused on calming the mind, enhancing self-awareness, and promoting inner peace.
                                </Typography>
                            </Box>
                            <img src={Images.wellness_card_underline} width='50%' />
                        </Box>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}

export default WellnessCard
