import { Box } from '@mui/material'
import React from 'react'
import MeditationintroImage from '../../../Widgets/meditationwidgets/meditationintroimage'
import NewNavbar from '../../../Layout/NewNavbar'
import Footer from '../../../Widgets/HomeWidgets/Footer'
import Meditationdescription from '../../../Widgets/meditationwidgets/meditationdescription'
import Images from '../../../../Constants/constant'

const Visualization = () => {
   const items=["Choose a quiet and comfortable environment where you won't be disturbed.",
              "Sit or lie down in a comfortable position. Close your eyes and take a few deep breaths to relax your body and mind.",
              "Clarify the purpose of your visualization. What do you want to achieve or experience? Formulate a clear and specific intention.",
              "Begin to visualize your intention in your mind's eye. Imagine the scene or outcome as vividly as possible, using all of your senses. See, hear, feel, smell, and even taste the details of your visualization.",
              "As you visualize, evoke the emotions associated with your desired outcome. Feel the joy, excitement, gratitude, or any other positive emotions that arise.",
              "Maintain your focus on the visualization, allowing it to unfold naturally. If your mind wanders, gently bring your attention back to your intention.",
              "If needed, you can use guided imagery recordings or scripts to lead you through the visualization process. There are many resources available online or in books that offer guided visualization exercises.",
              "Make visualization meditation a regular part of your routine. Set aside time each day to practice, preferably in the morning or before bed.",
              "After completing your visualization, take a moment to reflect on your experience. Notice any insights, sensations, or feelings that arose during the practice.",
              "Trust that your subconscious mind is working to manifest your intentions. Let go of any attachment to specific outcomes and allow the universe to unfold as it will."        
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
        title='Visualization Meditation'
        imageSrc={Images.visualization}

        ></MeditationintroImage>

        <Meditationdescription
        title='What is Visualization Meditation?'
        info="Visualization Meditation is a technique focused on enhancing feelings of relaxation, peace, and calmness by visualizing positive scenes, images, or figures.
        This practice involves imagining a scene vividly and using all five senses to add as much detail as possible. It can also involve holding a beloved or honored figure in mind with the intention of embodying their qualities.
        Another form of visualization meditation involves imagining yourself succeeding at specific goals, which is intended to increase focus and motivation.
        Many people use visualization meditation to boost their mood, reduce stress levels, and promote inner peace."

        goal='The goal of visualization meditation is to utilize the power of imagination to manifest positive change, achieve goals, reduce stress, and promote relaxation.'

        items={items}
        ></Meditationdescription>

        

        <Footer/>
    </Box>
  )
}

export default Visualization
