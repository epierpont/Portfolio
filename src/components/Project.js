import React, { Component } from 'react';

class Project extends Component {

  constructor(props) {
    super()
  }

  render() {
    return(
      <div className={"col-lg-4 " + this.props.details.slug}>
        <div className="card">
          <a href="#" className="card-img-top"><img src={this.props.details.logoUrl} alt={"Logo - " + this.props.details.name} /></a>
          <div className="card-body">
            <p className="card-text">{this.props.details.cardText}</p>
          </div>
          <button className="btn btn-primary" href="#" role="button" data-toggle="modal" data-target={"#" + this.props.details.slug + "-modal" }>info</button>
        </div>

        <div className="modal fade" id={this.props.details.slug + "-modal" } tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{this.props.details.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5"><img src={this.props.details.phoneUrl} alt={"Mobile - " + this.props.details.name} /></div>
                  <div className="col-md-7">
                    <h6>{this.props.details.modalHeading}</h6>
                    {this.props.details.modalText}
                  </div>
                </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn"><a href={this.props.details.siteUrl} target="_blank">View site</a></button>
                <button type="button" className="btn" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <hr className="d-block d-lg-none" />
      </div>
    )
  }

}

export default Project;
