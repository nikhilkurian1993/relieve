import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Normalize from '@components/styles/Normalize';
import Reset from '@components/styles/Reset';

export type BaseTheme = typeof theme;

export const theme = {
  white: '#ffffff',
  green: '#0CEA9E',
  mediumGreen: '#0BD08C',
  paleGreen: '#D5FAEE',
  highlightGreen: '#C3FF52',
  greenForest: '#0E7E6D',
  darkBlack: '#07241E',
  black: '#0B392F',
  darkGrey: '#688982',
  menuGrey: '#476E65',
  // mediumLightGrey: '#F8FAFA',
  greenBlue: '#D5FAEE',
  greyBlack: '#596A65',
  mediumLightGrey: '#F2F8F7',
  mediumGrey: '#9EADAA',
  grey: '#C1CCCA',
  red: '#FFC7C7',
  textGrey: '#B3C1BD',
  veryLightGrey: '#FCFCFC',
  backgroundGrey: '#DEEBE9',
  lightGrey: '#E7F2F0',
  adminBackgroundGrey: '#F4F5F5',
  paleGrey: '#F0F5F4',
  yellow: '#F8DFB7',
  darkRed: '#E02020',
  brightRed: '#E83939',
  darkGreen: '#0B875B',
  darkYellow: '#D08610',
  orange: '#FFD052',
  darkOrange: '#FFA700',
  blue: '#67ECF7',
  paleBlue: '#b5eff5',
  pink: '#FFD9D9',
  // media queries
  desktoplarge: '1536px',
  desktopmedium: '1440px',
  desktop: '1280px',
  tablet: '1025px',
  mobile: '750px',
  mobilesmall: '325px',

  // z-index
  zIndexMenuBackground: 5,
  zIndexWebsiteMenu: 10,
  zIndexLogo: 15,
  zIndexCartBackground: 20,
  zIndexCart: 25,
  zIndexAlert: 9999,
};

const GlobalStyle = createGlobalStyle`
  ${Normalize};
  ${Reset};

  *, *:before, *:after {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    line-height: 1.4;
    color: ${theme.black};
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }

  ul,li {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  button {
    appearance: none;
    background-color: transparent;
    border: 0;
    padding:0;
    margin: 0;
    color: ${theme.black};
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
  }

  input {
    appearance: none;
    background-color: transparent;
    border: 0;
    padding:0;
    margin: 0;
    border-radius: 0;
  }
`;

const BaseLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default BaseLayout;
