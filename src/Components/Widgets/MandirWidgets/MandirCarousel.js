import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, MobileStepper, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MandirCarousel = ({ item }) => {


    const [page, setPage] = useState(0); // change page when button clicks
    const maxSteps = item.length;

    console.log(`MaxSteps: ${maxSteps}`);
    console.log(`Page: ${item[0].page}`);

    const [isNext, setIsNext] = useState(false)
    const [isPrevious, setIsPrevious] = useState(false)

    const handleNext = () => {
        if (page != (maxSteps - 1)) {

            setPage((prevActiveStep) => prevActiveStep + 1);
        } else {
            setPage(0);
        }
    }

    const handlePrevious = () => {
        if (page != 0) {

            setPage((prevActiveStep) => prevActiveStep - 1);
        } else {
            setPage(maxSteps - 1);
        }
    }

    const handleStepChange = (step) => {
        setPage(step);
    };

    return (
        <Box bgcolor='#093649'>
            <Grid container>
                <Grid item xs={12}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Paper variant='outlined' style={{ background: 'transparent', marginRight: '1%', border: 'none' }}>
                            <img src='/images/home/services_sign.png' width='13px' height='16px' />
                        </Paper>
                        <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} color='white' style={{ opacity: '70%' }} fontSize='24px' marginTop='1%'>Discover Mandir of India</Typography>
                        <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} color='white' style={{ opacity: '70%' }} fontSize='12px' marginTop='1%'>Discover Mandir of India</Typography>
                        <Paper variant='outlined' style={{ background: 'transparent', marginLeft: '1%', border: 'none' }}>
                            <img src='/images/home/services_sign.png' width='13px' height='16px' />
                        </Paper>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box display='flex' justifyContent='center' alignItems='center'>
                        <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} color='white' fontSize='32px' marginTop='1%'>{item[page].region}</Typography>
                        <Typography display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }} color='white' fontSize='16px' marginTop='1%'>{item[page].region}</Typography>
                    </Box>
                </Grid>

            </Grid>

            <Box marginLeft='5%' marginRight='5%' marginTop='2%'>

                <AutoPlaySwipeableViews
                    axis='x'
                    index={page}
                    autoPlay={false}
                    interval={30000}
                    slideStyle={{ transition: '0.5s ease-in-out' }}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {item.map((step, index) => (
                        <div key={step.name1}>
                            {Math.abs(page - index) <= 2 ? (
                                <Box>
                                    <Grid container justifyContent='space-between' display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}>
                                        <Grid item xs={3.5}>
                                            <MandirCard name={item[page].name1} place={item[page].place1} content={item[page].content1} btnText={item[page].btnText} img ={item[page].img1} navlink={item[page].nav1} />
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <MandirCard name={item[page].name2} place={item[page].place2} content={item[page].content2} btnText={item[page].btnText} img={item[page].img2} navlink={item[page].nav2} />
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <MandirCard name={item[page].name3} place={item[page].place3} content={item[page].content3} btnText={item[page].btnText} img={item[page].img3} navlink={item[page].nav3} />s
                                        </Grid>
                                    </Grid>

                                    <Grid container justifyContent='space-between' display={{ xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}>
                                        <Grid item xs={3.5}>
                                            <MandirCard name={item[page].name4} place={item[page].place4} content={item[page].content4} btnText={item[page].btnText} img={item[page].img4} navlink={item[page].nav4} />
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <MandirCard name={item[page].name5} place={item[page].place5} content={item[page].content5} btnText={item[page].btnText} img={item[page].img5} navlink={item[page].nav5} />
                                        </Grid>
                                        <Grid item xs={3.5}>
                                            <MandirCard name={item[page].name6} place={item[page].place6} content={item[page].content6} btnText={item[page].btnText} img={item[page].img6} navlink={item[page].nav6} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>

                <MobileStepper variant='dots' steps={maxSteps} position='static' activeStep={page}
                    nextButton={<Button onClick={handleNext}>
                        <IconButton style={{ border: isNext ? '1px solid black' : '1px solid white', color: isNext ? '#f24e1e' : 'white', backgroundColor: isNext ? 'black' : 'transparent' }} onMouseOver={() => setIsNext(true)} onMouseOut={() => setIsNext(false)}>
                            <ArrowForward sx={{ width: 18, height: 18}}
                             > </ArrowForward>
                        </IconButton>
                    </Button>}

                    backButton={<Button onClick={handlePrevious}>
                        <IconButton style={{ border: isPrevious ? '1px solid black' : '1px solid white', color: isPrevious ? '#f24e1e' : 'white', backgroundColor: isPrevious ? 'black' : 'transparent' }} onMouseOver={() => setIsPrevious(true)} onMouseOut={() => setIsPrevious(false)}>
                            <ArrowBack sx={{ width: 18, height: 18}}>

                            </ArrowBack>
                        </IconButton>
                    </Button>}
                    style={{ backgroundColor: 'transparent' }}
                />

                {/* For md */}
                {/* <Grid container marginTop='5%' paddingBottom='5%' display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'none', xl: 'none' }}>
                    <Grid item md={5} display='flex' justifyContent='end'>
                        {activeIndex !== 0 && (<Button variant='outlined' onClick={handlePrevious} style={{ color: '#ff6505', backgroundColor: 'black', border: 'none', marginRight: '10%' }}>Prev</Button>)},
                    </Grid>
                    <Grid item md={2} display='flex' justifyContent='center' >
                        <Button variant='outlined' onClick={() => setActiveIndex(0)} style={{ color: 'white', border: activeIndex === 0 ? 'none' : '1px solid white', backgroundColor: activeIndex === 0 ? '#ff6505' : 'transparent', marginRight: '1%' }}>1</Button>,
                        <Button variant='outlined' onClick={() => setActiveIndex(1)} style={{ color: 'white', border: activeIndex === 1 ? 'none' : '1px solid white', backgroundColor: activeIndex === 1 ? '#ff6505' : 'transparent', marginRight: '1%' }}>2</Button>,
                        <Button variant='outlined' onClick={() => setActiveIndex(2)} style={{ color: 'white', border: activeIndex === 2 ? 'none' : '1px solid white', backgroundColor: activeIndex === 2 ? '#ff6505' : 'transparent', marginRight: '1%' }}>3</Button>
                    </Grid>
                    <Grid item md={5} display='flex' justifyContent='start'>
                        {activeIndex !== 2 && (<Button variant='outlined' disabled={activeIndex === 2 ? true : false} onClick={handleNext} style={{ color: '#ff6505', backgroundColor: 'black', border: 'none', marginLeft: '10%' }}>Next</Button>)},
                    </Grid>
                </Grid> */}

                {/* For xs and sm */}
                {/* <Grid container marginTop='5%' paddingBottom='5%' display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                    <Grid item xs={12} display='flex' justifyContent='center' >
                        <Button variant='outlined' onClick={() => setActiveIndex(0)} style={{ color: 'white', border: activeIndex === 0 ? 'none' : '1px solid white', backgroundColor: activeIndex === 0 ? '#ff6505' : 'transparent', fontSize: '10px' }}>1</Button>,
                        <Button variant='outlined' onClick={() => setActiveIndex(1)} style={{ color: 'white', border: activeIndex === 1 ? 'none' : '1px solid white', backgroundColor: activeIndex === 1 ? '#ff6505' : 'transparent', fontSize: '10px' }}>2</Button>,
                        <Button variant='outlined' onClick={() => setActiveIndex(2)} style={{ color: 'white', border: activeIndex === 2 ? 'none' : '1px solid white', backgroundColor: activeIndex === 2 ? '#ff6505' : 'transparent', fontSize: '10px' }}>3</Button>
                    </Grid>
                </Grid> */}
            </Box>

        </Box>
    )
}

const MandirCard = ({ name, place, content, btnText, img, navlink }) => {
    return (
        <Box borderRadius='20px' justifyContent='center' alignItems='center'>
            <Paper variant='outlined' style={{ background: 'transparent', display: 'flex', flexDirection: 'column', borderRadius: '20px' }}>
                <img src={img} />
                <Box bgcolor='white' paddingBottom='5%' borderRadius='0px 0px 15px 15px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
                        <Typography textAlign='center' style={{ fontSize: '16px', fontWeight: '500' }}>{name}</Typography>
                    </Box>
                    <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                        <Typography textAlign='center' style={{ fontSize: '8px', fontWeight: '500' }}>{name}</Typography>
                    </Box>

                    <Box display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }}>
                        <Typography textAlign='center' style={{ fontSize: '14px' }}>{place}</Typography>
                    </Box>
                    <Box display={{ xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}>
                        <Typography textAlign='center' style={{ fontSize: '4px' }}>{place}</Typography>
                    </Box>

                    <Typography display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }} style={{ fontSize: '12px', fontWeight: '500', opacity: '70%', marginLeft: '7%', marginRight: '5%' }}>{content}</Typography>

                    <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                        <NavLink to={navlink} style={{ textDecoration: 'none' }}><Button variant='outlined' style={{ backgroundColor: '#f24e1e', color: 'white', border: '1px solid #f24e1e', borderRadius: '20px', marginTop: '5%', textTransform: 'none' }} >{btnText}</Button></NavLink>
                    </Box>
                    <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
                        <NavLink to={navlink} style={{ textDecoration: 'none' }}><Button variant='outlined' style={{ backgroundColor: '#f24e1e', color: 'white', border: '1px solid #f24e1e', borderRadius: '10px', marginTop: '5%', textTransform: 'none', fontSize: '5px' }} >{btnText}</Button></NavLink>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default MandirCarousel
