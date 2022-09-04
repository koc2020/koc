import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import About from './pages/About';
import theme from './theme';
import Product from './pages/Product';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/koc/profile" element={<Profile />} />
            <Route path="/koc/product" element={<Product />}>
              <Route path="/koc/product/:product" element={<Product />} />
            </Route>
            <Route path="/koc/about" element={<About />} />
            <Route path="/koc/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
