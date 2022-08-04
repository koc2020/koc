import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Box pt={'125px'}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default Layout;
