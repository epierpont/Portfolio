import React, { Component } from 'react'
import Typist from 'react-typist'

import ericFace from '../images/face-eric-pierpont-2022.jpg'
import headerBg from '../images/bg-header.jpg'

class Header extends Component {

  // Preload profile image.
  componentDidMount() {
    const profileImg = new Image();
    profileImg.src = ericFace;
  }

  render() {

    return (
      <header style={{ backgroundImage: "url(" + headerBg + ")" }}>

        <div className="header-brand">
          <div className="container">
            <div className="row">

              <div className="col text-center">
                <Typist
                  cursor={{ hideWhenDone: true }}
                  onTypingDone={this.props.onHeaderTyped}
                >
                  erix<Typist.Backspace count={1} delay={1000} />c_<span>pierpont()&#123;</span>
                </Typist>
              </div>

            </div>
          </div>
        </div>

        {this.props.renderMsg ?
          <div className="header-message">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h1>Chuppta? I'm a <strong>Real Estate</strong><br />Investor</h1>
                </div>
                <div className="col">
                  <figure style={{ backgroundImage: "url(" + ericFace + ")" }} ></figure>
                </div>
              </div>
            </div>
          </div>
          : null}

      </header>
    )
  }

}

export default Header
