import React from 'react'
import { Header } from '../header/Header'
import { Content } from '../content/Content'
import { Footer } from '../footer/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
    --colorPrimary: #7037BF;
    --colorSecondary: #FF83C6;
    --colorBackground: #0057AC;
    --colorText: #E8CCC3;
    --colorAffirmative: #11819C;
    --colorNegative: #D92563;
    --colorCaution: #FEDF00;
    --textFont: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}

  body {
    color: var(--colorSecondary);
    background: var(--colorBackground);
    font-family: var(--textFont);
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const App: React.FC = () =>
  <>
    <GlobalStyle />
    <Header />
    <Content />
    <Footer />
  </>

export default App
