import { createGlobalStyle } from 'styled-components';

export const elements = { mobileBreakpoint: 800, ipadBreakpoint: 1024 };

const theme = {
  primaryColor: '#ffffff',
  SecondaryColor: '#fb3640',
  RedDrak: ' #f54054',
  RedTer: '#fb3839',
  WhiteDark: '#f3f8fe',
  blackDark: '#0e0e0e',
  backgroundDark: '#0c1117',
  darkGrey: '#1e2126',
  roboto: 'Roboto,sans-serif',
  Black: '#000000',
  BlackTer: ' #111217',
  BlackBis: '#121318',
};

export default theme;

export const GlobalStyle = createGlobalStyle`
 body {
    height: 100vh;
    font-family:'Roboto,sans-serif';
  }
  .columns {
    margin-top: 0px!important;
  }
`;
