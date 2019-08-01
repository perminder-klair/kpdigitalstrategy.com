import { createGlobalStyle } from 'styled-components';

export const elements = { mobileBreakpoint: 800, ipadBreakpoint: 1024 };

const theme = {
  primaryColor: '#ffffff',
  SecondaryColor: '#fb3640',
  bodyBackground: '#0e0e0e',
  backgroundDark: '#0c1117',
  darkGrey: '#1e2126',
};

export default theme;

export const GlobalStyle = createGlobalStyle`
 body {
    height: 100vh;
  }
  .columns {
  margin-top: 0px!important;
  }
`;
