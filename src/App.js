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
import Coldequip from './components/Products/ColdEquip';
import HotEquip from './components/Products/HotEquip';
import Exhaust from './components/Products/Exhaust';
import Display from './components/Products/Display';
import Pantry from './components/Products/Pantry';
import Ppe from './components/Products/PPE';
import Trolley from './components/Products/trolleys';
import WashEquip from './components/Products/WashEquip';
import SSelectricals from './components/Products/sselectricals';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="product" element={<Product />}>
              <Route path="ColdEquips" element={<Coldequip />} />
              <Route path="HotEquips" element={<HotEquip />} />
              <Route path="Exhaust" element={<Exhaust />} />
              <Route path="Display" element={<Display />} />
              <Route path="Pantry" element={<Pantry />} />
              <Route path="Ppe" element={<Ppe />} />
              <Route path="Trolley" element={<Trolley />} />
              <Route path="WashEquips" element={<WashEquip />} />
              <Route path="Signatureequips" element={<SSelectricals />} />
              <Route path="AutomaticSteamBoiler" element={<SSelectricals />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
