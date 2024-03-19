import { Box } from '@mui/material'
import React from 'react'
import MeditationintroImage from '../../../Widgets/meditationwidgets/meditationintroimage'
import NewNavbar from '../../../Layout/NewNavbar'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import Meditationdescription from '../../../Widgets/meditationwidgets/meditationdescription'

const Focused = () => {
   const items=["Choose a quiet and comfortable environment where you won't be disturbed.",
              "Sit in a relaxed and comfortable position, either on a cushion on the floor or in a chair with your back straight and your feet flat on the ground.",
              "Select a point of focus for your meditation. This could be your breath, a specific object, a mantra, or a sensation in your body.",
              "Close your eyes gently and bring your attention to your chosen point of focus. If you're focusing on your breath, observe the sensation of the breath as it enters and leaves your body.",
              "Keep your attention anchored to your chosen point of focus. When your mind wanders, gently bring your focus back without judgment or frustration.",
              "If you find it challenging to maintain focus, use an anchor to bring your attention back. This could be silently repeating a mantra, counting your breaths, or gently touching a part of your body.",
              "Start with a few minutes of meditation and gradually increase the duration as you become more comfortable. Aim to practice focused meditation daily for optimal benefits.",
              "If distractions arise, acknowledge them without getting caught up in them. Simply observe them and gently bring your attention back to your point of focus.",
              "When you're ready to end your meditation session, take a few deep breaths and gently open your eyes. Take a moment to observe how you feel before returning to your daily activities.",
              "Remember that meditation is a practice, and it's normal for your mind to wander. Be patient with yourself and approach your practice with kindness and compassion."        
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
        title='Focused Meditation'
        imageSrc='images/meditation/meditationintroimages/focused.png'

        ></MeditationintroImage>

        <Meditationdescription
        title='What is Focused Meditation?'
        info="Focused meditation, also known as concentration meditation, is a mindfulness practice that involves focusing the mind on a single point of attention. This point of focus could be an object, such as a candle flame or a physical sensation like the breath or a mantra. The goal of focused meditation is to cultivate deep concentration, calm the mind, and develop mindfulness by training the attention to remain anchored in the present moment. This practice helps to quiet the mind, reduce distractions, and promote inner peace and clarity."

        goal='The goal of focused meditation is to cultivate deep concentration, calm the mind, and develop mindfulness by training the attention to remain anchored in the present moment, ultimately leading to greater inner peace, clarity, and a heightened sense of awareness.'

        items={items}
        ></Meditationdescription>

        

        <Footer/>
    </Box>
  )
}

export default Focused
