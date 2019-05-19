import React, { Component } from 'react';

class Experience extends Component {

  constructor(props) {
    super()
  }

  render() {
    return(
      <div className="row no-gutters">
        <div className="col-4 col-md-3 date">{this.props.details.date}</div>
        <div className="col-8 col-md-9"><strong>{this.props.details.company}</strong> | <span>{this.props.details.location}</span><br />
          {this.props.details.position}</div>
      </div>
    )
  }

}

export default Experience
