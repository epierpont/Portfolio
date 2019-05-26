import React, { Component } from 'react'

import Header from './components/Header'
import Recent from './components/Recent'
import About from './components/About'
import Footer from './components/Footer'
import Divider from './components/Divider'

class App extends Component {
  constructor() {
    super()
    this.state = {
      renderMsg: false,
    }
    this.onHeaderTyped = this.onHeaderTyped.bind(this)
  }

  onHeaderTyped() {
    this.setState({ renderMsg: true })
  }

  render() {
    return (
      <main>
        <Header onHeaderTyped={this.onHeaderTyped} renderMsg={this.state.renderMsg} />
        <Divider fillColor='#fff' />
        <Recent />
        <Divider fillColor='#f7f7f7' />
        <About />
        <Divider fillColor='#000' />
        <Footer />
      </main>
    )
  }

}

export default App
