import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';
import SB from '../../../assets/images/Kitchen Equipment Photos/hot equipment/single burner.png';
import DB from '../../../assets/images/Kitchen Equipment Photos/hot equipment/double burner.png';
import TB from '../../../assets/images/Kitchen Equipment Photos/hot equipment/triple burner.png';
import DP from '../../../assets/images/Kitchen Equipment Photos/hot equipment/dosa plate.png';
import CDB from '../../../assets/images/Kitchen Equipment Photos/hot equipment/chinese double burner.png';
import ISB from '../../../assets/images/Kitchen Equipment Photos/hot equipment/Idly Steamer box.jpg';
import MC from '../../../assets/images/Kitchen Equipment Photos/hot equipment/milk boiler.jpg';
import DFF from '../../../assets/images/Kitchen Equipment Photos/hot equipment/deep fat fryer.jpg';
import RS from '../../../assets/images/Kitchen Equipment Photos/hot equipment/rice steamer.jpg';
import SM from '../../../assets/images/Kitchen Equipment Photos/hot equipment/shawarama machine.jpg';
import CG from '../../../assets/images/Kitchen Equipment Photos/hot equipment/chicker grill.png';
import SingleProduct from '../../SingleProduct';

const List = [
  { name: 'Single Burner', description: '', img: SB },
  { name: 'Double Burner', description: '', img: DB },
  { name: 'Three Burner', description: '', img: TB },
  { name: 'Dosa Plate', description: '', img: DP },
  { name: 'Chinese Double Burner', description: '', img: CDB },
  { name: 'Idly Steamer Box', description: '', img: ISB },
  { name: 'Milk Cooker', description: '', img: MC },
  { name: 'Deep Fat Fryer', description: '', img: DFF },
  { name: 'Rice Steamer', description: '', img: RS },
  { name: 'Steam Boilder', description: '', img: SB },
  { name: 'Shawarama Machine', description: '', img: SM },
  { name: 'Chicken Grill', description: '', img: CG },
];

const HotEquip = () => {
  return (
    <Box p={10} w={'100%'}>
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

export default HotEquip;
