import { Box, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../../Layout/NewNavbar'
import YogaintroImage from '../../../Widgets/yogawidgets/yogaintroimage'
import Footer from '../../../Widgets/HomeWidgets/Footer'


const Halasana = () => {
    const items = ['Lie on your back with your arms beside your body, palms facing down.',
    'Inhale deeply and engage your core muscles.',
    'Exhale as you lift your legs off the floor, using your abdominal strength to lift them towards the ceiling.',
    'Support your lower back with your hands as you lift your legs overhead, keeping them straight.',
    'Lower your legs towards the floor behind your head, aiming to touch your toes to the ground.',
    'Keep your legs straight and your toes pointed.',
    'Hold the pose for several breaths, breathing deeply and evenly.',
    'To release, slowly roll your spine down onto the mat, one vertebra at a time.',
    'Once your legs are back on the floor, relax for a few breaths before moving on to the next posture.',];
  return (
    <Box>
        <NewNavbar/>
        <YogaintroImage imageSrc='images/yoga/asanasintroimages/halasana.png' 
        title='Halasana'
        subtitle1='““Halasana, the Plow Pose, involves lying on your back '
        subtitle2='and lifting your legs over your head.”'
        styles={[
            { display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, textWidth: '45%', titleFontSize: '48px', subtitleFontSize: '20px' },
            { display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '36px', subtitleFontSize: '14px' },
            { display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '12px', subtitleFontSize: '7px' }
        ]}
        ></YogaintroImage>

        <Box marginLeft='20%' marginRight='20%' marginTop='6%' marginBottom='5%'>

          {/* Asana Title*/}
       <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} color='black' fontSize='24px'>Halasana: Plow Pose</Typography>
        <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} color='black' fontSize='14px'>Halasana: Plow Pose</Typography>


        {/* Asana Info*/}
        <Typography variant="body1" paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>
        Halasana, or Plow Pose, is a yoga posture that involves lying on your back and lifting your legs over your head until your toes touch the ground behind you, stretching the spine, shoulders, and hamstrings, stimulating the thyroid gland, and promoting relaxation.
        </Typography>

<Typography variant="body1" fontSize='11px' paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}}>
Halasana, or Plow Pose, is a yoga posture that involves lying on your back and lifting your legs over your head until your toes touch the ground behind you, stretching the spine, shoulders, and hamstrings, stimulating the thyroid gland, and promoting relaxation.
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
        <img  src='images/yoga/asanasbenefits/halasanabenefits.png' width='100%' height='50%'></img>
        </Box>
          

          <Box sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}}>
          <img src='images/yoga/asanasbenefits/halasanabenefits.png' width='350h' height='70%'></img>
          </Box>
        
        
    </Box>


    
</Box>
<Footer/>
        
       
    </Box>
  )
}

export default Halasana










