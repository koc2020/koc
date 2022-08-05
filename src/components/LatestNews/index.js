import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import styles from './styles.module.css';

const LatestNews = () => {
  return (
    <Box p={[1, 10]} paddingInline={'75px'}>
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
      <SimpleGrid minChildWidth="250px" spacing="40px" p={[0, 5]} pt={5}>
        <Box h={'250px'} borderRadius={'base'} className={styles.shadow} p={5}>
          <Text fontSize={'x-large'} mb={[2, 4]}>
            Lorem Ipsum
          </Text>
          <Text>
            Lorem ipsum dolor sit amet. Et architecto voluptatibus et ullam
            deserunt et minus vitae nam harum quae sunt reiciendis? Molestias
            itaque ut odit omnis et atque voluptas est similique sequi ut
            dignissimos
          </Text>
        </Box>
        <Box h={'250px'} borderRadius={'base'} className={styles.shadow} p={5}>
          <Text fontSize={'x-large'} mb={[2, 4]}>
            Lorem Ipsum
          </Text>
          <Text>
            Lorem ipsum dolor sit amet. Et architecto voluptatibus et ullam
            deserunt et minus vitae nam harum quae sunt reiciendis? Molestias
            itaque ut odit omnis et atque voluptas est similique sequi ut
            dignissimos
          </Text>
        </Box>
        <Box h={'250px'} borderRadius={'base'} className={styles.shadow} p={5}>
          <Text fontSize={'x-large'} mb={[2, 4]}>
            Lorem Ipsum
          </Text>
          <Text>
            Lorem ipsum dolor sit amet. Et architecto voluptatibus et ullam
            deserunt et minus vitae nam harum quae sunt reiciendis? Molestias
            itaque ut odit omnis et atque voluptas est similique sequi ut
            dignissimos
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default LatestNews;
