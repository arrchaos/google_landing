import { Box } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect } from 'react'

import img from '../../public/img/faq2.svg'
import compImg from '../../public/img/faq2comp.svg'
import mobileImg from '../../public/img/faq2mobile.svg'
import picMobile from '../../public/img/picture03mobile.svg'
import Typography from '@mui/material/Typography'

//motion
import { motion, useAnimation } from 'framer-motion'
import { mainMobilePicVariant, topVariant } from '../framer/variants'
import { useInView } from 'react-intersection-observer'

const Faq2 = () => {

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
                        top: '400%',
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        width: '100vw',
                        // height: '50%'
                        '@media screen and (max-width: 1600px)': {
                            top: '505%'
                        },
                        '@media screen and (min-width: 980px) and (max-width: 1366px)': {
                           top: '403%' 
                        }
                    }}
                >
                    <Image src={img} />
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: '450%',
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        width: '567px',
                        height: '428px',
                        // height: '50%',
                        '@media screen and (max-width: 1600px)': {
                            top: '550%',
                            width: '467px'
                        },
                        '@media screen and (min-width: 980px) and (max-width: 1366px)': {
                            top: '435%',
                            width: '437px'
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
                    top: '560%',
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
                    top: '585%',
                    width: '65vw',
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
                  <Image src={compImg} />
                </motion.div>
            </Box>

            <Box
                sx={{
                    ml: '98px', 
                    mr: '98px', 
                    pt: '98px',
                    '@media screen and (max-width: 1600px)': {
                      pt: '68px'
                    },
                    '@media screen and (max-width: 480px)': {
                      ml: '30px',
                      mr: '25px',
                      pt: '250px'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                textAlign: 'center',
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
                                    fontWeight: 700,
                                    fontSize: '63px',
                                    color: '#ffffff',
                                    fontFamily: 'K2D',
                                    '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                        fontSize: '40px'
                                    },
                                    '@media screen and (max-width: 480px)': {
                                        fontSize: '29px'
                                    }
                                }}
                            >
                                What is OneTwoThree.net?
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: '50px',
                                textAlign: 'center',
                                '@media screen and (min-width: 980px)': {
                                  width: '1243px'
                                },
                                '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                  width: '950px'
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
                                    fontSize: '36px',
                                    fontFamily: 'Josefin Sans',
                                    color: '#ffffff',
                                    '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                        fontSize: '21px'
                                    },
                                    '@media screen and (max-width: 480px)': {
                                        fontSize: '18px'
                                    }
                                }}
                            >
                                Bluepear.net is an anti-fraud solution that helps big brands track webmasters who drive contextual traffic to their brand via affiliate networks.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                mt: '44px',
                                width: '1392px',
                                '@media screen and (max-width: 1600px) and (min-width: 980px)': {
                                    width: '1200px'
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
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '40px',
                                        fontFamily: 'Josefin Sans',
                                        color: '#00FF66',
                                        '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                            fontSize: '24px'
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            fontSize: '23px'
                                        }
                                    }}
                                >
                                    Purpose
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: '1084px',
                                    height: '100px',
                                    textAlign: 'center'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '30px',
                                        fontFamily: 'Josefin Sans',
                                        color: '#ffffff',
                                        '@media screen and (min-width: 320px) and (max-width: 980px)': {
                                            fontSize: '18px'
                                        },
                                    }}
                                >
                                    Our goal is to help large companies to protect themselves from such situations.
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: '100%',
                                mt: '79px'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '251px',
                                        height: '100px',
                                        background: 'linear-gradient(180deg, #CF46FF 0%, #3C90FF 100%)',
                                        textAlign: 'center',
                                        pt: '25px',
                                        pb: '25px',
                                        pl: '35px',
                                        pr: '35px',
                                        borderRadius: '34px',
                                        '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                            width: '151px',
                                            height: '75px',
                                            borderRadius: '25px'
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            width: '151px',
                                            height: '74px',
                                            pt: '17px',
                                            pl: '10px',
                                            pr: '10px',
                                            borderRadius: '20px'
                                        }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '36px',
                                            color: '#ffffff',
                                            fontFamily: 'Josefin Sans',
                                            '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                                fontSize: '18px'
                                            },
                                            '@media screen and (max-width: 480px)': {
                                                fontSize: '32px'
                                            }
                                        }}
                                    >
                                        +50 000 
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: '29px',
                                        color: '#ffffff',
                                        fontFamily: 'Josefin Sans',
                                        '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                            fontSize: '18px'
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            fontSize: '14px'
                                        }
                                    }}
                                >
                                    Text_Text_Text_Text_Text
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '251px',
                                        height: '100px',
                                        background: 'linear-gradient(180deg, #CF46FF 0%, #3C90FF 100%)',
                                        textAlign: 'center',
                                        pt: '25px',
                                        pb: '25px',
                                        pl: '35px',
                                        pr: '35px',
                                        borderRadius: '34px',
                                        '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                            width: '151px',
                                            height: '75px',
                                            borderRadius: '25px'
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            width: '151px',
                                            height: '74px',
                                            pt: '17px',
                                            pl: '10px',
                                            pr: '10px',
                                            borderRadius: '20px'
                                        }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: '36px',
                                            color: '#ffffff',
                                            fontFamily: 'Josefin Sans',
                                            '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                                fontSize: '18px'
                                            },
                                            '@media screen and (max-width: 480px)': {
                                                fontSize: '32px'
                                            }
                                        }}
                                    >
                                        +50 000 
                                    </Typography>
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: '29px',
                                        color: '#ffffff',
                                        fontFamily: 'Josefin Sans',
                                        '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                            fontSize: '18px'
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            fontSize: '14px'
                                        }
                                    }}
                                >
                                    Text_Text_Text_Text_Text
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                width: '426px',
                                mt: '219px',
                                '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                    width: '226px',
                                    mt: '119px'
                                },
                                '@media screen and (max-width: 480px)': {
                                    width: '230px',
                                    mt: '240px'
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignSelf: 'flex-start'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '40px',
                                        fontFamily: 'Josefin Sans',
                                        color: '#ffffff',
                                        '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                            fontSize: '24px'
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            fontSize: '21px'
                                        }
                                    }}
                                >
                                    over
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignSelf: 'center'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '96px',
                                        fontWeight: 700,
                                        fontFamily: 'Josefin Sans',
                                        color: '#00FF66',
                                        lineHeight: '96px',
                                        '@media screen and (min-width: 389px) and (max-width: 980px)': {
                                            fontSize: '48px',
                                            lineHeight: '48px'
                                        },
                                    }}
                                >
                                    $ 1million
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignSelf: 'flex-end'
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: '40px',
                                        fontFamily: 'Josefin Sans',
                                        color: '#ffffff',
                                        '@media screen and (min-width: 768px) and (max-width: 980px)': {
                                            fontSize: '24px'
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            fontSize: '21px'
                                        }
                                    }}
                                >
                                    saved
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Faq2