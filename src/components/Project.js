import React, { Component } from 'react';

class Project extends Component {

  constructor(props) {
    super()
  }

  render() {
    return (
      <div className={"col-lg-4 px-4 " + this.props.details.slug}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-heading">{this.props.details.name}</h5>
            {this.props.details.propertyText}
          </div>
        </div>
        <hr className="d-block d-lg-none" />
      </div>
    )
  }

}

export default Project;
