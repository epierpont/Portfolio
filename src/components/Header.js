import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
      <header>

        <div className="header-brand">
          <div className="container">
            <div className="row">

              <div className="col">
                <div className="text-center">eric_<span>pierpont()&#123;</span></div>
              </div>{/* END .col */}

            </div>{/* END .row */}
          </div>{/* END .container */}
        </div>{/* END .header-brand */}

        <div className="header-message">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Chuppta? I'm a <strong>LAMP Developer</strong><br/>AND <strong>WordPress Monkey</strong></h1>
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
