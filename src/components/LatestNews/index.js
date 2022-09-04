import { Box, SimpleGrid, Text, Image, Badge } from '@chakra-ui/react';
import React from 'react';
import DT from '../../assets/images/latestnews/DiningTable.jpeg';
import SC from '../../assets/images/latestnews/ServiceCounter.jpeg';
import WB from '../../assets/images/latestnews/WashBasin.jpeg';
const property = [
  {
    imageUrl: DT,
    imageAlt: 'Dining Table',
    title: 'Dining Table',
    description: '$1,900.00',
  },
  {
    imageUrl: SC,
    imageAlt: 'Service Counter',
    title: 'Service Counter',
    description: '$1,900.00',
  },
  {
    imageUrl: WB,
    imageAlt: 'Wash Basin',
    title: 'Wash Basin',
    description: '$1,900.00',
  },
];

const LatestNews = () => {
  return (
    <Box px={[1, 10]} pt={[1, 10]} paddingInline={'75px'}>
      <Box>
        <Text fontSize={'xx-large'} ml={[1, 10]}>
          Latest News
        </Text>
        <Box
          mt={2}
          w={'100%'}
          h={'3px'}
          bgColor={'#f6821f'}
          borderRadius={'full'}
        ></Box>
      </Box>
      <SimpleGrid
        minChildWidth={{ base: '300px', md: '400px' }}
        spacing="40px"
        p={[0, 5]}
        pt={5}
      >
        {property.map((ele, index) => (
          <Box
            key={index}
            w={{ base: '300px', md: '400px' }}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              src={ele.imageUrl}
              alt={ele.imageAlt}
              w={'inherit'}
              h={'250px'}
              objectFit={'cover'}
            />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Box
                  mr={2}
                  fontSize={'large'}
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  {ele.title}
                </Box>
                <Badge borderRadius="full" px="4" colorScheme="teal">
                  New
                </Badge>
              </Box>

              <Box>
                {ele.description}
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default LatestNews;
