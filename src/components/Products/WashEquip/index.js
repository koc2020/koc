import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import DLT from '../../../assets/images/Kitchen Equipment Photos/Washing Equipments/dish-landing-table-500x500.jpg';
import CPSR from '../../../assets/images/Kitchen Equipment Photos/Washing Equipments/ss-dish-rack-500x500.jpg';
import UR from '../../../assets/images/Kitchen Equipment Photos/Washing Equipments/ss-dish-rack-500x500.jpg';
import SSU from '../../../assets/images/Kitchen Equipment Photos/Washing Equipments/single-sink-unit-500x500.png';
import TSU from '../../../assets/images/Kitchen Equipment Photos/Washing Equipments/three-sink-unit-500x500.png';
import WMHW from '../../../assets/images/Kitchen Equipment Photos/Washing Equipments/stainless-steel-hand-wash-sink-wall-fixing-500x500.png';
import SingleProduct from '../../SingleProduct';

const List = [
  { name: 'Dish Landing Table', description: '', img: DLT },
  { name: 'Clean Plate Stocking Rack', description: '', img: CPSR },
  { name: 'Utensils Rack', description: '', img: UR },
  { name: 'Single Sink Unit', description: '', img: SSU },
  { name: 'Three Sink Unit', description: '', img: TSU },
  { name: 'Wall Mounted Hand Washing', description: '', img: WMHW },
];

const WashEquip = () => {
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

export default WashEquip;
