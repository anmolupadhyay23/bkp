import { Box, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../../Layout/NewNavbar'
import YogaintroImage from '../../../Widgets/yogawidgets/yogaintroimage'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import Images from '../../../../Constants/constant'


const Ardhamatsyendrasana = () => {
    const items = ['Begin standing at the top of your mat with your feet about 3-4 feet apart, facing forward.',
        "Turn your right foot out 90 degrees so it's parallel to the short edge of the mat. Keep your left foot slightly turned inward.",
        'Inhale and extend your arms out to the sides, parallel to the ground, palms facing down.',
        'Exhale and extend your torso to the right, bending at the hip, reaching your right hand towards your right ankle or shin.',
        'Keep your chest open and your left arm reaching up towards the sky, aligning with your shoulders.',
        'Keep both legs straight and engage your thigh muscles. Your right knee cap should be aligned with the center of your right ankle.',
        "Gaze either towards your left fingertips or towards the sky if it's comfortable for your neck.",
        'Hold the pose for 30 seconds to a minute while breathing deeply.',
        'To release, inhale and press firmly into your feet as you come back up to standing. Repeat on the other side.',
        'Remember to keep the body in one plane, avoid collapsing into the side body, and maintain a strong connection to the ground with your feet throughout the pose.',];
  return (
    <Box>
        <NewNavbar/>
        <YogaintroImage imageSrc={Images.ardhamatsyendrasana1} 
        title='Ardha Matsyendrasana'
        subtitle1='“Ardha Matsyendrasana: Seated twist yoga posture for  '
        subtitle2='spine flexibility and digestion.”'
        styles={[
            { display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, textWidth: '45%', titleFontSize: '48px', subtitleFontSize: '20px' },
            { display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '36px', subtitleFontSize: '14px' },
            { display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '12px', subtitleFontSize: '7px' }
        ]}
        ></YogaintroImage>

        <Box marginLeft='20%' marginRight='20%' marginTop='6%' marginBottom='5%'>

          {/* Asana Title*/}
       <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} color='black' fontSize='24px'>Ardha Matsyendrasana:  Half Lord of the Fishes Pose</Typography>
        <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} color='black' fontSize='14px'>Ardha Matsyendrasana:  Half Lord of the Fishes Pose</Typography>


        {/* Asana Info*/}
        <Typography variant="body1" paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>
        Ardha Matsyendrasana, or Half Lord of the Fishes Pose, is a seated yoga posture that involves twisting the spine to improve flexibility and digestion.
            </Typography>

<Typography variant="body1" fontSize='11px' paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}}>
Ardha Matsyendrasana, or Half Lord of the Fishes Pose, is a seated yoga posture that involves twisting the spine to improve flexibility and digestion.
</Typography>



<Typography color='black' fontSize='24px' paddingBottom='30px' sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>How to Practice?</Typography>
<Typography color='black' fontSize='14px' paddingBottom='30px' sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}}>How to Practice?</Typography>
   
<ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '20px', paddingBottom:'50px' }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} variant="body1">{item}</Typography>
              <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} fontSize='12px'>{item}</Typography>
            </li>
          ))}
        </ul>

        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} color='black' fontSize='24px' paddingBottom='30px'>Benefits</Typography>
        <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} color='black' fontSize='14px' paddingBottom='30px'>Benefits</Typography>


         {/*Benefit Image*/}
        <Box sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>
        <img  src={Images.ardhamatsyendrasanabenefits} width='100%' height='50%'></img>
        </Box>
          

          <Box sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}}>
          <img src={Images.ardhamatsyendrasanabenefits} width='350h' height='70%'></img>
          </Box>
        
        
    </Box>


    
</Box>
<Footer/>
        
       
    </Box>
  )
}

export default Ardhamatsyendrasana











