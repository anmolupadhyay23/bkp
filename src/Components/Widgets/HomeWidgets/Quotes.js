import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Avatar, Box, Button, IconButton, MobileStepper, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Images from '../../../Constants/constant';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

var quote = [
    {
        quoteText: '“जब हमारा मन कमजोर होता हैं, तब परिस्थितियां समस्या बन जाती हैं और जब हमारा मन कठोर होता है तब परिस्थितियां चुनौती बन जाती हैं। जब हमारा मन मजबूत होता हैं, तब परिस्थितियां अवसर बन जाती हैं।”',
        quoteBy: 'श्रीमदभागवतगीता'
    },
    {
        quoteText: '“जो बीत गया उस पर दुख क्यों करना, जो है उस पर अहंकार क्यों करना, और जो आने वाला है उसका मोह क्यों करना”',
        quoteBy: 'श्रीमदभागवतगीता ‎' // debug hecking
    },
    {
        quoteText: '“जिस मनुष्य के अंदर ज्ञान की कमी और ईश्वर में श्रद्धा नहीं होती,वो मनुष्य जीवन में कभी भी आनंद और सफलता को प्राप्त नहीं कर पाता”',
        quoteBy: 'श्रीमदभागवतगीता ‎ ‎' // debug hecking
    },
]

const Quotes = () => {

    const [isNext, setIsNext] = useState(false)
    const [isPrevious, setIsPrevious] = useState(false)

    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = quote.length;

    const handleNext = () => {
        if (activeStep != (maxSteps - 1)) {

            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setActiveStep(0);
        }
    }

    const handlePrev = () => {
        if (activeStep != 0) {

            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        } else {
            setActiveStep(maxSteps - 1);
        }
    }

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ backgroundImage: "url('/images/home/quotes_background.png')", backgroundSize: 'cover', padding: '2%', overflow: 'hidden', }}>
            <Box border='2px solid white' borderRadius='10px'>

                { /* For larger screens than sm */}
                <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
                    <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginRight: '1.5%', border: 'none' }}>
                        <img src={Images.quotes_sign} width='13px' height='16px' />
                    </Paper>
                    <Typography color='white' fontSize='24px' marginTop='1%'>Quotes</Typography>
                    <Paper variant='outlined' style={{ background: 'transparent', marginTop: '1.4%', marginLeft: '1.5%', border: 'none' }}>
                        <img src={Images.quotes_sign} width='13px' height='16px' />
                    </Paper>
                </Box>
                { /* For sm and smaller screens */}
                <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='30%' marginRight='30%'>
                    <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginRight: '1.5%', border: 'none' }}>
                        <img src={Images.quotes_sign} width='11px' height='13px' />
                    </Paper>
                    <Typography color='white' fontSize='18px' marginTop='1%'>Quotes</Typography>
                    <Paper variant='outlined' style={{ background: 'transparent', marginTop: '0.8%', marginLeft: '1.5%', border: 'none' }}>
                        <img src={Images.quotes_sign} width='11px' height='13px' />
                    </Paper>
                </Box>

                { /* For larger screens than sm */}
                <Box display={{ xs: 'none', sm: 'none', md: 'block' }} sx={{ width: '5%', border: 'none', borderTop: '5px solid white', marginBottom: '2%' }} mx='auto' />
                { /* For sm and smaller screens */}
                <Box display={{ xs: 'block', sm: 'block', md: 'none' }} sx={{ width: '12%', border: 'none', borderTop: '3px solid white', marginBottom: '2%' }} mx='auto' />

                <AutoPlaySwipeableViews
                    axis='x'
                    index={activeStep}
                    autoPlay={false}
                    interval={30000}
                    slideStyle={{ transition: '0.1s ease-in-out' }}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {quote.map((step, index) => (
                        <div key={step.quoteBy}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box>
                                    <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} justifyContent='center' marginLeft='20%' marginRight='20%'>
                                        <Typography color='white' fontSize='24px' fontWeight='500' marginTop='2.5%' textAlign='center'>
                                            {step.quoteText}
                                        </Typography>
                                    </Box>
                                    <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} justifyContent='center' marginLeft='10%' marginRight='10%'>
                                        <Typography color='white' fontSize='13px' marginTop='2.5%' fontWeight='500' textAlign='center' style={{fontFamily:'ABeeZee'}}>
                                            {step.quoteText}
                                        </Typography>
                                    </Box>
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>

                <AutoPlaySwipeableViews
                    axis='x'
                    index={activeStep}
                    autoPlay={false}
                    interval={15000}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {quote.map((step, index) => (
                        <div key={step.quoteBy}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box>
                                    <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }} alignItems='center' justifyContent='right' marginLeft='20%' marginRight='20%' marginTop='3%'>
                                        <Avatar sx={{ backgroundColor: 'white', width: '8px', height: '8px', marginRight: '2%' }}></Avatar>
                                        <Typography color='white' fontSize='24px' textAlign='right' fontWeight='500'>
                                            {step.quoteBy}
                                        </Typography>
                                    </Box>
                                    <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none' }} alignItems='center' justifyContent='right' marginLeft='20%' marginRight='10%' marginBottom='3%' marginTop='3%'>
                                        <Avatar sx={{ backgroundColor: 'white', width: '5px', height: '5px', marginRight: '2%' }}></Avatar>
                                        <Typography color='white' fontSize='14px' textAlign='right' fontWeight='350' style={{fontFamily:'ABeeZee'}} >
                                            {step.quoteBy}
                                        </Typography>
                                    </Box>
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>

                <MobileStepper variant='none' steps={maxSteps} position='static' activeStep={activeStep}
                    nextButton={<Button onClick={handleNext}>
                        <IconButton style={{ width:30, height:30 , border: isNext ? '1px solid black' : '1px solid white', color: isNext ? '#f24e1e' : 'white', backgroundColor: isNext ? 'black' : 'transparent' }} onMouseOver={() => setIsNext(true)} onMouseOut={() => setIsNext(false)}>
                            <ArrowForward />
                        </IconButton>
                    </Button>}
                    backButton={<Button onClick={handlePrev}>
                        <IconButton style={{ width:30, height:30 ,border: isPrevious ? '1px solid black' : '1px solid white', color: isPrevious ? '#f24e1e' : 'white', backgroundColor: isPrevious ? 'black' : 'transparent' }} onMouseOver={() => setIsPrevious(true)} onMouseOut={() => setIsPrevious(false)}>
                            <ArrowBack/>
                        </IconButton>
                    </Button>}
                    style={{ backgroundColor: 'transparent' }}
                />
            </Box>
        </Box>
    )

}

export default Quotes
