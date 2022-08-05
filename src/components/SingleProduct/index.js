import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const SingleProduct = ({ props }) => {
  return (
    <Box
      p={5}
      display={{ base: 'block', md: 'flex' }}
      justifyContent={'center'}
    >
      <Box w={{ base: '100%', md: '30%' }}>
        <Image src={props.element.img} alt={props.element.name} />
      </Box>
      <Box w={{ base: '100%', md: '70%' }}>
        <Box>
          <Text ml={2}>
            <b>Description</b>
          </Text>
          <Box
            mt={1}
            w={'100%'}
            h={'3px'}
            bgColor={'#f6821f'}
            borderRadius={'full'}
          ></Box>
        </Box>
        <Box p={3}>
          <Text>{props.element.description}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
