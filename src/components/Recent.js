import React, { Component } from 'react'

class Recent extends Component {

  render() {
    return (
      <section className="recent-work">
        <div className="container">
          <div className="row">

            <div className="col text-center">
              <h2>&#47;&#47; recent <span>projects</span></h2>
            </div>{/* END .col */}

          </div>{/* END .row */}

          <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLongTitle">Steamboat Pilot & Today</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row no-gutters">

            <div className="col-4 steamboat">
              <div className="card">
                <a href="#" className="card-img-top"><img src="/src/images/logo-steamboat.png" alt="Project" /></a>
                <div className="card-body">
                  <p className="card-text"><strong>Development</strong></p>
                  <p className="card-text">Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.</p>
                </div>
                <button className="btn btn-primary" href="#" role="button" data-toggle="modal" data-target="#exampleModalCenter">view</button>
              </div>
            </div>

            <div className="col-4 park-city">
              <div className="card">
                <a href="#" className="card-img-top"><img src="/src/images/logo-park-record.png" alt="Project" /></a>
                <div className="card-body">
                  <p className="card-text"><strong>Development</strong></p>
                  <p className="card-text">Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.</p>
                </div>
                <button className="btn btn-primary" href="#" role="button">view</button>
              </div>
            </div>

            <div className="col-4 health-beginnings">
              <div className="card">
                <a href="#" className="card-img-top"><img src="/src/images/logo-healthy-beginnings.png" alt="Project" /></a>
                <div className="card-body">
                  <p className="card-text"><strong>Development</strong></p>
                  <p className="card-text">Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.</p>
                </div>
                <button className="btn btn-primary" href="#" role="button">view</button>
              </div>
            </div>

          </div>{/* END .row */}
        </div>{/* END .container */}
      </section>
    )
  }

}

export default Recent
