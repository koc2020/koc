import React from 'react';
// import ASB1 from '../../assets/images/ASB/ASB 1.jpeg';
import ASB2 from '../../assets/images/ASB/ASB 2.jpeg';
// import ASB3 from '../../assets/images/ASB/ASB 3.jpeg';
import ASB4 from '../../assets/images/ASB/ASB 4.jpeg';
import ASB5 from '../../assets/images/ASB/ASB 5.jpeg';
import ASBT from '../../assets/images/ASB_Table.jpg';
import { Box, Image, Text, SimpleGrid } from '@chakra-ui/react';

const SingleProduct = ({ props }) => {
  return (
    <Box p={5} display={'block'}>
      <SimpleGrid minChildWidth={'300px'} spacing={'5px'} pr={5}>
        <Image
          src={props.element.img}
          alt={props.element.name}
          w={'300px'}
          objectFit={'cover'}
        />
        {/* <Image
          src={ASB1}
          alt={props.element.name}
          w={'300px'}
          objectFit={'cover'}
        /> */}
        <Image
          src={ASB2}
          alt={props.element.name}
          w={'300px'}
          objectFit={'cover'}
        />
        <Image
          src={ASB4}
          alt={props.element.name}
          w={'300px'}
          objectFit={'cover'}
        />
        <Image
          src={ASB5}
          alt={props.element.name}
          w={'300px'}
          objectFit={'cover'}
        />
      </SimpleGrid>
      <Box w={'100%'} mt={5}>
        <Box>
          <Text ml={2}>
            <b>Description</b>
          </Text>
          <Box
            mt={1}
            w={'100%'}
            h={'3px'}
            bgColor={'#f6821f'}
            borderRadius={'full'}
          ></Box>
        </Box>
        <Box>
          <Image src={ASBT} alt={props.element.name} objectFit={'cover'} />
        </Box>
        <Box display={'flex'} justifyContent={'center'}>
          <a href={ASBT} download>
            <Box
              w={'fit-content'}
              bgColor={'#f6821f'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDir={'row'}
              p={'0.5'}
              paddingInline={'5'}
              borderRadius={'20px'}
              cursor={'pointer'}
              title={'Click me'}
            >
              <Text display={'block'}>
                Click here to download specification
              </Text>
            </Box>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
