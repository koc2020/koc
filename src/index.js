import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './fonts/fontastique/fontastique.ttf';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <StrictMode>
      <App />
    </StrictMode>
  </>
);
