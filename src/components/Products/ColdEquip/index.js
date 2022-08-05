import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import SingleProduct from '../../SingleProduct';
import watercooler from '../../../assets/images/Kitchen Equipment Photos/cold equipments/water cooler.png';
import undercounterfreezer from '../../../assets/images/Kitchen Equipment Photos/cold equipments/under counter freezer.png';
import twodoorfreezer from '../../../assets/images/Kitchen Equipment Photos/cold equipments/two door freezer.png';
import pantryfridge from '../../../assets/images/Kitchen Equipment Photos/cold equipments/pantry fridge.png';
import icecream from '../../../assets/images/Kitchen Equipment Photos/cold equipments/icecream.jpg';
import fourdoorfreezer from '../../../assets/images/Kitchen Equipment Photos/cold equipments/four door vertical freezer.png';

const List = [
  { name: 'Water Cooler', description: 'Water Cooler', img: watercooler },
  {
    name: 'Ice-Cream Storage Unit',
    description: 'Ice-Cream Storage Unit',
    img: icecream,
  },
  { name: 'Pantry Fridge', description: 'Pantry Fridge', img: pantryfridge },
  {
    name: 'Four Door Vertical Freezer',
    description: 'Four Door Vertical Freezer',
    img: fourdoorfreezer,
  },
  {
    name: 'Under Counter Freezer',
    description: 'Under Counter Freezer',
    img: undercounterfreezer,
  },
  {
    name: 'Two Door Vertical Freezer',
    description: 'Two Door Vertical Freezer',
    img: twodoorfreezer,
  },
];

const Coldequip = () => {
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

export default Coldequip;
