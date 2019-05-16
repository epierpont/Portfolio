import React, { Component } from 'react';

class Project extends Component {

  constructor(props) {
    super()
  }

  render() {
    return(
      <div className={"col-4 " + this.props.details.slug}>
        <div className="card">
          <a href="#" className="card-img-top"><img src={"/src/images/logo-" + this.props.details.slug + ".png" } alt={"Logo - " + this.props.details.name} /></a>
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
                  <div className="col-md-5"><img src={"/src/images/phone-" + this.props.details.slug + ".png"} alt={"Mobile - " + this.props.details.name} /></div>
                  <div className="col-md-7">
                    <h6>{this.props.details.modalHeading}</h6>
                    <p>{this.props.details.modalText}</p>
                  </div>
                </div>
              </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn"><a href="#" target="_blank">View site</a></button>
                <button type="button" className="btn" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Project;
