import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../Layout/NewNavbar'
import YogaCard from '../../Widgets/yogawidgets/yogacard/yogacard'
import Images from '../../../Constants/constant'



const MeditationMain = () => {
  return (
    <Box>
        <NewNavbar/>

        <Box paddingTop='100px'></Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        <Box height='48vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Fmeditationintro.png?alt=media&token=db1f8f70-e0f3-41b7-8dea-6ff1a98ef5f4')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='48px'fontFamily='Timesnewroman' style={{ fontWeight: 600 }}>Meditation</Typography>
           <img src={Images.yogatext} height='15%' style={{marginBottom:'20px'}}></img>

        
          </Box>
            </Box>
         </Box>


         <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Box height='11vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Fmeditationintro.png?alt=media&token=db1f8f70-e0f3-41b7-8dea-6ff1a98ef5f4')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='12px' fontFamily='Timesnewroman' style={{ fontWeight: 600 }}>Meditation</Typography>
           <img src={Images.yogatext} height='5%' ></img>

        
          </Box>
            </Box>
         </Box>

         <Box marginLeft='3%' marginRight='3%' marginTop='6%' marginBottom='5%'>
            <Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }} flexDirection='column' justifyContent='center' alignItems='center'>
                
                

                <img src={Images.meditationtext} height='36vh' width='19%' style={{marginBottom:"30px"}}></img>
                
            </Box>
            <Box display={{ xs: 'flex', sm: 'flex', md: 'block', lg: 'none', xl: 'none' }} flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography color='black' fontSize='12px' >Hatha Asanas</Typography>
                

                <img src={Images.meditationtext} height='10vh' width='22%' style={{marginBottom:"20px"}}></img>
                
            </Box>
         <Grid container>
            <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard to='/meditation-mindfulness' imageSrc={Images.mindfulness1} asanname='Mindfulness Meditation'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/meditation-transcendental' imageSrc={Images.transcendental1} asanname='Transcendental Meditation'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/meditation-mantra' imageSrc={Images.mantra1} asanname='Mantra Meditation'></YogaCard>
                        </Grid>
                        
                    </Box>


                    <Box display='flex' marginTop='2%' marginBottom='3%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard to='/meditation-spiritual' imageSrc={Images.spiritual1} asanname='Spiritual Meditation'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/meditation-visualization'imageSrc={Images.visualization1} asanname='Visualization Meditation'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/meditation-focused' imageSrc={Images.focused1} asanname='Focused Meditation'></YogaCard>
                        </Grid>
                        
                    </Box>


                    
        </Grid>
         </Box>
         

            <Footer/>
    </Box>
  )
}

export default MeditationMain
