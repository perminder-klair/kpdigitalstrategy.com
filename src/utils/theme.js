import { createGlobalStyle } from 'styled-components';

export const elements = { mobileBreakpoint: 800, ipadBreakpoint: 1024 };

const theme = {
  primaryColor: '#ffffff',
  SecondaryColor: '#fb3640',
  blackDark: '#0e0e0e',
  backgroundDark: '#0c1117',
  darkGrey: '#1e2126',
  roboto: 'Roboto,sans-serif',
};

export default theme;

export const GlobalStyle = createGlobalStyle`
 body {
    height: 100vh;
    font-family:sans-sero
  }
  .columns {
  margin-top: 0px!important;
  }
`;
