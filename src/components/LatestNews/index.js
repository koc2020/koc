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
    description:
      'This is an contempoaray style dinning table for a pleasant and theme based dinning. It will be more comfortable for customers to have a fine dinning.',
  },
  {
    imageUrl: SC,
    imageAlt: 'Service Counter',
    title: 'Service Counter',
    description:
      'Service counter for star dinning. This has multiple rows for storage for table serve products like water bottles, soft drinks, etc.',
  },
  {
    imageUrl: WB,
    imageAlt: 'Wash Basin',
    title: 'Wash Basin',
    description:
      'Stainless Steel with 304 grade wash basin for hotel wash room. It has flexible taps which aids customers to wash as per their comfort.',
  },
];

const LatestNews = () => {
  return (
    <Box px={{ base: '50px', lg: 10 }} pt={{ base: 1, lg: 10 }}>
      <Box>
        <Text
          fontSize={{ base: 'x-large', lg: 'xx-large' }}
          ml={{ base: 1, md: 10 }}
        >
          Latest Update
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
        minChildWidth={{ base: '250px', lg: '400px' }}
        spacing="10px"
        p={{ base: 0, md: 5 }}
        pt={5}
      >
        {property.map((ele, index) => (
          <Box
            key={index}
            w={{ base: '250px', lg: '400px' }}
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
                  fontSize={{ base: 'md', lg: 'large' }}
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

              <Box fontSize={{ base: 'sm', lg: 'md' }}>{ele.description}</Box>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default LatestNews;
