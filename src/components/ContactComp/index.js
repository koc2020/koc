import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';

const ContactComp = () => {
  return (
    <Box p={10} paddingInline={'75px'}>
      <HStack>
        <Box w={'50%'} h={'100%'}>
          <Box>
            <Box>
              <Text fontSize={'x-large'} ml={5}>
                <b>Address</b>
              </Text>
              <Box
                mt={2}
                w={'100%'}
                h={'2px'}
                bgColor={'#f6821f'}
                borderRadius={'full'}
              ></Box>
            </Box>
            <Text p={5} fontSize={'medium'}>
              <b>Kitchen 'O' Cant Equips</b>
              <br />
              74, Thendral Nagar, Manali Main Road, Near Thiruthangal Nadar
              College,
              <br /> Selaivayal, Chennai, Tamil Nadu 600051.
            </Text>
          </Box>
          <Box>
            <Box>
              <Text fontSize={'x-large'} ml={5}>
                <b>Contact</b>
              </Text>
              <Box
                mt={2}
                w={'100%'}
                h={'2px'}
                bgColor={'#f6821f'}
                borderRadius={'full'}
              ></Box>
            </Box>
            <Text p={5} fontSize={'medium'}></Text>
          </Box>
        </Box>
        <Box
          w={'50%'}
          display={'flex'}
          justifyContent={'center'}
          alignContent={'center'}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15541.1801675645!2d80.2574118!3d13.1437802!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd1d683cb76c2ce47!2sKitchen%20&#39;O&#39;%20Cant%20Equips!5e0!3m2!1sen!2sin!4v1659611891304!5m2!1sen!2sin"
            width="500"
            height="450"
            style={{ border: '0' }}
            allowfullscreen=""
            loading="lazy"
            title="KOC"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </HStack>
    </Box>
  );
};

export default ContactComp;
