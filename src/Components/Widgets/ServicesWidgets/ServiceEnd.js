import { Box, Grid } from '@mui/material'
import React from 'react'
import Footer from '../HomeWidgets/Footer'
import Images from '../../../Constants/constant'

const ServiceEnd = () => {
  return (
    <Grid container>
        <Grid item xs={12}>
            <Box marginRight='30%' marginLeft='30%' marginTop='3%' marginBottom='3%'>
              ``  <img src={Images.services_underline} width='100%'></img>
            </Box>
            <Footer/>
        </Grid>
    </Grid>
  )
}

export default ServiceEnd
