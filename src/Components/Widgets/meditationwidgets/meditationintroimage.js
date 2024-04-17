import React from 'react';
import { Box, Typography } from '@mui/material';

const MeditationintroImage = ({ imageSrc, title, styles }) => {
    return (
        <Box paddingTop='100px'>
            {styles.map((style, index) => (
                <Box key={index} position='relative' display={style.display}>
                    <img src={imageSrc} width='100%'/>
                    <Box position='absolute' top='36%' left='7%' width={style.textWidth}>
                        <Box>
                            <Typography fontSize={style.titleFontSize} fontWeight='bold' color='white' fontFamily='TimesNewRoman'>{title}</Typography>
                            <img src='images/meditation/meditationintrotext.png' width='40%' height='50%'></img>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default MeditationintroImage;
