import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Images from '../../../Constants/constant'

const ShopsIntro = () => {

    const [isBuy, setIsBuy] = useState(false)

    return (
        <Box paddingTop='100px'>
            <Grid container>
                <Grid item xs={6}>
                    <img src={Images.shops_intro} width='100%' />
                </Grid>
                <Grid item xs={6} display='flex' alignItems='center' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Fshops_intro_background.png?alt=media&token=bc28ebfa-40cd-4e91-8c01-4947df1118b3')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <Box marginRight='15%' marginLeft='5%'>
                        {/* For md and large screens */}
                        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                            <Typography fontSize='36px'>Authentic Panchmukhi Rudraksha (8mm)</Typography>
                            <Typography fontSize='36px' fontWeight='bold'>Rs. 400 *</Typography>
                        </Box>
                        {/* For xs and sm */}
                        <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                            <Typography fontSize='12px'>Authentic Panchmukhi Rudraksha (8mm)</Typography>
                            <Typography fontSize='12px' fontWeight='bold'>Rs. 400 *</Typography>
                        </Box>

                        {/* For md and large screens */}
                        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                            <Button variant='outlined' style={{ backgroundColor: isBuy ? 'white' : '#f24e1e', color: isBuy ? '#f24e1e' : 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', width: '6rem', height: '2rem', textTransform: 'none' }} onMouseOver={() => setIsBuy(true)} onMouseOut={() => setIsBuy(false)}>Buy Now</Button>
                        </Box>
                        {/* For xs and sm */}
                        <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                            <Button variant='outlined' style={{ backgroundColor: isBuy ? 'white' : '#f24e1e', color: isBuy ? '#f24e1e' : 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', width: '3rem', height: '1rem', textTransform: 'none', fontSize: '7px' }} onMouseOver={() => setIsBuy(true)} onMouseOut={() => setIsBuy(false)}>Buy Now</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </Box >
    )
}

export default ShopsIntro
