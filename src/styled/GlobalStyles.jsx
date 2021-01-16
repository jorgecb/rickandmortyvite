import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
  }
`;

export default GlobalStyles;
