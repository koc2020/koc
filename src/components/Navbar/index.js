import {
  Box,
  HStack,
  Image,
  Link,
  IconButton,
  Text,
  Stack,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import Logo from '../../assets/images/Logo.png';
import styles from './styles.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FiDownload } from 'react-icons/fi';
import pdf from '../../assets/documents/KOC__Phamplet.pdf';

const Links = ['Home', 'Profile', 'Product', 'About', 'Contact'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    href={`/${children}`}
    className={styles.navhover}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w={'100%'} pos={'fixed'} zIndex={'9'} bgColor={'orange.500'}>
      <Flex h={'125px'} className={styles.container}>
        <Box w={'100%'} h={'inherit'} className={styles.background}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            ml={7}
            bgColor={'orange.500'}
            onClick={isOpen ? onClose : onOpen}
          />
          <Image
            src={Logo}
            alt="Logo"
            w={'200px'}
            h={'90px'}
            ml={[0, 5]}
            mr={[7, 0]}
          />
          <Box
            w={'70vw'}
            h={'100%'}
            mr={10}
            display={{ base: 'none', md: 'flex' }}
            justifyContent={'center'}
            alignItems={'flex-end'}
            flexDir={'column'}
          >
            <HStack display={'flex'} justifyContent={'center'} w={'35%'}>
              <a href={pdf} download>
                <Box
                  bgColor={'#f6821f'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  flexDir={'row'}
                  p={'0.5'}
                  paddingInline={'5'}
                  borderRadius={'20px'}
                  cursor={'pointer'}
                  mr={'20px'}
                >
                  <Text paddingRight={'10px'}>Get Brochure</Text>
                  <FiDownload />
                </Box>
              </a>
              <Box
                bgColor={'white'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexDir={'row'}
                p={'0.5'}
                paddingInline={'5'}
                borderRadius={'20px'}
              >
                <FaPhoneAlt />
                <Text paddingLeft={'10px'}>+91 95000 56773</Text>
              </Box>
            </HStack>
            ;
            <HStack
              bgColor={'#f6821f'}
              className={styles.navbox}
              w={'fit-content'}
              color={'white'}
            >
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </Box>
        </Box>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map(link => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
