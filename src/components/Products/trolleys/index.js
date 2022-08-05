import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import MT from '../../../assets/images/Kitchen Equipment Photos/Trolleys/masala trolley.png';
import PT from '../../../assets/images/Kitchen Equipment Photos/Trolleys/platform trolley.jpg';
import WCT from '../../../assets/images/Kitchen Equipment Photos/Trolleys/portable-stainless-steel-garbage-trolley-500x500.png';
import TST from '../../../assets/images/Kitchen Equipment Photos/Trolleys/tea-snack-trolley-500x500.jpg';
import HFST from '../../../assets/images/Kitchen Equipment Photos/Trolleys/Stainless-Steel-Housekeeping-Trolley-with-Brushed-Finish.jpg';
import HKT from '../../../assets/images/Kitchen Equipment Photos/Trolleys/hot-food-trolley-500x500.jpg';
import SingleProduct from '../../SingleProduct';

const List = [
  { name: 'House Keeping Trolley', description: '', img: HKT },
  { name: 'Hot Food Service Trolley', description: '', img: HFST },
  { name: 'Waste Collection Trolley', description: '', img: WCT },
  { name: 'Tea Snacks Service Trolly', description: '', img: TST },
  { name: 'Masala Trolley', description: '', img: MT },
  { name: 'Platform Trolly', description: '', img: PT },
];

const Trolley = () => {
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

export default Trolley;
