import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Client = () => {
  return (
    <Box h={'400px'} p={5} paddingInline={'75px'}>
      <Box>
        <Text fontSize={'xx-large'} ml={10}>
          Our Clients
        </Text>
        <Box
          mt={2}
          w={'100%'}
          h={'3px'}
          bgColor={'#f6821f'}
          borderRadius={'full'}
        ></Box>
      </Box>
    </Box>
  );
};

export default Client;
