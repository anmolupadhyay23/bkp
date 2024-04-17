import { Box, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../../Layout/NewNavbar'
import YogaintroImage from '../../../Widgets/yogawidgets/yogaintroimage'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import Images from '../../../../Constants/constant'


const Paschimottanasana = () => {
    const items = ['Start by sitting on the floor with your legs extended straight in front of you. Keep your spine tall and your toes pointing towards the ceiling.',
        'Engage your quadriceps (front thigh muscles) by flexing your feet and pressing your heels down into the floor.',
        'Inhale deeply, lengthening your spine and lifting your arms overhead.',
        'Exhale slowly as you hinge forward at the hips, leading with your chest. Keep your back flat and avoid rounding your spine.',
        "Reach your hands towards your feet, ankles, or shins, depending on your flexibility. If you can't reach your feet, use a yoga strap wrapped around the soles of your feet to help you reach.",
        'As you fold forward, continue to breathe deeply and relax into the stretch. With each exhale, try to deepen the stretch slightly, but never force your body into a position that feels uncomfortable.',
        'Hold the pose for 30 seconds to 1 minute, breathing deeply and relaxing into the stretch.',
        'To release the pose, inhale as you slowly lift your torso back up to an upright position, lengthening your spine as you go.',
        'Repeat the pose as desired, gradually increasing the duration of the hold as your flexibility improves.',];
  return (
    <Box>
        <NewNavbar/>
        <YogaintroImage imageSrc={Images.paschimottanasana1} 
        title='Paschittanasana'
        subtitle1='“Paschimottanasana: Seated Forward Bend, stretches the '
        subtitle2='back of the body.”'
        styles={[
            { display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, textWidth: '45%', titleFontSize: '48px', subtitleFontSize: '20px' },
            { display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '36px', subtitleFontSize: '14px' },
            { display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '12px', subtitleFontSize: '7px' }
        ]}
        ></YogaintroImage>

        <Box marginLeft='20%' marginRight='20%' marginTop='6%' marginBottom='5%'>

          {/* Asana Title*/}
       <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
        <Typography sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}} color='black' fontSize='24px'>Paschimottanasana: Seated Forward Bend</Typography>
        <Typography sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}} color='black' fontSize='14px'>Paschimottanasana: Seated Forward Bend</Typography>


        {/* Asana Info*/}
        <Typography variant="body1" paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }}}>
        Paschimottanasana is a seated yoga pose that involves folding forward from the hips to stretch the back of the body, including the spine, hamstrings, and shoulders. It promotes relaxation, relieves stress, and improves digestion .
        </Typography>

<Typography variant="body1" fontSize='11px' paddingTop='24px' paddingBottom='60px' sx={{display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}}>
Paschimottanasana is a seated yoga pose that involves folding forward from the hips to stretch the back of the body, including the spine, hamstrings, and shoulders. It promotes relaxation, relieves stress, and improves digestion .
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
        <img  src={Images.paschimottanasanabenefits} width='100%' height='50%'></img>
        </Box>
          

          <Box sx={{display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' }}}>
          <img src={Images.paschimottanasanabenefits} width='350h' height='70%'></img>
          </Box>
        
        
    </Box>


    
</Box>
<Footer/>
        
       
    </Box>
  )
}

export default Paschimottanasana










