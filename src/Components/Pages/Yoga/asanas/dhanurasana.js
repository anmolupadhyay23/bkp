import { Box, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../../Layout/NewNavbar'
import YogaintroImage from '../../../Widgets/yogawidgets/yogaintroimage'
import Footer from '../../../Widgets/HomeWidgets/Footer'


const Dhanurasana = () => {
    const items = ['Lie on your stomach with your legs hip-width apart and your arms by your sides.',
    'Bend your knees and reach your hands back to grasp your ankles or feet.',
    'Inhale deeply, then exhale as you lift your chest and legs off the ground by pressing your feet into your hands.',
    "Keep your gaze forward and your neck in a neutral position.",
    'Hold the pose for 15-30 seconds, breathing deeply and evenly.',
    'To release, exhale as you gently lower your chest and legs back to the ground.',
    'Repeat the pose 2-3 times, gradually increasing the duration of the hold as you become more comfortable.',
    "Rest in Child's Pose (Balasana) afterward to counterpose and relax the spine.",];
  return (
    <Box>
        <NewNavbar/>
        <YogaintroImage imageSrc='images/yoga/asanasintroimages/dhanurasana.png' 
        title='Dhanurasana'
        subtitle1='“Dhanurasana, Bow Pose, involves lying on the stomach '
        subtitle2='and lifting the chest and legs to stretch the front and '
        subtitle3='strengthen the back.”'
        styles={[
            { display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, textWidth: '45%', titleFontSize: '48px', subtitleFontSize: '20px' },
            { display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '36px', subtitleFontSize: '14px' },
            { display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '12px', subtitleFontSize: '7px' }
        ]}
        ></YogaintroImage>

        <Box marginLeft='20%' marginRight='20%' marginTop='6%' marginBottom='5%'>

          {/* Asana Title*/}
       <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} color='black' fontSize='24px'>Dhanurasana:  Bow Pose</Typography>
        <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} color='black' fontSize='14px'>Dhanurasana:  Bow Pose</Typography>


        {/* Asana Info*/}
        <Typography variant="body1" paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>
        Dhanurasana, or Bow Pose, is a yoga posture that involves lying on the stomach and lifting the chest and legs off the ground, resembling a bow shape, to stretch the front of the body and strengthen the back muscles.
        </Typography>

<Typography variant="body1" fontSize='11px' paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}}>
Dhanurasana, or Bow Pose, is a yoga posture that involves lying on the stomach and lifting the chest and legs off the ground, resembling a bow shape, to stretch the front of the body and strengthen the back muscles.
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
        <img  src='images/yoga/asanasbenefits/dhanurasanabenefits.png' width='100%' height='50%'></img>
        </Box>
          

          <Box sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}}>
          <img src='images/yoga/asanasbenefits/dhanurasanabenefits.png' width='350h' height='70%'></img>
          </Box>
        
        
    </Box>


    
</Box>
<Footer/>
        
       
    </Box>
  )
}

export default Dhanurasana










