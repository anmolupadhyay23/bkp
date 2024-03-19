import { Box } from '@mui/material'
import React from 'react'
import MeditationintroImage from '../../../Widgets/meditationwidgets/meditationintroimage'
import NewNavbar from '../../../Layout/NewNavbar'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import Meditationdescription from '../../../Widgets/meditationwidgets/meditationdescription'

const Mantra = () => {
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
        title='Mantra Meditation'
        imageSrc='images/meditation/meditationintroimages/mantra.png'

        ></MeditationintroImage>

        <Meditationdescription
        title='What is Mantra Meditation?'
        info='Mantra Meditation is prominent in many teachings, including Hindu and Buddhist traditions. This type of meditation uses a repetitive sound to clear the mind. It can be a word, phrase, or sound, one of the most common being “om.”
        Your mantra can be spoken loudly or quietly. After chanting the mantra for some time, you’ll be more alert and in tune with your environment. This allows you to experience deeper levels of awareness.
        Some people enjoy mantra meditation because they find it easier to focus on a word than on their breath. Others enjoy feeling the vibration of the sound in their body.
        This is also a good practice for people who don’t like silence and enjoy repetition.'

        goal='The goal of Mantra Meditation is to cultivate mental focus, inner peace, and spiritual growth by repeating a sacred word or phrase, known as a mantra, to calm the mind, deepen concentration, and connect with higher consciousness.'

        items={items}
        ></Meditationdescription>

        

        <Footer/>
    </Box>
  )
}

export default Mantra
