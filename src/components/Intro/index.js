import React from 'react';
import { Box, Spacer, Text, VStack } from '@chakra-ui/react';

const Intro = () => {
  return (
    <Box p={10} paddingInline={'75px'}>
      <VStack paddingInline={5}>
        <Text>
          Kitchen 'O' Cant Equips has been a startup since 2021. Even though we
          are a startup, we have had robust industry knowledge for over three
          decades. Before stepping into the manufacturing of commercial {'&'}
          industrial kitchen equipment, we were providing consultation to market
          people and the customers.
        </Text>
        <Spacer />
        <Text>
          The vast industry experience and the core industry knowledge made us
          start this company. We manufacture and repair various commercial and
          industrial kitchen equipment for multiple industries. As we have been
          in the field of consultation, our primary focus will be providing a
          solution to the customer on the business improvement. Keeping this in
          mind and continuous R {'&'} D helped us offer automation solutions to
          our customers with one switch process.
        </Text>
      </VStack>
    </Box>
  );
};

export default Intro;
