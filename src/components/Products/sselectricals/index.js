import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import EIB from '../../../assets/images/Kitchen Equipment Photos/Special Electrical products/electrical idly box.png';
import EDT from '../../../assets/images/Kitchen Equipment Photos/Special Electrical products/electrical dosa tawa.jpg';
import SingleProduct from '../../SingleProduct';

const List = [
  { name: 'Electrical Idly Box', description: '', img: EIB },
  { name: 'Electrical Dosa Tawa', description: '', img: EDT },
];

const SSelectricals = () => {
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

export default SSelectricals;
