import React from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';
import whyus from '../../assets/images/whyus.png';

const WhyUs = () => {
  return (
    <Box p={5} paddingInline={'75px'}>
      <Box>
        <Text fontSize={'xx-large'} ml={5}>
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
      <HStack p={5}>
        <Box w={'70%'} mr={10}>
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
        <Box display={'flex'} alignItems={'center'}>
          <Image src={whyus} alt="Logo" w={'250px'} h={'250px'} />
        </Box>
      </HStack>
    </Box>
  );
};

export default WhyUs;
