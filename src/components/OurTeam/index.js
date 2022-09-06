import React from 'react';
import { Box, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { TiArrowRightThick } from 'react-icons/ti';
import { Fade } from 'react-reveal';

const Team = () => {
  return (
    <Box px={{ base: '50px', lg: 10 }} pt={{ base: 1, lg: 10 }}>
      <Box>
        <Text fontSize={'xx-large'} ml={{ base: 1, lg: 5 }}>
          Our Team
        </Text>
        <Box
          mt={2}
          w={'100%'}
          h={'3px'}
          bgColor={'#f6821f'}
          borderRadius={'full'}
        ></Box>
      </Box>
      <Box p={5}>
        <Text>
          We have a highly knowledged team with solution architects and trained
          technicians to serve a diverse product. The below parameters bound our
          center of attention to deliver a satisfying outcome to our customers.
        </Text>
        <Fade bottom>
          <List p={{ base: 1, lg: 5 }} spacing={3}>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              Meet product quality.
            </ListItem>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              Focus on Client satisfaction.
            </ListItem>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              Best on quality testing.
            </ListItem>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              Timely delivery.
            </ListItem>
            <ListItem>
              <ListIcon as={TiArrowRightThick} color="orange.500" />
              Satisfied Installation.
            </ListItem>
          </List>
        </Fade>
      </Box>
    </Box>
  );
};

export default Team;
