import { Box, Typography } from '@mui/material'
import React from 'react'

const WellnessIntro = () => {
    return (
        <Box paddingTop='100px' position='relative'>
            <img src='/images/wellness/wellness_banner.png' width='100%' />
            <Box position='absolute' top='50%' left='10%' width='50%'>

                <Box display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}>
                    <Typography fontSize='48px' color='white' fontWeight='bold'>
                        Yoga & Meditation
                    </Typography>
                </Box>
                <Box display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
                    <Typography fontSize='20px' color='white' fontWeight='bold'>
                        Yoga & Meditation
                    </Typography>
                </Box>

                <Box display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}>
                    <Typography fontSize='16px' fontWeight='500' color='white'>
                        "Discover Inner Peace and Strength: Journey Through Yoga and Meditation."
                    </Typography>
                </Box>
                <Box display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}>
                    <Typography fontSize='10px' fontWeight='500' color='white'>
                        "Discover Inner Peace and Strength: Journey Through Yoga and Meditation."
                    </Typography>
                </Box>

                <Box>
                    <img src='/images/wellness/wellness_underline.png' width='100%' />
                </Box>
            </Box>
        </Box>
    )
}

export default WellnessIntro