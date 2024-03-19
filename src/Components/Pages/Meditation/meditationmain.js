import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../Layout/NewNavbar'
import YogaCard from '../../Widgets/yogawidgets/yogacard/yogacard'



const MeditationMain = () => {
  return (
    <Box>
        <NewNavbar/>

        <Box paddingTop='100px'></Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        <Box height='48vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/meditation/meditationintro.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='48px'fontFamily='Timesnewroman' style={{ fontWeight: 600 }}>Meditation</Typography>
           <img src='/images/yoga/yogatext.png' height='15%' style={{marginBottom:'20px'}}></img>

        
          </Box>
            </Box>
         </Box>


         <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Box height='11vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('/images/meditation/meditationintro.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='12px' fontFamily='Timesnewroman' style={{ fontWeight: 600 }}>Meditation</Typography>
           <img src='/images/yoga/yogatext.png' height='5%' ></img>

        
          </Box>
            </Box>
         </Box>

         <Box marginLeft='3%' marginRight='3%' marginTop='6%' marginBottom='5%'>
            <Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }} flexDirection='column' justifyContent='center' alignItems='center'>
                
                

                <img src='/images/meditation/meditationtext.png' height='36vh' width='19%' style={{marginBottom:"30px"}}></img>
                
            </Box>
            <Box display={{ xs: 'flex', sm: 'flex', md: 'block', lg: 'none', xl: 'none' }} flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography color='black' fontSize='12px' >Hatha Asanas</Typography>
                

                <img src='/images/meditation/meditationtext.png' height='10vh' width='22%' style={{marginBottom:"20px"}}></img>
                
            </Box>
         <Grid container>
            <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard to='/meditation-mindfulness' imageSrc='images/meditation/meditations/mindfulness.png' asanname='Mindfulness Meditation'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/meditation-transcendental' imageSrc='images/meditation/meditations/transcendental.png' asanname='Transcendental Meditation'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/meditation-mantra' imageSrc='images/meditation/meditations/mantra.png' asanname='Mantra Meditation'></YogaCard>
                        </Grid>
                        
                    </Box>


                    <Box display='flex' marginTop='2%' marginBottom='3%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard to='/meditation-spiritual' imageSrc='images/meditation/meditations/spiritual.png' asanname='Spiritual Meditation'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/meditation-visualization'imageSrc='images/meditation/meditations/visualization.png' asanname='Visualization Meditation'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/meditation-focused' imageSrc='images/meditation/meditations/focused.png' asanname='Focused Meditation'></YogaCard>
                        </Grid>
                        
                    </Box>


                    
        </Grid>
         </Box>
         

            <Footer/>
    </Box>
  )
}

export default MeditationMain
