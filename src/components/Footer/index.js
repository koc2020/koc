import { Box, Text, VStack, Divider, Stack, Link } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { TiLocation } from 'react-icons/ti';
import {
  FaPhoneAlt,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaRegCopyright,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
import { GrLinkedinOption } from 'react-icons/gr';
import { Fade } from 'react-reveal';

const Footer = () => {
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handlescroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handlescroll);
    };
  }, []);

  const handlescroll = () => {
    const position = window.pageYOffset;
    if (position > 800) {
      setshow(true);
    } else {
      setshow(false);
    }
  };

  return (
    <Box>
      {show ? (
        <Fade bottom>
          <Box
            pos={'relative'}
            top={'18px'}
            zIndex={'2'}
            display={'flex'}
            justifyContent={'flex-end'}
            pr={10}
          >
            <Box
              w={'40px'}
              h={'40px'}
              bgColor={'#f6821f'}
              borderRadius={'base'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              cursor={'pointer'}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <IoIosArrowUp />
            </Box>
          </Box>
        </Fade>
      ) : (
        <></>
      )}
      <Box>
        <div className={styles.container}>
          <Box
            w={'100%'}
            display={'flex'}
            justifyContent={'center'}
            py={'6vh'}
            h={'inherit'}
            className={styles.background}
          >
            <Box w={'20vw'} display={{ base: 'none', md: 'block' }}>
              <Text
                fontSize={'x-large'}
                color={'#f6821f'}
                fontWeight={'semibold'}
                textAlign={'center'}
              >
                UseFul Links
              </Text>
              <VStack mt={5} color={'white'} h={'inherit'} fontSize={'larger'}>
                <Link href="/">
                  <Text cursor={'pointer'}>Home</Text>
                </Link>
                <Link href={'/profile'}>
                  <Text cursor={'pointer'}>Profile</Text>
                </Link>
                <Link href="/product">
                  <Text cursor={'pointer'}>Products</Text>
                </Link>
                <Link href="/about">
                  <Text cursor={'pointer'}>About Us</Text>
                </Link>
                <Link href="/contact">
                  <Text cursor={'pointer'}>Contact</Text>
                </Link>
              </VStack>
            </Box>
            <Stack direction={'row'}>
              <Divider
                orientation="vertical"
                display={{ base: 'none', md: 'flex' }}
              />
              <Box w={'40vw'}>
                <VStack>
                  <Text
                    w={{ base: '90%', md: '80%' }}
                    fontSize={'x-large'}
                    color={'#f6821f'}
                    fontWeight={'semibold'}
                    textAlign={'start'}
                    mb={5}
                  >
                    Contact
                  </Text>
                  <Box
                    display={'flex'}
                    w={{ base: '100%', md: '90%' }}
                    justifyContent={'start'}
                  >
                    <Text fontSize={{ base: '20px', md: '24px' }} pr={3}>
                      <TiLocation style={{ color: '#f6921f' }} />
                    </Text>
                    <Text
                      color={'white'}
                      fontSize={{ base: '13px', md: '15px' }}
                    >
                      74, Thendral Nagar, Manali Main Road, Near Thiruthangal
                      Nadar College,
                      <br /> Selaivayal, Chennai, Tamil Nadu 600051.
                    </Text>
                  </Box>
                  <Box
                    display={'flex'}
                    w={'90%'}
                    pt={3}
                    justifyContent={'flex-start'}
                  >
                    <Text fontSize={{ base: '16px', md: '20px' }} pr={3}>
                      <FaPhoneAlt style={{ color: '#f6921f' }} />
                    </Text>
                    <Text
                      color={'white'}
                      fontSize={{ base: '13px', md: '15px' }}
                    >
                      +91 98409 40123
                    </Text>
                  </Box>
                  <Box
                    display={'flex'}
                    w={'90%'}
                    pt={3}
                    justifyContent={'flex-start'}
                  >
                    <Text fontSize={{ base: '16px', md: '20px' }} pr={3}>
                      <MdEmail style={{ color: '#f6921f' }} />
                    </Text>
                    <Link href="mailto: kocequips@outlook.com">
                      <Text
                        color={'white'}
                        fontSize={{ base: '13px', md: '15px' }}
                      >
                        kocequips@outlook.com
                      </Text>
                    </Link>
                  </Box>
                </VStack>
              </Box>
            </Stack>
            <Box w={{ md: '50vw', lg: '30vw' }} pt={10}>
              <Text
                fontFamily={'fontastique'}
                fontSize={{ base: '20px', md: '30px', lg: '40px' }}
                color={'#f6921f'}
                textAlign={'end'}
                textDecoration={'white underline'}
                textUnderlineOffset={{ base: '6px', md: '9px', lg: '12px' }}
              >
                Kitchen <span style={{ color: 'white' }}>'O'</span> Cant Equips
              </Text>
              <Text
                fontFamily={'epoco'}
                fontSize={{ base: '10px', md: 'sm', lg: 'lg' }}
                color={'white'}
                textAlign={'end'}
              >
                Manufacturers of Commerical Kitchen Equipments
              </Text>
              <Box
                mt={7}
                w={'100%'}
                display={'flex'}
                justifyContent={'flex-end'}
                color={'#f6821f'}
                fontSize={{ base: '25px', md: '30px' }}
              >
                <a
                  href="https://api.whatsapp.com/send?phone=919994956773"
                  target="popup"
                >
                  <Box p={2.5} _hover={{ color: 'white' }} title={'9994956773'}>
                    <FaWhatsapp />
                  </Box>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100079118667096"
                  target="popup"
                >
                  <Box p={2.5} _hover={{ color: 'white' }}>
                    <FaFacebook />
                  </Box>
                </a>
                <a
                  href="https://www.linkedin.com/in/kitchen-o-cant-equips-2b2a25221"
                  target="popup"
                >
                  <Box p={2.5} _hover={{ color: 'white' }}>
                    <GrLinkedinOption />
                  </Box>
                </a>
                <a
                  href="https://www.instagram.com/kitchenocantequips/"
                  target="popup"
                >
                  <Box p={2.5} _hover={{ color: 'white' }}>
                    <FaInstagram />
                  </Box>
                </a>
                <a href="https://twitter.com/kocequips" target="popup">
                  <Box p={2.5} _hover={{ color: 'white' }}>
                    <FaTwitter />
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>
      <Box
        h={'25px'}
        bgColor={'#f6821f'}
        display={'flex'}
        justifyContent={'center'}
      >
        <Text>
          Copyrights <FaRegCopyright style={{ display: 'inline' }} /> 2022,
          Kitchen <span style={{ color: 'white' }}>'O'</span> Cant Equips
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
