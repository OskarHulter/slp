import React from 'react'
import './App.css'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colorPrimary: '#7037BF',
  colorSecondary: '#FF83C6',
  colorBackground: '#0057AC',
  colorText: '#E8CCC3',
  colorAffirmative: '#11819C',
  colorNegative: '#D92563',
  colorCaution: '#FEDF00',
  textFont: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif'
}

const GlobalStyle = createGlobalStyle`
    :root {
    --colorPrimary: #7037BF;
    --colorSecondary: #FF83C6;
    --colorBackground: #0057AC;
    --colorText: #E8CCC3;
    --colorAffirmative: #11819C;
    --colorNegative: #D92563;
    --colorCaution: #FEDF00;
    --textFont: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif'
}

  body {
    color: var(--colorText);
    background: var(--colorBackground);
    font-family: var(--textFont);
  }
`

const App: React.FC = () =>
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  </ThemeProvider>

export default App
