import Box from '@mui/material/Box'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'

import img from '../../public/img/faq7.svg'
import compImg from '../../public/img/faq5comp.svg'
import mobileImg from '../../public/img/faq5mobile.svg'
import picMobile from '../../public/img/picture03mobile.svg'
import { Typography } from '@mui/material'

//motion
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { mainMobilePicVariant, rightVariant } from '../framer/variants'



const Faq5 = () => {


    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <>
            <Head>
                <title>FAQ</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link rel="preload" href='/fonts/Jost/Jost-Regular.ttf' as="font" crossOrigin=""/>
                <link rel="preload" href='/fonts/K2D/K2D-Medium.ttf' as="font" crossOrigin=""/>
                <link rel="preload" href='/fonts/Josefin_Sans/JosevinSans-Regular.ttf' as="font" crossOrigin=""/>
            </Head>

            <Box
                sx={{
                    '@media screen and (max-width: 980px)': {
                    display: 'none'
                    }
                }}
                >
                <Box
                    sx={{
                        position: 'absolute',
                        // top: '745%',
                        right: 0,
                        bottom: 0,
                        width: '59.6vw',
                        // height: '50%'
                        '@media screen and (max-width: 1600px)': {
                            top: '980%'
                        },
                        '@media screen and (min-width: 980px) and (max-width: 1366px)': {
                            top: '775%'
                        }
                    }}
                >
                    <Image src={img} />
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '740%',
                        right: '10%',
                        // width: '59.6vw',
                        // height: '50%',
                        '@media screen and (max-width: 1600px)': {
                            top: '970%',
                            // left: '5vw',
                        },
                        '@media screen and (min-width: 980px) and (max-width: 1366px)': {
                            top: '770%'
                        }
                    }}
                >
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={rightVariant}
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <Image src={compImg} />
                    </motion.div>
                </Box>
            </Box>

            <Box
                sx={{
                display: 'none',
                '@media screen and (max-width: 480px)': {
                    display: 'block',
                    position: 'absolute',
                    top: '1023%',
                    left: 0
                }
                }}
            >
                <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={mainMobilePicVariant}
                whileInView="visible"
                viewport={{once: true}}
                >
                <Image src={mobileImg} />
                </motion.div>
            </Box>
            <Box
                sx={{
                display: 'none',
                '@media screen and (max-width: 480px)': {
                    display: 'block',
                    position: 'absolute',
                    top: '1029%',
                    width: '80vw',
                    left: 0,
                    right: 0,
                    margin: 'auto'
                }
                }}
            >
                <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={rightVariant}
                    >
                        <Image src={compImg} />
                    </motion.div>
            </Box>

            <Box
                sx={{
                    ml: '98px', 
                    mr: '98px', 
                    pt: '98px',
                    mb: '200px',
                    '@media screen and (max-width: 1600px)': {
                      pt: '68px',
                    },
                    '@media screen and (max-width: 480px)': {
                      ml: '30px',
                      mr: '25px',
                      pt: '450px'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                        }}
                    >
                        <Box
                            sx={{
                                '@media screen and (min-width: 980px)': {
                                  width: '864px'
                                },
                                '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                  width: '650px'
                                },
                                '@media screen and (min-width: 768px) and (max-width: 980px)':{
                                  width: '550px'
                                },
                                '@media screen and (max-width: 480px)': {
                                  width: '345px',
                                  position: 'relative',
                                  zIndex: 2
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '63px',
                                    color: '#ffffff',
                                    fontFamily: 'K2D',
                                    fontWeight: 700,
                                    '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                        fontSize: '43px'
                                    },
                                    '@media screen and (max-width: 480px)': {
                                        fontSize: '29px'
                                    }
                                }}
                            >
                                BluePear in the media
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: '38px',
                                '@media screen and (min-width: 980px)': {
                                  width: '864px'
                                },
                                '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                  width: '650px'
                                },
                                '@media screen and (min-width: 768px) and (max-width: 980px)':{
                                  width: '550px'
                                },
                                '@media screen and (max-width: 480px)': {
                                  width: '345px',
                                  position: 'relative',
                                  zIndex: 2
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    color: '#ffffff',
                                    fontFamily: 'Josefin Sans',
                                    '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                        fontSize: '18px'
                                    },
                                    '@media screen and (max-width: 480px)': {
                                        fontSize: '18px'
                                    }
                                }}
                            >
                                <Box component="span" sx={{color: '#00FF66'}}>onetwothree.net</Box> - a service that will bring your company $500,000 a year
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: '38px',
                                '@media screen and (min-width: 980px)': {
                                  width: '864px'
                                },
                                '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                  width: '650px'
                                },
                                '@media screen and (min-width: 768px) and (max-width: 980px)':{
                                  width: '550px'
                                },
                                '@media screen and (max-width: 480px)': {
                                  width: '345px',
                                  position: 'relative',
                                  zIndex: 2
                                }
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: '30px',
                                    color: '#00FF66',
                                    fontFamily: 'Josefin Sans',
                                    '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                        fontSize: '18px'
                                    },
                                    '@media screen and (max-width: 480px)': {
                                        fontSize: '18px'
                                    }
                                }}
                            >
                                Text_Text_Text_Text_Text_Text_
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: '38px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '20px',
                                '@media screen and (min-width: 980px)': {
                                  width: '695px'
                                },
                                '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                  width: '550px'
                                },
                                '@media screen and (min-width: 768px) and (max-width: 980px)':{
                                  width: '450px'
                                },
                                '@media screen and (max-width: 480px)': {
                                  width: '345px',
                                  position: 'relative',
                                  zIndex: 2
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    width: '115px',
                                    height: '115px',
                                    background: '#D9D9D9',
                                    borderRadius: '20px'
                                }}
                            >
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Faq5