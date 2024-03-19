import { Box } from '@mui/material'
import React from 'react'
import MeditationintroImage from '../../../Widgets/meditationwidgets/meditationintroimage'
import NewNavbar from '../../../Layout/NewNavbar'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import Meditationdescription from '../../../Widgets/meditationwidgets/meditationdescription'

const Mindufulnes = () => {
   const items=["Find a comfortable and quiet space where you won't be disturbed. Sit in a comfortable position, either cross-legged on the floor or on a chair with your feet flat on the ground and your hands resting on your lap.",
              "Close your eyes or soften your gaze and take a few deep breaths to relax your body and mind. Allow any tension to release with each exhale.",
              "Bring your attention to the present moment by focusing on your breath. Notice the sensation of the breath as it enters and leaves your nostrils or the rise and fall of your chest and abdomen.",
              "As you focus on your breath, you may notice thoughts, emotions, or sensations arising. Acknowledge them without judgment and gently redirect your attention back to your breath.",
              "Practice non-judgmental awareness by observing your thoughts, emotions, and bodily sensations as they come and go, without getting caught up in them or reacting to them.",
              "If your mind wanders, which is natural, gently bring your attention back to your breath or anchor point without criticizing yourself. Each time you bring your attention back is an opportunity to strengthen your mindfulness muscle.",
              "Continue to practice mindfulness meditation for a set period of time, starting with a few minutes and gradually increasing as you become more comfortable with the practice.",
              "When you're ready to end your meditation, slowly bring your awareness back to your surroundings. Take a few deep breaths and gently open your eyes."        
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
        title='Mindfulness Meditation'
        imageSrc='images/meditation/meditationintroimages/mindfulness.png'

        ></MeditationintroImage>

        <Meditationdescription
        title='What is Mindfulness Meditation?'
        info='Mindfulness is the basic human ability to be fully present, aware of where we are and what we’re doing, and not overly reactive or overwhelmed by what’s going on around us.

        While mindfulness is something we all naturally possess, it’s more readily available to us when we practice on a daily basis.
        
        Whenever you bring awareness to what you’re directly experiencing via your senses, or to your state of mind via your thoughts and emotions, you’re being mindful. And there’s growing research showing that when you train your brain to be mindful, you’re actually remodeling the physical structure of your brain.'

        goal='The goal of mindfulness is to wake up to the inner workings of our mental, emotional, and physical processes.'

        items={items}
        ></Meditationdescription>

        

        <Footer/>
    </Box>
  )
}

export default Mindufulnes
