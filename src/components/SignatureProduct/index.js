import React from 'react';
import { Box, Text, Image, List, ListIcon, ListItem } from '@chakra-ui/react';
import ASB from '../../assets/images/latestnews/AutomaticSteamBoiler.jpg';
import styles from './styles.module.css';
import { TiArrowRightThick } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const SignatureProduct = () => {
  return (
    <Box px={{ base: '50px', lg: 10 }} pt={{ base: 1, lg: 10 }} zIndex={5}>
      <Box>
        <Text fontSize={{ base: 'x-large', lg: 'xx-large' }} ml={[1, 10]}>
          Signature Product: Automatic Steam Boiler
        </Text>
        <Box
          mt={2}
          w={'100%'}
          h={'3px'}
          bgColor={'#f6821f'}
          borderRadius={'full'}
        ></Box>
      </Box>
      <Box
        className={styles.flexContainer}
        w={'100%'}
        justifyContent={'center'}
        alignContent={'center'}
        p={{ base: 0, lg: 5 }}
        pt={5}
      >
        <Box
          w={{ base: '100%', lg: 'max-content' }}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          mt={5}
        >
          <Image src={ASB} alt="Logo" w={'250px'} h={'320px'} />
        </Box>
        <Box className={styles.flexitem1} m={{ base: 0, lg: 5 }} my={5}>
          <Text>
            This is an unique product from KOC. It is specially designed for
            Commercial {'&'} Industrial Kitchen space produce{' '}
            <b>
              high pressure steam at a rate of 4 kg/cm<sup>2</sup> in 7 mins
            </b>
          </Text>
          <Box mt={[5, 10]}>
            <Text fontSize={'large'} ml={[1, 5]}>
              Benefits:
            </Text>
            <Box
              mt={2}
              w={'100%'}
              h={'2px'}
              bgColor={'#f6821f'}
              borderRadius={'full'}
            ></Box>
          </Box>
          <List p={[1, 5]} spacing={1.5}>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              Save Gas {'&'} Water
            </ListItem>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              One Switch process
            </ListItem>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              Auto - Sensing
            </ListItem>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              Auto Stabilization
            </ListItem>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              Fast Cooking
            </ListItem>
          </List>
          <Box color={'orange.500'}>
            <Link to={'Product/product/AutomaticSteamBoiler'}>
              Know More {'>>>'}
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        w={'100%'}
        display={'flex'}
        justifyContent={'center'}
        color={'orange.500'}
      >
        <FaQuoteLeft />
        <Text
          px={1}
          w={'fit-content'}
          textAlign={'center'}
          fontSize={{ base: 'large', lg: 'x-large' }}
        >
          Meet all safety line with precautionary measures
        </Text>
        <FaQuoteRight />
      </Box>
    </Box>
  );
};

export default SignatureProduct;
