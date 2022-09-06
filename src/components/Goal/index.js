import React from 'react';
import { Box, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { TiArrowRightThick } from 'react-icons/ti';

const Goal = () => {
  return (
    <Box px={{ base: '50px', lg: 10 }} pt={{ base: 1, lg: 10 }}>
      <Box>
        <Text fontSize={'xx-large'} ml={{ base: 1, lg: 5 }}>
          Our Goal
        </Text>
        <Box
          mt={2}
          w={'100%'}
          h={'3px'}
          bgColor={'#f6821f'}
          borderRadius={'full'}
        ></Box>
      </Box>
      <List p={{ base: 1, lg: 5 }} spacing={3}>
        <ListItem>
          <ListIcon as={TiArrowRightThick} color="orange.500" />
          To expand our business knowledge to anchor a strong position in the
          market.
        </ListItem>
        <ListItem>
          <ListIcon as={TiArrowRightThick} color="orange.500" />
          To build extensive industry knowledge to provide continuous solutions
          to our customers.
        </ListItem>
        <ListItem>
          <ListIcon as={TiArrowRightThick} color="orange.500" />
          To study the market gap and fix it with a solution.To provide
          automation solutions to the customer to make business more accessible
          and economical.
        </ListItem>
        <ListItem>
          <ListIcon as={TiArrowRightThick} color="orange.500" />
          To produce highly qualified and quality products with cost-effective
          and timely delivery.
        </ListItem>
        <ListItem>
          <ListIcon as={TiArrowRightThick} color="orange.500" />
          To develop advanced and highly featured products for our customers To
          expand our business with diversified products to all the kitchen
          industry.
        </ListItem>
        <ListItem>
          <ListIcon as={TiArrowRightThick} color="orange.500" />
          To become a professional leader in the market.
        </ListItem>
      </List>
    </Box>
  );
};

export default Goal;
