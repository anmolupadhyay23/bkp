import { Box, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../../Layout/NewNavbar'
import YogaintroImage from '../../../Widgets/yogawidgets/yogaintroimage'
import Footer from '../../../Widgets/HomeWidgets/Footer'


const Bhujangasana = () => {
    const items = ['Start by lying flat on your stomach on the yoga mat, with your legs extended straight back and the tops of your feet pressing into the floor.',
        'Place your palms flat on the mat, slightly below your shoulders, with your elbows close to your body and pointing backward.',
        'As you inhale, gently press into your palms and slowly lift your chest and head off the mat, keeping your lower body and pelvis grounded.',
        'Use the strength of your back muscles, especially your lower back, to lift your upper body, while keeping your shoulders relaxed and away from your ears.',
        'Keep your gaze forward or slightly upward, without straining your neck, to maintain a comfortable position for your cervical spine.',
        'Hold the pose for 15-30 seconds, breathing deeply and maintaining a steady rhythm.',
        'To release the pose, exhale slowly as you lower your chest and head back down to the mat, returning to the starting position.',
        'Repeat the pose 2-3 times, gradually increasing the duration of the hold as you become more comfortable with the posture.',
        "After completing the pose, rest in Child's Pose (Balasana) or Corpse Pose (Savasana) to allow your body to relax and integrate the benefits of the posture.",];
  return (
    <Box>
        <NewNavbar/>
        <YogaintroImage imageSrc='images/yoga/asanasintroimages/bhujangasana.png' 
        title='Bhujangasana'
        subtitle1='“Bhujangasana, or Cobra Pose, is a yoga posture that '
        subtitle2='arches the upper body, stretching the spine and chest '
        subtitle3='while strengthening the back muscles.”'
        styles={[
            { display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, textWidth: '45%', titleFontSize: '48px', subtitleFontSize: '20px' },
            { display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '36px', subtitleFontSize: '14px' },
            { display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '12px', subtitleFontSize: '7px' }
        ]}
        ></YogaintroImage>

        <Box marginLeft='20%' marginRight='20%' marginTop='6%' marginBottom='5%'>

          {/* Asana Title*/}
       <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} color='black' fontSize='24px'>Bhujangasana:  Cobra Pose</Typography>
        <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} color='black' fontSize='14px'>Bhujangasana:  Cobra Pose</Typography>


        {/* Asana Info*/}
        <Typography variant="body1" paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>
        Bhujangasana, also known as Cobra Pose, is a yoga posture that involves arching the upper body while keeping the lower body grounded, stretching the spine and chest while strengthening the back muscles.
        </Typography>

<Typography variant="body1" fontSize='11px' paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}}>
Bhujangasana, also known as Cobra Pose, is a yoga posture that involves arching the upper body while keeping the lower body grounded, stretching the spine and chest while strengthening the back muscles.
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
        <img  src='images/yoga/asanasbenefits/bhujangasanabenefits.png' width='100%' height='50%'></img>
        </Box>
          

          <Box sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}}>
          <img src='images/yoga/asanasbenefits/bhujangasanabenefits.png' width='350h' height='70%'></img>
          </Box>
        
        
    </Box>


    
</Box>
<Footer/>
        
       
    </Box>
  )
}

export default Bhujangasana










