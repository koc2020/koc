import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import whyus from '../../assets/images/whyus.png';
import { Fade } from 'react-reveal';
import styles from './styles.module.css';

const WhyUs = () => {
  return (
    <Box p={5} paddingInline={[0, '75px']}>
      <Box>
        <Text fontSize={'xx-large'} ml={[0, 5]}>
          Why Us
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
        p={[0, 5]}
        pt={5}
      >
        <Box className={styles.flexitem1} mr={10}>
          <Text>
            To meet the customer requirement, we follow the below process, which
            gives a quality product with our professional approach, builds a
            friendly {'&'} healthy relationship with the customer, and gains
            their trust. Once the customer approaches us, we take the
            responsibility of providing end-to-end solutions and making them
            satisfied with us.
          </Text>
          <br />
          <Text>
            Our key focus on the customers is giving solutions to our customers
            and not products. If we stand with the product, it's just a product
            delivery, but if we stand with the answer, we deliver a step to
            enhance your business.
          </Text>
        </Box>
        <Fade right>
          <Box
            w={{ base: '100%', md: 'max-content' }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            mt={5}
          >
            <Image src={whyus} alt="Logo" w={'250px'} h={'250px'} />
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default WhyUs;
