import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'

import img from '../../public/img/faq6.svg'
import compImg from '../../public/img/faq6comp.svg'
import mobileImg from '../../public/img/faq6mobile.svg'
import picMobile from '../../public/img/faq6comp.svg'
import plusIcon from '../../public/img/plus.svg'

//motion
import { motion, useAnimation } from 'framer-motion'
import { leftVariant, mainMobilePicVariant, topVariant } from '../framer/variants'
import { useInView } from 'react-intersection-observer'

const Faq6 = () => {

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
                        top: '925%',
                        left: 0,
                        width: '59.6vw',
                        // height: '50%'
                        '@media screen and (max-width: 1600px)': {
                            top: '1080%'
                        },
                        '@media screen and (min-width: 980px) and (max-width: 1366px)': {
                            top: '850%'
                        }
                    }}
                >
                    <Image src={img} />
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '850%',
                        left: '5%',
                        // width: '59.6vw',
                        // height: '50%',
                        '@media screen and (max-width: 1600px)': {
                            top: '1100%',
                            // left: '5vw',
                        },
                        '@media screen and (min-width: 980px) and (max-width: 1366px)': {
                            top: '865%'
                        }
                    }}
                >
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={leftVariant}
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
                    top: '1260%',
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
                    top: '1300%',
                    width: '70vw',
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
                  variants={topVariant}
                  whileInView="visible"
                  viewport={{once: true}}
                >
                  <Image src={picMobile} />
                </motion.div>
            </Box>

            <Box
                sx={{
                    ml: '98px', 
                    mr: '98px', 
                    pt: '98px',
                    mb: '383px',
                    '@media screen and (max-width: 1600px)': {
                      pt: '68px',
                    },
                    '@media screen and (max-width: 480px)': {
                      ml: '30px',
                      mr: '25px',
                      pt: '100px'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'right',
                                '@media screen and (min-width: 980px)': {
                                  width: '939px'
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
                                FAQ
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: '38px',
                                '@media screen and (min-width: 980px)': {
                                  width: '939px'
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pb: '29px',
                                    borderBottom: '1px solid #ffffff'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '779px',
                                        '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                            width: '650px'
                                          },
                                          '@media screen and (min-width: 768px) and (max-width: 980px)':{
                                            width: '550px'
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '32px',
                                            fontFamily: 'Josefin Sans',
                                            color: '#ffffff',
                                            '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                                fontSize: '24px'
                                            },
                                            '@media screen and (max-width: 480px)': {
                                                fontSize: '18px',
                                                overflowWrap: 'anywhere'
                                            }
                                        }}
                                    >
                                        How much does the service cost?
                                    </Typography>
                                </Box>
                                <Box>
                                    <Image src={plusIcon} width={27} />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pt: '38px',
                                    pb: '29px',
                                    borderBottom: '1px solid #ffffff'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '779px',
                                        '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                            width: '550px',
                                          },
                                          '@media screen and (min-width: 768px) and (max-width: 980px)':{
                                            width: '450px'
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '32px',
                                            fontFamily: 'Josefin Sans',
                                            color: '#ffffff',
                                            overflowWrap: 'anywhere',
                                            '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                                fontSize: '24px'
                                            },
                                            '@media screen and (max-width: 480px)': {
                                                fontSize: '18px',
                                                overflowWrap: 'anywhere'
                                            }
                                        }}
                                    >
                                        Text_Text_Text_Text_Text_Text_Text_Text_Text_Text
ext_Text_Text_Text_Text_Text_Text_Text_T?
                                    </Typography>
                                </Box>
                                <Box>
                                    <Image src={plusIcon} width={27} />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pt: '38px',
                                    pb: '29px',
                                    borderBottom: '1px solid #ffffff'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '779px',
                                        overflowWrap: 'anywhere',
                                        '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                            width: '450px'
                                          },
                                          '@media screen and (min-width: 768px) and (max-width: 980px)':{
                                            width: '450px'
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '32px',
                                            fontFamily: 'Josefin Sans',
                                            color: '#ffffff',
                                            '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                                fontSize: '24px'
                                            },
                                            '@media screen and (max-width: 480px)': {
                                                fontSize: '18px',
                                                overflowWrap: 'anywhere'
                                            }
                                        }}
                                    >
                                        Text_Text_Text_Text__Text_Text_Text_T?
                                    </Typography>
                                </Box>
                                <Box>
                                    <Image src={plusIcon} width={27} />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pt: '38px',
                                    pb: '29px',
                                    borderBottom: '1px solid #ffffff'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '779px',
                                        '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                            width: '550px'
                                          },
                                          '@media screen and (min-width: 768px) and (max-width: 980px)':{
                                            width: '450px'
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '32px',
                                            fontFamily: 'Josefin Sans',
                                            color: '#ffffff',
                                            '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                                fontSize: '24px'
                                            },
                                            '@media screen and (max-width: 480px)': {
                                                fontSize: '18px',
                                                overflowWrap: 'anywhere'
                                            }
                                        }}
                                    >
                                        xxxxxxxxx_Text_Text_T?
                                    </Typography>
                                </Box>
                                <Box>
                                    <Image src={plusIcon} width={27} />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    pt: '38px',
                                    pb: '29px',
                                    borderBottom: '1px solid #ffffff'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '779px',
                                        overflowWrap: 'anywhere',
                                        '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                            width: '550px'
                                          },
                                          '@media screen and (min-width: 768px) and (max-width: 980px)':{
                                            width: '450px'
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '32px',
                                            fontFamily: 'Josefin Sans',
                                            color: '#ffffff',
                                            '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                                fontSize: '24px',
                                            },
                                            '@media screen and (max-width: 480px)': {
                                                fontSize: '18px',
                                                overflowWrap: 'anywhere'
                                            }
                                        }}
                                    >
                                        Text_Text_Text_Text_Text_Text_Text_Text_Text_Text
ext_Text_Text_Text_Text_Text_Text_Text_T?
                                    </Typography>
                                </Box>
                                <Box>
                                    <Image src={plusIcon} width={27} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Faq6