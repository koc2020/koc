import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import BM from '../../../assets/images/Kitchen Equipment Photos/Pantry & FAST FOOD/bainmarie.png';
import HDC from '../../../assets/images/Kitchen Equipment Photos/Pantry & FAST FOOD/hotdisplaycase.jpg';
import MB from '../../../assets/images/Kitchen Equipment Photos/Pantry & FAST FOOD/milk boiler.jpg';
import S from '../../../assets/images/Kitchen Equipment Photos/Pantry & FAST FOOD/salamander.jpg';
import SingleProduct from '../../SingleProduct';

const List = [
  { name: 'Bain Marie', description: '', img: BM },
  // 'Spoon Sterilizer',
  { name: 'Hot Display Case', description: '', img: HDC },
  { name: 'Salamander', description: '', img: S },
  { name: 'Milk Boiler', description: '', img: MB },
  // 'Plate Sterilizer',
];

const Pantry = () => {
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

export default Pantry;
