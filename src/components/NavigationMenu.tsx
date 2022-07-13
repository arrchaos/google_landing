import { Box, Typography } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import React, { useState } from 'react'

import logo from '../../public/img/logo.svg'
import iconMenu from '../../public/img/burger.svg'
import closeIcon from '../../public/img/plus.svg'
import Head from 'next/head';

const NavigationMenu: NextPage = () => {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
        <Head>
          <link rel="preload" href='/fonts/Jost/Jost-Regular.ttf' as="font" crossOrigin=""/>
        </Head>
        <Box
          sx={{
            position: 'fixed',
            zIndex: 4,
            display: isOpen ? 'flex' : 'none',
            justifyContent: 'space-between',
            alignItems: 'center',
            pr: '30px',
            pt: '12px',
            width: '100%'
          }}
        >
          <Link href='/'>
            <Box
                sx={{
                    cursor: 'pointer',
                    '@media screen and (max-width: 480px)': {
                      width: '170px',
                      height: '70px'
                    }
                }}
            >
                <Image src={logo} width={293} height={122} />
            </Box>
          </Link>
          <Box
            onClick={() => setIsOpen(false)}
            sx={{
              display: 'none',
              '@media screen and (max-width: 980px)': {
                display: 'block',
                transform: 'rotate(225deg)'
              }
            }}
          >
            <Image src={closeIcon} width={30} height={20} />
          </Box>
        </Box>
        <Box
          sx={{
            display: isOpen ? 'flex' : 'none',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'fixed',
            zIndex: 3,
            width: '100%',
            height: '50%',
            background: '#091C4E',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.45)',
            top: 0,
          }}
        >
          
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              ml: '98px', 
              mr: '98px', 
              pt: '51px',
              zIndex: 2,
              position: 'relative',
              '@media screen and (max-width: 480px)': {
                ml: 0,
                mr: '30px',
                pt: '100px'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                // '@media screen and (min-width: 1440px)': {
                //   margin: '0 -93px'
                // },
                height: '280px'
              }}
            >
              <Link href="/">
                <Box sx={{ cursor: 'pointer'}}>
                  <Typography
                    sx={{
                      fontSize: '28px',
                      color: router.pathname == '/' ? '#00FF66' : '#ffffff',
                      fontFamily: 'Jost'
                    }}
                  >
                    About
                  </Typography>
                </Box>
              </Link>
              <Link href="/reviews">
                <Box sx={{ cursor: 'pointer', pl: '3vw'}}>
                  <Typography
                    sx={{
                      fontSize: '28px',
                      color: router.pathname == '/reviews' ? '#00FF66' : '#ffffff',
                      fontFamily: 'Jost'
                    }}
                  >
                    Reviews
                  </Typography>
                </Box>
              </Link>
              <Link href="/faq">
                <Box sx={{ cursor: 'pointer', pl: '3vw', pr: '3vw'}}>
                  <Typography
                    sx={{
                      fontSize: '28px',
                      color: router.pathname == '/faq' ? '#00FF66' : '#ffffff',
                      fontFamily: 'Jost'
                    }}
                  >
                    FAQ
                  </Typography>
                </Box>
              </Link>
              <Link href="/">
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '133px',
                    height: '54px',
                    border: '2px solid #ffffff',
                    borderRadius: '80px',
                    cursor: 'pointer',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '28px',
                      color: '#ffffff',
                      fontFamily: 'Jost'
                    }}
                  >
                    Sign In
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            ml: '98px', 
            mr: '98px', 
            pt: '51px',
            zIndex: 2,
            position: 'relative',
            '@media screen and (max-width: 480px)': {
              ml: 0,
              mr: '30px',
              pt: '10px'
            }
          }}
        >

          <Link href='/'>
            <Box
                sx={{
                    cursor: 'pointer',
                    '@media screen and (max-width: 480px)': {
                      width: '170px',
                      height: '70px'
                    }
                }}
            >
                <Image src={logo} width={293} height={122} />
            </Box>
          </Link>
          <Box
            onClick={() => setIsOpen(true)}
            sx={{
              display: 'none',
              '@media screen and (max-width: 980px)': {
                display: 'block'
              }
            }}
          >
            <Image src={iconMenu} width={30} height={20} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              '@media screen and (max-width: 980px)': {
                display: 'none'
              }
              // '@media screen and (min-width: 1440px)': {
              //   margin: '0 -93px'
              // },
            //   margin: '0 -3vw'
            }}
          >
            <Link href="/">
              <Box sx={{ cursor: 'pointer'}}>
                <Typography
                  sx={{
                    fontSize: '38px',
                    color: router.pathname == '/' ? '#00FF66' : '#ffffff'
                  }}
                >
                  About
                </Typography>
              </Box>
            </Link>
            <Link href="/reviews">
              <Box sx={{ cursor: 'pointer', pl: '3vw'}}>
                <Typography
                  sx={{
                    fontSize: '38px',
                    color: router.pathname == '/reviews' ? '#00FF66' : '#ffffff'
                  }}
                >
                  Reviews
                </Typography>
              </Box>
            </Link>
            <Link href="/faq">
              <Box sx={{ cursor: 'pointer', pl: '3vw', pr: '3vw'}}>
                <Typography
                  sx={{
                    fontSize: '38px',
                    color: router.pathname == '/faq' ? '#00FF66' : '#ffffff'
                  }}
                >
                  FAQ
                </Typography>
              </Box>
            </Link>
            <Link href="/">
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '163px',
                  height: '74px',
                  border: '2px solid #ffffff',
                  borderRadius: '80px',
                  cursor: 'pointer',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '38px',
                    color: '#ffffff'
                  }}
                >
                  Sign In
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
    </>
  )
}

export default NavigationMenu