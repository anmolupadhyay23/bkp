import { Box } from '@mui/material'
import React from 'react'
import MeditationintroImage from '../../../Widgets/meditationwidgets/meditationintroimage'
import NewNavbar from '../../../Layout/NewNavbar'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import Meditationdescription from '../../../Widgets/meditationwidgets/meditationdescription'
import Images from '../../../../Constants/constant'

const Spiritualmeditation = () => {
   const items=["Choose a quiet and peaceful environment where you can sit comfortably without distractions.",
   "Sit in a relaxed and comfortable position with your back straight and your hands resting comfortably in your lap.",
   "Begin with setting an intention for your meditation practice, whether it's seeking guidance, connecting with your inner self, or simply cultivating peace.",
   "Close your eyes and bring your attention to your breath. Take deep, slow breaths, allowing your breath to naturally deepen and lengthen.",
   "Choose a spiritual focal point for your meditation, such as a sacred word, phrase, image, symbol, or deity.",
   "Begin repeating your chosen focus silently in your mind or visualize it with each inhale and exhale. Allow yourself to immerse deeply into the experience.",
   "If your mind wanders, gently bring your focus back to your chosen focal point without judgment. Embrace the present moment with acceptance and openness.",
   "Throughout your meditation, cultivate feelings of gratitude and appreciation for the spiritual connection and insights you may receive.",
   "After your meditation session, take a few moments to reflect on your experience. Notice any insights, feelings, or sensations that arose during your practice.",
   "End your meditation practice with a moment of gratitude for the opportunity to connect with the divine or higher consciousness. Take this sense of peace and connection with you into your day."      
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
        title='Spiritual Meditation'
        imageSrc={Images.spiritualmeditation}

        ></MeditationintroImage>

        <Meditationdescription
        title='What is Spiritual Meditation?'
        info="Spiritual meditation is a practice aimed at connecting with the spiritual dimension of existence, exploring one's inner self, and deepening one's relationship with the divine, universal consciousness, or higher power.

        It often involves techniques such as prayer, contemplation, visualization, chanting, or focusing on sacred texts or symbols. Spiritual meditation can lead to a sense of inner peace, spiritual growth, and a deeper understanding of the interconnectedness of all things. It is practiced in various spiritual traditions and can be tailored to individual beliefs and preferences."

        goal="In short, the goal of spiritual meditation is to deepen one's connection with the divine or higher consciousness, leading to spiritual growth, inner peace, and a deeper understanding of oneself and the universe."

        items={items}
        ></Meditationdescription>

        

        <Footer/>
    </Box>
  )
}

export default Spiritualmeditation
