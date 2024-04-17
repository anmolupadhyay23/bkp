import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../Layout/NewNavbar'
import YogaCard from '../../Widgets/yogawidgets/yogacard/yogacard'
import Images from '../../../Constants/constant'



const Yogamain = () => {
  return (
    <Box>
        <NewNavbar/>

        <Box paddingTop='100px'></Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        <Box height='48vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Fyogaimg.png?alt=media&token=26310104-e1be-43a7-98d9-e2e2b3d84634')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='48px' style={{ fontWeight: 600 }}>Yoga</Typography>
           <img src={Images.yogatext} height='15%'></img>

        
          </Box>
            </Box>
         </Box>


         <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Box height='11vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Fyogaimg.png?alt=media&token=26310104-e1be-43a7-98d9-e2e2b3d84634')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='12px' style={{ fontWeight: 600 }}>Yoga</Typography>
           <img src={Images.yogatext} height='5%'></img>

        
          </Box>
            </Box>
         </Box>

         <Box marginLeft='3%' marginRight='3%' marginTop='6%' marginBottom='5%'>
            <Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }} flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography color='black' fontSize='32px' >Hatha Asanas</Typography>
                

                <img src={Images.asanastext} height='37vh' width='22%'></img>
                
            </Box>
            <Box display={{ xs: 'flex', sm: 'flex', md: 'block', lg: 'none', xl: 'none' }} flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography color='black' fontSize='12px' >Hatha Asanas</Typography>
                

                <img src={Images.asanastext} height='10vh' width='22%'></img>
                
            </Box>
         <Grid container>
            <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard to='/trikonasana' imageSrc={Images.trikonasana} asanname='Trikonasana (त्रिकोणासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/sirasana' imageSrc={Images.sirasana} asanname='Sirsasana (शीर्षासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/sarvangasana' imageSrc={Images.sarvangasana} asanname='Sarvangasana (सर्वांगासन)'></YogaCard>
                        </Grid>
                        
                    </Box>


                    <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard to='/halasana' imageSrc={Images.halasana} asanname='Halasana (हलासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/matsyasana' imageSrc={Images.matsyasana} asanname='Matsyasana (मत्स्यासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/paschimottanasana'imageSrc={Images.paschimottanasana} asanname='Paschimottanasana (पश्चिमोत्तानासन)'></YogaCard>
                        </Grid>
                        
                    </Box>


                    <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard to='/bhujangasana' imageSrc={Images.bhujangasana} asanname='Bhujangasana (भुजंगासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/shalabhasana' imageSrc={Images.shalabhasana} asanname='Shalabhasana (शलभासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/dhanurasana'imageSrc={Images.dhanurasana} asanname='Dhanurasana (धनुरासन)'></YogaCard>
                        </Grid>
                        
                    </Box>


                    <Box display='flex' marginTop='2%'>

                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                            <YogaCard to='/mayurasana' imageSrc={Images.mayurasana} asanname='Mayurasana (मयूरासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/ardhamatsyendrasana' imageSrc={Images.ardhamatsyendrasana} asanname='Ardha Matsyendrasana (अर्ध मत्स्येन्द्रासन)'></YogaCard>
                        </Grid>
                        <Grid item xs={0.5}></Grid>
                        <Grid item xs={3.3}>
                        <YogaCard to='/padahasthasana' imageSrc={Images.padahasthasana} asanname='Pada Hasthasana (पादहस्तासन)'></YogaCard>
                        </Grid>
                        
                    </Box>
        </Grid>
         </Box>
         

            <Footer/>
    </Box>
  )
}

export default Yogamain
