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

          <div className="row no-gutters">

            <div className="col-4 steamboat">
              <div className="card">
                <a href="#"><img className="card-img-top" src="/src/images/logo-steamboat.png" alt="Project" /></a>
                <div className="card-body">
                  <p className="card-text"><strong>Development</strong></p>
                  <p className="card-text">Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.</p>
                </div>
                <a class="btn btn-primary" href="#" role="button">view</a>
              </div>
            </div>

            <div className="col-4 park-city">
              <div className="card">
                <a href="#"><img className="card-img-top" src="/src/images/logo-park-record.png" alt="Project" /></a>
                <div className="card-body">
                  <p className="card-text"><strong>Development</strong></p>
                  <p className="card-text">Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.</p>
                </div>
                <a class="btn btn-primary" href="#" role="button">view</a>
              </div>
            </div>

            <div className="col-4 health-beginnings">
              <div className="card">
                <a href="#"><img className="card-img-top" src="/src/images/logo-healthy-beginnings.png" alt="Project" /></a>
                <div className="card-body">
                  <p className="card-text"><strong>Development</strong></p>
                  <p className="card-text">Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.</p>
                </div>
                <a class="btn btn-primary" href="#" role="button">view</a>
              </div>
            </div>

          </div>{/* END .row */}
        </div>{/* END .container */}
      </section>
    )
  }

}

export default Recent
