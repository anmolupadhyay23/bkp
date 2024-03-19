import React from 'react';
import { Box, Typography } from '@mui/material';

const Meditationdescription = ({ title, info,goal, items }) => {
  return (
    <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center' >
    <Box display='flex' flexDirection='column' height='100%' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center' marginRight='18%' marginLeft='18%' marginTop='4%'>
      <Typography sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }} fontFamily='Inter' fontWeight='bold' color='black' fontSize='14px'>{title}</Typography>
      <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} fontFamily='Inter' fontWeight='bold' color='black' fontSize='24px'>{title}</Typography>
      <Typography variant="body1" paddingTop='24px' fontFamily='Inter' paddingBottom='60px' sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }}>
        {info}
      </Typography>

      <Typography variant="body1" fontSize='11px' paddingTop='24px' paddingBottom='18px' sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }}>
        {info}
      </Typography>

      <Box display='flex' flexDirection='row' height='14vh' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center'>
      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} bgcolor='rgba(0,0,0)' height='100%' width='0.6vh' marginRight='10px'>
                <Typography display='hidden'></Typography>
            </Box>

            <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }} bgcolor='rgba(0,0,0)' height='40%' width='0.6vh' marginRight='10px'>
                <Typography display='hidden'></Typography>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='center' justifyItems='center' alignContent='center' alignItems='center' >
                <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' } }} fontSize='24px' fontWeight='bold' fontFamily='Inter' fontStyle='Italic'>{goal}</Typography>
                <Typography sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' } }} fontSize='12px' fontWeight='bold' fontFamily='Inter' fontStyle='Italic'>{goal}</Typography>
            </Box>
      </Box>
      </Box>

      <Box bgcolor='#736D6A' width='100%' marginTop='4%' marginBottom='1%' paddingTop='3%' paddingBottom='3%'>
                <Box display='flex' marginLeft='7%' marginRight='7%' paddingTop='2%' paddingBottom='2%' justifyContent='center' alignItems='center'>

                    <Box display='flex' flexDirection='column' >
                        <Box marginLeft='25%' marginRight='25%' marginBottom='10%' display='flex' justifyContent='center' alignItems='center'>
                            <img src='/images/meditation/meditationbanner/stress.png' width='50%' />
                        </Box>

                        <Box display='flex' justifyContent='center' alignItems='center'>
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'flex', xl: 'flex'}}  fontSize='12px' color='white'>Reduced Stress</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}   fontSize='7px' color='white'>Stress</Typography>
                        </Box>
                        
                        
                        
                        
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        <Box marginLeft='25%' marginRight='25%'  marginBottom='10%' display='flex' justifyContent='center' alignItems='center'>
                            <img src='/images/meditation/meditationbanner/mentalhealth.png' width='50%' />
                        </Box>

                        <Box display='flex' justifyContent='center' alignItems='center'>
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}  fontSize='12px' color='white'>Improved Mental well-being</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}  fontSize='8px' color='white'>Well-being</Typography>
                        </Box>
                        
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <Box marginLeft='25%' marginRight='25%' marginBottom='10%' display='flex' justifyContent='center' alignItems='center'>
                            <img src='/images/meditation/meditationbanner/focus.png' width='50%' />
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}  fontSize='12px' color='white'>Focus & Concentration</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}  fontSize='8px' color='white'>Focused</Typography>
                        </Box>
                        
                    </Box>
                    
                    <Box display='flex' flexDirection='column'>
                        <Box marginLeft='25%' marginRight='25%' marginBottom='10%' display='flex' justifyContent='center' alignItems='center'>
                            <img src='/images/meditation/meditationbanner/sleep.png' width='50%' />
                        </Box>

                        <Box display='flex' justifyContent='center' alignItems='center'> 
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}  fontSize='12px' color='white'>Better Sleep</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}  fontSize='8px' color='white'>Better Sleep</Typography>
                        </Box>
                        
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        <Box marginLeft='25%' marginRight='25%' marginBottom='10%' display='flex' justifyContent='center' alignItems='center'>
                            <img src='/images/meditation/meditationbanner/awareness.png' width='50%' />
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}  fontSize='12px' color='white'>Increased self-awareness</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}  fontSize='8px' color='white'>awareness</Typography>
                        </Box>
                        
                    </Box>

                    <Box display='flex' flexDirection='column'>
                        <Box marginLeft='25%' marginRight='25%' marginBottom='10%' display='flex' justifyContent='center' alignItems='center'>
                            <img src='/images/meditation/meditationbanner/physicalhealth.png' width='50%' />
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center'>
                        <Typography display={{xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block'}}  fontSize='12px' color='white'>Physical Health</Typography>
                        <Typography display={{xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none'}}  fontSize='8px' color='white'>Healthy</Typography>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
           

           <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} fontSize='28px' fontFamily='Inter' fontWeight='bold' marginBottom='4%' marginTop='4%'>How to Practice?</Typography>
           <Typography sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }} fontSize='14px' fontFamily='Inter' fontWeight='bold' marginBottom='4%' marginTop='4%'>How to Practice?</Typography>
           <Box marginLeft='18%' marginRight='18%'>
           <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '20px', paddingBottom: '50px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '22px' }}>
            <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} variant="body1">{item}</Typography>
            <Typography sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }} fontSize='12px'>{item}</Typography>
          </li>
        ))}
      </ul>
           </Box>
           
      {/* <ul style={{ listStyleType: 'disc', textAlign: 'left', paddingLeft: '20px', paddingBottom: '50px' }}>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} variant="body1">{item}</Typography>
            <Typography sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }} fontSize='12px'>{item}</Typography>
          </li>
        ))}
      </ul> */}

      {/* <Typography sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }} color='black' fontSize='24px' paddingBottom='30px'>Benefits</Typography>
      <Typography sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }} color='black' fontSize='14px' paddingBottom='30px'>Benefits</Typography>

      <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' } }}>
        <img src={imgSrc} width='100%' height='50%'></img>
      </Box> */}


      {/* <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' } }}>
        <img src={imgSrc} width='350h' height='70%'></img>
      </Box> */}
    </Box>

  );
};

export default Meditationdescription;
