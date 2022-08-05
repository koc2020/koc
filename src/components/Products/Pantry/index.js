import React from 'react';
import { Box, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react';

const List = [
  'Bain Marie',
  'Spoon Sterilizer',
  'Hot Display Case',
  'Salamander',
  'Milk Boiler',
  'Plate Sterilizer',
];

const Pantry = () => {
  return (
    <Box p={10}>
      <Tabs size="md" variant="enclosed" colorScheme={'orange'}>
        <TabList>
          {List.map((element, index) => (
            <Tab key={index}>{element}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {List.map((element, index) => (
            <TabPanel key={index}>{element}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Pantry;
