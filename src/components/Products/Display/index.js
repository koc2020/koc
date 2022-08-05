import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import CGDC from '../../../assets/images/Kitchen Equipment Photos/display counters/curved glass.jpg';
import teaC from '../../../assets/images/Kitchen Equipment Photos/display counters/tea counter.jpg';
import straightC from '../../../assets/images/Kitchen Equipment Photos/display counters/straight glass counter.png';
import pavC from '../../../assets/images/Kitchen Equipment Photos/display counters/pav bhaji.jpg';
import ssCC from '../../../assets/images/Kitchen Equipment Photos/display counters/ss chat counter.jpg';
import ssPC from '../../../assets/images/Kitchen Equipment Photos/display counters/ss parcel counter.jpg';
import SingleProduct from '../../SingleProduct';

const List = [
  {
    name: 'Curved Glass Display Counters',
    description: 'Curved Glass Display Counters',
    img: CGDC,
  },
  {
    name: 'Tea / Coffee Counter',
    description: 'Tea / Coffee Counter',
    img: teaC,
  },
  {
    name: 'Straight Glass Display Counter',
    description: 'Straight Glass Display Counter',
    img: straightC,
  },
  {
    name: 'Pav Bhaji Counter',
    description: 'Pav Bhaji Counter',
    img: pavC,
  },
  {
    name: 'SS Parcel Counter',
    description: 'SS Parcel Counter',
    img: ssPC,
  },
  {
    name: 'SS Chat Counter',
    description: 'SS Chat Counter',
    img: ssCC,
  },
];

const Display = () => {
  return (
    <Box p={10}>
      <Tabs size="md" colorScheme={'orange'}>
        <TabList
          overflowX={'auto'}
          overflowY={'hidden'}
          sx={{
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {List.map((element, index) => (
            <Tab key={index}>{element.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {List.map((element, index) => (
            <TabPanel key={index}>
              <SingleProduct props={{ element }} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Display;
