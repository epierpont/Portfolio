import React, { Component } from 'react'

class Divider extends Component {

  constructor(props) {
    super()
  }

  render() {
    return (
      <div className="divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill={this.props.fillColor} points="0,100 100,0 100,100"/>
        </svg>
      </div>
    )

  }

}

export default Divider
