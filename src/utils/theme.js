import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken, lighten } from 'polished';

const mainBrandColor = '#FF3860';
const lightShades = '#F9F9F9';
const darkAccent = '#402840';
const darkShades = '#874666';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#EABE4A',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  dangerColor: '#f44336',

  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#121317',
  backgroundColorLite: '#F3F8FE',
  backgroundColorGrey: '#1E2125',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: '#ffffff',
  textColorInverse: '#111215',
  textColorLite: '#8B8989',
  menuTintColor: darkAccent,
  primaryFontFamily: "'Roboto', sans-serif",
  secondaryFontFamily: "'Roboto', sans-serif",
  boxShadow: 'rgba(0,0,0,0.08) 0px 7px 18px',
};

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.textColor};
    letter-spacing: 0.03rem !important;
    font-size: 16px;
    background-color: ${theme.backgroundColor};
  }
  .columns{
    margin-left: 0rem !important;
    margin-right:0rem !important;
  }
  .title {
    font-family: ${theme.primaryFontFamily};
  }
  .button {
    font-family: ${theme.primaryFontFamily};
  }
  p {
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }
  p, .title, .box {
    color: ${theme.textColor};
  }
  a {
    color: ${theme.mainBrandColor};
  }
  .has-text-danger {
    color: ${theme.mainBrandColor} !important;
  }
  .subtitle {
    color: ${lighten(0.06, theme.textColor)};
  }
  .button.is-secondary {
    background-color: ${theme.darkAccent};
    color: #ffffff;
    border-color: transparent;
    border-width: 0px;
  }
  .button.is-link {
    background-color: ${theme.darkShades};
    color: #ffffff;
    border-width: 0px;
    :hover {
      background-color:${theme.darkShades}!important;
  }
  .button.is-outlined {
    background-color: transparent;
    color: ${theme.textColor};
  }
  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }
  .has-text-warning {
    color: ${theme.lightAccent} !important;
  }
  .has-text-black {
    color: ${theme.textColorInverse};
  }
`;

export default GlobalStyle;
