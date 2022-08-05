import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import SDT from '../../../assets/images/Kitchen Equipment Photos/preparation equipment/SS dinning table.jpeg';
import PT from '../../../assets/images/Kitchen Equipment Photos/preparation equipment/preparation table.png';
import PTWS from '../../../assets/images/Kitchen Equipment Photos/preparation equipment/preparation table with sink.jpg';
import WMS from '../../../assets/images/Kitchen Equipment Photos/preparation equipment/wall mount shelves.png';
import WTCD from '../../../assets/images/Kitchen Equipment Photos/preparation equipment/work table counter with door.jpg';
import CWD from '../../../assets/images/Kitchen Equipment Photos/preparation equipment/conventional wet grinder.jpg';
import SingleProduct from '../../SingleProduct';

const List = [
  { name: 'SS Dinning Table', description: '', img: SDT },
  { name: 'Preparation Table', description: '', img: PT },
  { name: 'Preparation Table with Sink', description: '', img: PTWS },
  { name: 'Wall Mounting Shelves', description: '', img: WMS },
  { name: 'Working Table Counter with Door', description: '', img: WTCD },
  { name: 'Conventional Wet Grinder', description: '', img: CWD },
];

const Ppe = () => {
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

export default Ppe;
