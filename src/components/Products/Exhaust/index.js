import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import AFF from '../../../assets/images/Kitchen Equipment Photos/Kitchen Exhaust system/Axial Flow Fan.png';
import BTF from '../../../assets/images/Kitchen Equipment Photos/Kitchen Exhaust system/baffle type filter.png';
import CB from '../../../assets/images/Kitchen Equipment Photos/Kitchen Exhaust system/Centrifugal Blower.png';
import HEEH from '../../../assets/images/Kitchen Equipment Photos/Kitchen Exhaust system/high effciency exhaust hoods.jpg';
import SKH from '../../../assets/images/Kitchen Equipment Photos/Kitchen Exhaust system/Standard Kitchen Hoods.jpg';
import SingleProduct from '../../SingleProduct';

const List = [
  { name: 'Axial Flow Fan', description: '', img: AFF },
  { name: 'Centrifugal Blower', description: '', img: CB },
  { name: 'Baffle Type Filter', description: '', img: BTF },
  { name: 'High Efficiency Exhaust Hoods', description: '', img: HEEH },
  { name: 'Standard Kitchen Hoods', description: '', img: SKH },
];

const Exhaust = () => {
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

export default Exhaust;
