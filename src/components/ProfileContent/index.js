import React from 'react';
import { Box, VStack, Spacer, Text } from '@chakra-ui/react';

const ProfileContent = () => {
  return (
    <Box px={{ base: '50px', lg: 10 }} pt={{ base: 1, lg: 10 }}>
      <Box>
        <Text fontSize={'xx-large'} ml={{ base: 1, lg: 5 }}>
          Our Profile
        </Text>
        <Box
          mt={2}
          w={'100%'}
          h={'3px'}
          bgColor={'#f6821f'}
          borderRadius={'full'}
        ></Box>
      </Box>
      <VStack p={{ base: 0, lg: 5 }} pt={5}>
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
        <Spacer />
        <Text>
          In this modern era, the food industry is growing fast and requires an
          easy and economical solution to deliver their business. To accommodate
          this, customizing the product is one of the best solutions instead of
          looking for the product to suit the place. We provide you with the
          best solution for our business process.
        </Text>
        <Spacer />
        <Text w={'100%'}>
          With this broad knowledge, we have developed many solutions for our
          customers, improving their business and solving their problems.
        </Text>
        <Text w={'100%'}>
          We take you through the complete consultation and provide the
          end-to-end solution to achieve your dream in the food industry.
        </Text>
      </VStack>
    </Box>
  );
};

export default ProfileContent;
