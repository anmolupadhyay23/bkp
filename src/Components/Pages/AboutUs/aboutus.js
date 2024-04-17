import { Box, Typography } from '@mui/material'
import React from 'react'
import NewNavbar from '../../Layout/NewNavbar'
import Footer from '../../Widgets/HomeWidgets/Footer'
import ProgressiveImage from '../../../progressiveimage/progressiveimage'
import Images from '../../../Constants/constant'

const Aboutus = () => {
  return (
    <Box>
        <NewNavbar/>
        <Box paddingTop='100px'></Box>
         <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}height='55vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Faboutus.png?alt=media&token=344e1270-9470-4aa3-89d5-c57c8b3bf8b8')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        </Box>
        <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}height='17vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Faboutus.png?alt=media&token=344e1270-9470-4aa3-89d5-c57c8b3bf8b8')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        
        </Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} position='absolute' top='30%' left='6%' width='45%'>
                        <Box>
                            <Typography fontSize='40px' fontWeight='bold' fontFamily='Times New Roman' color='white'>About Us</Typography>
                            <Typography fontSize='20px' color='white' fontFamily='Inter'>“Know more about us & our product”</Typography>
                            <img src={Images.aboutustext} height='37%' width='34%'></img>

                  
                           
                        </Box>
                    </Box>

     <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} position='absolute' top='16%' left='7%' width='45%'>
                        <Box>
                            <Typography fontSize='16px' fontWeight='bold' fontFamily='Times New Roman' color='white'>About Us</Typography>
                            <Typography fontSize='7px' color='white' fontFamily='Inter'>“Know more about us & our product”</Typography>
                            <img src={Images.aboutustext} height='30%' width='40%'></img>
                           
                        </Box>
         </Box>



          <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} flexDirection='column' justifyContent='center' alignItems='center' paddingTop='90px' marginLeft='16%' marginRight='16%'>
            <Typography fontSize='25px' fontFamily='ABeeZee' fontStyle='italic'> BhagwanKaPrasad: Delivering Spiritual Satisfaction</Typography>
            <Typography fontSize='16px' fontFamily='Inter' paddingTop='20px'> At BhagwanKaPrasad, we embark on a journey to bridge the gap between spirituality and modern-day constraints. Our platform offers a unique blend of tradition and convenience, providing a plethora of services ranging from online pooja, hawan, to prasad delivery, and a diverse selection of spiritual products. Here's a glimpse into our world:</Typography>
            <Box bgcolor='rgba(0,0,0,0.5)' height='0.4vh' width='60%' marginTop='30px' marginBottom='60px'>
                <Typography display='hidden'></Typography>
            </Box>
            
            <img src={Images.aboutusmission} width='100%' height='40%'></img>
            <Typography fontSize='32px' fontFamily='Inter' fontWeight='bold' paddingTop='60px'>Key Highlights</Typography>
            <img src={Images.highlights} width='30%'></img>

            <img src={Images.keyhighlights} width='100%' height='60%' style={{ marginTop: '100px', marginBottom:'80px' }} ></img>
          </Box>


          <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }} flexDirection='column' justifyContent='center' alignItems='center' paddingTop='37px' marginLeft='12%' marginRight='12%'>
            <Typography fontSize='14px' fontFamily='ABeeZee' fontStyle='italic'> BhagwanKaPrasad: Delivering Spiritual Satisfaction</Typography>
            <Typography fontSize='11px' fontFamily='Inter' paddingTop='20px'> At BhagwanKaPrasad, we embark on a journey to bridge the gap between spirituality and modern-day constraints. Our platform offers a unique blend of tradition and convenience, providing a plethora of services ranging from online pooja, hawan, to prasad delivery, and a diverse selection of spiritual products. Here's a glimpse into our world:</Typography>
            <Box bgcolor='rgba(0,0,0,0.5)' height='0.2vh' width='60%' marginTop='20px' marginBottom='22px'>
                <Typography display='hidden'></Typography>
            </Box>
            
            <img src={Images.aboutusmission} width='100%' height='60%'></img>
            <Typography fontSize='14px' fontFamily='Inter' fontWeight='bold' paddingTop='20px'>Key Highlights</Typography>
            <img src={Images.highlights} width='30%'></img>

            <img src={Images.keyhighlights} width='100%' height='60%' style={{ marginTop: '30px', marginBottom:'25px' }} ></img>
          </Box>

          <Footer/>
    </Box>
  )
}


export default Aboutus
