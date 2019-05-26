import React, { Component } from 'react';
import Typist from 'react-typist';

class Header extends Component {
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
      <header>

        <div className="header-brand">
          <div className="container">
            <div className="row">

              <div className="col text-center">
                <Typist
                  cursor={{ hideWhenDone: true }}
                  onTypingDone={this.onHeaderTyped}
                >
                  erix<Typist.Backspace count={1} delay={1000} />c_<span>pierpont()&#123;</span>
                </Typist>
              </div>{/* END .col */}

            </div>{/* END .row */}
          </div>{/* END .container */}
        </div>{/* END .header-brand */}

        <div className="header-message">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Chuppta? I'm a <strong>LAMP Developer</strong><br/>AND <strong>WordPress Monkey</strong></h1>
                {this.state.renderMsg ? ( <p>We got it</p> ) : null }
              </div>{/* END .col */}
              <div className="col">
                <figure></figure>
              </div>{/* END .col */}
            </div>{/* END .row */}
          </div>{/* END .container */}
        </div>{/* END .header-message */}

      </header>
    )
  }

}

export default Header
