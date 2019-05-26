import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {

  render() {
    return (
      <div>
      {this.props.renderMsg ?
        <footer>

          <div className="container">
            <div className="row no-gutters">
              <div className="col-5 text-right">
                <span>&#125;</span>
              </div>
              <div className="col-7 text-left">
                <p><a href="https://github.com/epierpont/Portfolio" target="_blank">view project on github <FontAwesomeIcon icon={faGithub} /></a></p>
              </div>
            </div>
          </div>

        </footer>
      : null }
      </div>
    )
  }

}

export default Footer
