import React from 'react'

import Header from './components/Header'
import Recent from './components/Recent'
import About from './components/About'
import Footer from './components/Footer'
import Divider from './components/Divider'

function App() {
  return (
    <main>
      <Header />
      <Divider fillColor='#fff' />
      <Recent />
      <Divider fillColor='#f7f7f7' />
      <About />
      <Footer />
    </main>
  )
}

export default App
