import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import Body from './components/Body'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <div>
        <Navbar/>
        <HeroBanner/>
        <Body/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
