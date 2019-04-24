import React from 'react'

import Header from './components/Header'
import './components/Header.scss';

import Recent from './components/Recent'
import './components/Recent.scss';

import About from './components/About'
import './components/About.scss';

import Footer from './components/Footer'
import './components/Footer.scss';

function App() {
  return (
    <main>
      <Header />
      <Recent />
      <About />
      <Footer />
    </main>
  )
}

export default App
