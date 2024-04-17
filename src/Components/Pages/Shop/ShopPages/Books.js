import { Box, Typography } from '@mui/material'
import React from 'react'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import NewNavbar from '../../../Layout/NewNavbar'

const Books = () => {
  return (
    <Box>
        <NewNavbar/>
      <Box paddingTop='100px'></Box>
        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
        <Box height='80vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Fbooks.png?alt=media&token=9d21d022-6dfe-426f-853e-dcc519b090c4')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='48px' style={{ fontWeight: 600 }}>Coming Soon</Typography>
        <Typography color='white' fontSize='20px' >This section of the website is currently under construction.
          </Typography>
          <Typography color='white' fontSize='20px' >
          Sign up to get notified when it launches.</Typography>
          <Box width='50%' marginTop='3%'>

            </Box>
        </Box>
        </Box>


       
    </Box>

    <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
        <Box height='25vh' position='relative' bgcolor='rgba(255, 101, 5, 0.7)' sx={{ backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/future-it-c63d3.appspot.com/o/bkp%2Fbooks.png?alt=media&token=9d21d022-6dfe-426f-853e-dcc519b090c4')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
        <Box position='absolute' width='100%' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Typography color='white' fontSize='20px' fontweight='bold' style={{ fontWeight: 600 }}>Coming Soon</Typography>
        <Typography color='white' fontSize='12px' >This section of the website is currently under construction.
          </Typography>
          <Typography color='white' fontSize='12px' >
          Sign up to get notified when it launches.</Typography>
          <Box width='50%' marginTop='3%'>

            </Box>
        </Box>
        </Box>


      
    </Box>
    {/* <Box>
        <img src='/images/pnf/pnf_end.png' width='100%' />
      </Box> */}
    <Footer/>
    </Box>
    

    

    
  )
}

export default Books
