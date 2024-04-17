import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Images from '../../../../Constants/constant'

const IntroImage = () => {
    return (
        <Box paddingTop='100px'>
            <Box position='relative' display={{xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block'}}>
                <img src={Images.rudraksha_banner} width='100%' />
                <Box position='absolute' top='30%' left='5%' width='30%'>
                    <Box>
                        <Typography fontSize='48px' fontWeight='bold' color='white'>Rudraksha</Typography>
                        <Typography fontSize='20px' color='white'>"Unlock the Power Within: Rudraksha - Your Path to Harmony and Strength."</Typography>
                    </Box>
                    <Box>
                        <img src={Images.rudraksha_text} width='100%' />
                    </Box>
                </Box>
            </Box>
            <Box position='relative' display={{xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none'}}>
                <img src={Images.rudraksha_banner} width='100%' />
                <Box position='absolute' top='30%' left='5%' width='30%'>
                    <Box>
                        <Typography fontSize='36px' fontWeight='bold' color='white'>Rudraksha</Typography>
                        <Typography fontSize='14px' color='white'>"Unlock the Power Within: Rudraksha - Your Path to Harmony and Strength."</Typography>
                    </Box>
                    <Box>
                        <img src={Images.rudraksha_text} width='100%' />
                    </Box>
                </Box>
            </Box>
            <Box position='relative' display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
                <img src={Images.rudraksha_banner} width='100%' />
                <Box position='absolute' top='30%' left='5%' width='35%'>
                    <Box>
                        <Typography fontSize='12px' fontWeight='bold' color='white'>Rudraksha</Typography>
                        <Typography fontSize='7px' color='white'>"Unlock the Power Within: Rudraksha - Your Path to Harmony and Strength."</Typography>
                    </Box>
                    <Box>
                        <img src={Images.rudraksha_text} width='100%' />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default IntroImage
