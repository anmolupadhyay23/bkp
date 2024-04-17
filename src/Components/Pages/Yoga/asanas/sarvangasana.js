import { Box, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../../Layout/NewNavbar'
import YogaintroImage from '../../../Widgets/yogawidgets/yogaintroimage'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import Images from '../../../../Constants/constant'


const Sarvangasana = () => {
    const items = ['Begin by lying flat on your back with your arms alongside your body and palms facing down.',
      'Engage your core muscles as you lift your legs off the ground, bringing them up towards the sky.',
      'Use your hands to support your lower back as you lift your hips off the ground, bringing your torso into a vertical position.',
      'Support your back with your hands, keeping your elbows close together and your fingers pointing upwards.',
      'Straighten your legs towards the sky, stacking your hips over your shoulders and aligning your body in a straight line.',
      'Keep your neck long and your chin tucked into your chest, maintaining a steady gaze towards your toes.',
      'Hold the pose for a few breaths, gradually increasing the duration as you build strength and stability.',
      'To release the pose, slowly lower your legs back down to the ground, one vertebra at a time, and rest in Corpse Pose (Shavasana) for relaxation.'];
  return (
    <Box>
        <NewNavbar/>
        <YogaintroImage imageSrc={Images.sarvangasana1}
        title='Sarvangasana'
        subtitle1='“Sarvangasana is a yoga pose where you balance on'
        subtitle2='your shoulders, known as the "shoulder stand."'
        styles={[
            { display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, textWidth: '45%', titleFontSize: '48px', subtitleFontSize: '20px' },
            { display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '36px', subtitleFontSize: '14px' },
            { display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '12px', subtitleFontSize: '7px' }
        ]}
        ></YogaintroImage>

        <Box marginLeft='20%' marginRight='20%' marginTop='6%' marginBottom='5%'>

          {/* Asana Title*/}
       <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} color='black' fontSize='24px'>Sarvangasana: The Shoulder Stand Pose</Typography>
        <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} color='black' fontSize='14px'>Sarvangasana: The Shoulder Stand Pose</Typography>


        {/* Asana Info*/}
        <Typography variant="body1" paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>
        Sarvangasana, often referred to as the Shoulder Stand, is a foundational yoga pose that involves lifting the entire body up, supported by the shoulders. In this posture, the body forms a straight line from the shoulders to the toes, with the legs extended vertically upwards.
</Typography>

<Typography variant="body1" fontSize='11px' paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}}>
        Sarvangasana, often referred to as the Shoulder Stand, is a foundational yoga pose that involves lifting the entire body up, supported by the shoulders. In this posture, the body forms a straight line from the shoulders to the toes, with the legs extended vertically upwards.
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
        <img  src={Images.sarvangasanabenefits} width='100%' height='50%'></img>
        </Box>
          

          <Box sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}}>
          <img src={Images.sarvangasanabenefits} width='350h' height='70%'></img>
          </Box>
        
        
    </Box>


    
</Box>
<Footer/>
        
       
    </Box>
  )
}

export default Sarvangasana










