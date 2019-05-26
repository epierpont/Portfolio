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
        <Divider fillColor='#fff' renderMsg={this.state.renderMsg} show='true' />
        <Recent renderMsg={this.state.renderMsg} />
        <Divider fillColor='#f7f7f7' renderMsg={this.state.renderMsg} />
        <About renderMsg={this.state.renderMsg} />
        <Divider fillColor='#000' renderMsg={this.state.renderMsg} />
        <Footer renderMsg={this.state.renderMsg} />
      </main>
    )
  }

}

export default App
