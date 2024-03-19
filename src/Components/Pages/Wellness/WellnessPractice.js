import { Box } from '@mui/material'
import React from 'react'
import NewNavbar from '../../Layout/NewNavbar'
import WellnessIntro from '../../Widgets/WellnessWidgets/WellnessIntro'
import WellnessCard from '../../Widgets/WellnessWidgets/WellnessCard'
import WellnessProgram from '../../Widgets/WellnessWidgets/WellnessProgram'
import Footer from '../../Widgets/HomeWidgets/Footer'

const WellnessPractice = () => {
  return (
    <Box>
        <NewNavbar />
        <WellnessIntro />
        <WellnessCard />
        <WellnessProgram />
        <Footer />
    </Box>
  )
}

export default WellnessPractice
