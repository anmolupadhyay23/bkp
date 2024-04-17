import { Box } from '@mui/material'
import React from 'react'
import MeditationintroImage from '../../../Widgets/meditationwidgets/meditationintroimage'
import NewNavbar from '../../../Layout/NewNavbar'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import Meditationdescription from '../../../Widgets/meditationwidgets/meditationdescription'
import Images from '../../../../Constants/constant'

const Transcendental = () => {
   const items=["Choose a quiet and comfortable place to sit where you won't be disturbed for about 15-20 minutes.",
   "Sit in a comfortable position with your back straight, either on a chair with feet flat on the ground or cross-legged on a cushion.",
   "Close your eyes gently to minimize external distractions.",
   "Choose a mantra given to you by a certified TM teacher. This mantra is a meaningless sound or word that helps focus the mind.",
   "Silently repeat the mantra in your mind. Allow it to flow effortlessly without trying to control or manipulate it.",
   "If your mind wanders, gently bring your attention back to repeating the mantra. Continue for 15-20 Minutes: Practice TM for 15-20 minutes, ideally twice a day - once in the morning and once in the evening.",
   "After the allotted time, gradually ease out of meditation. Sit quietly for a moment before opening your eyes.",
   "Consistency is key. Aim to practice TM daily to experience its full benefits.",
   "It's essential to learn Transcendental Meditation from a certified TM teacher who can provide personalized instruction and guidance."      
]
  return (
    <Box>
        <NewNavbar/>
        <MeditationintroImage
        styles={[
            { display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' }, textWidth: '45%', titleFontSize: '48px', subtitleFontSize: '20px' },
            { display: { xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '36px', subtitleFontSize: '14px' },
            { display: { xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }, textWidth: '45%', titleFontSize: '12px', subtitleFontSize: '7px' }
        ]}
        title='Transcendental Meditation'
        imageSrc={Images.transcendental}

        ></MeditationintroImage>

        <Meditationdescription
        title='What is Transcendental Meditation?'
        info='Transcendental Meditation (TM) is a technique for accessing a state of deep relaxation and restful alertness. It involves silently repeating a mantra, a specific word or sound, to help the mind settle into a state of transcending thought. 

        Transcendental Meditation is typically practiced for 15-20 minutes, twice daily, while sitting comfortably with closed eyes. Developed by Maharishi Mahesh Yogi in the 1950s, TM aims to reduce stress, promote inner peace, and enhance overall well-being through regular practice.'

        goal='The goal of Transcendental Meditation (TM) is to achieve a state of deep relaxation and inner peace by repeating a mantra, promoting mental clarity, stress reduction, and overall well-being.'

        items={items}
        ></Meditationdescription>

        

        <Footer/>
    </Box>
  )
}

export default Transcendental
