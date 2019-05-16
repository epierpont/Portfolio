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
                <a href="#" className="card-img-top"><img src="/src/images/logo-steamboat.png" alt="Project" /></a>
                <div className="card-body">
                  <p className="card-text"><strong>Development</strong></p>
                  <p className="card-text">Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.</p>
                </div>
                <button className="btn btn-primary" href="#" role="button" data-toggle="modal" data-target="#steamboat-modal">info</button>
              </div>
            </div>

            <div className="modal fade" id="steamboat-modal" tabindex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Steamboat Pilot & Today</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-5"><img src="/src/images/phone-steamboat.png" alt="Project" /></div>
                      <div className="col-md-7">
                        <h6>Bookin' it clammin' over t'</h6>
                        <p>Ankle biteah Outta Staydahs up t' wintah 'Roostik tube steak. Cah mummah from away Hold'er Newt she's, heddin for da ruhbarb! Mount Dessuht Hammah Gohd Dammah, feeder' the beans tunk puff junkah wintah. Windah bendah yahd kid muckle riyht on'ta her, from away wreckah Hammah Gohd Dammah, feeder' the beans.</p>
                        <p>Katahdin dooryahd owt, hum-dingah suppah mummah door-yahd heatah huck. Bogan no-see-um wintah yut, yow uns batrees slower than molasses going uphill in January hum-dingah tube steak smokie ankle biteah naw mummah, up t' hahd tellin' not knowin' noseeum chimbly nummah than a faht up t' camp podunk Sundee robin showah.</p>
                        <p>indah bendah If you can't stand the wintah you don't deserve the summah bogan anuthah Powrtland Museum of Aht yahd grindah wintah. <a href="#">Hammah Gohd Dammah</a>, feeder' the beans cubboard Bah </p>
                        <ul>
                          <li>Cah mummah from away</li>
                          <li>Katahdin rig up If you can't stand the wintah</li>
                          <li>Sundee robin showah</li>
                        </ul>
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

            <div className="col-4 park-city">
              <div className="card">
                <a href="#" className="card-img-top"><img src="/src/images/logo-park-record.png" alt="Project" /></a>
                <div className="card-body">
                  <p className="card-text"><strong>Development</strong></p>
                  <p className="card-text">Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.</p>
                </div>
                <button className="btn btn-primary" href="#" role="button" data-toggle="modal" data-target="#park-record-modal">info</button>
              </div>
            </div>

            <div className="modal fade" id="park-record-modal" tabindex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Park Record</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-5"><img src="/src/images/phone-park-record.png" alt="Project" /></div>
                      <div className="col-md-7">
                        <h6>Bookin' it clammin' over t'</h6>
                        <p>Ankle biteah Outta Staydahs up t' wintah 'Roostik tube steak. Cah mummah from away Hold'er Newt she's, heddin for da ruhbarb! Mount Dessuht Hammah Gohd Dammah, feeder' the beans tunk puff junkah wintah. Windah bendah yahd kid muckle riyht on'ta her, from away wreckah Hammah Gohd Dammah, feeder' the beans.</p>
                        <p>Katahdin dooryahd owt, hum-dingah suppah mummah door-yahd heatah huck. Bogan no-see-um wintah yut, yow uns batrees slower than molasses going uphill in January hum-dingah tube steak smokie ankle biteah naw mummah, up t' hahd tellin' not knowin' noseeum chimbly nummah than a faht up t' camp podunk Sundee robin showah.</p>
                        <p>indah bendah If you can't stand the wintah you don't deserve the summah bogan anuthah Powrtland Museum of Aht yahd grindah wintah. <a href="#">Hammah Gohd Dammah</a>, feeder' the beans cubboard Bah </p>
                        <ul>
                          <li>Cah mummah from away</li>
                          <li>Katahdin rig up If you can't stand the wintah</li>
                          <li>Sundee robin showah</li>
                        </ul>
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

            <div className="col-4 cavvy-savvy">
              <div className="card">
                <a href="#" className="card-img-top"><img src="/src/images/logo-cavvy-savvy.png" alt="Project" /></a>
                <div className="card-body">
                  <p className="card-text"><strong>Development</strong></p>
                  <p className="card-text">Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.</p>
                </div>
                <button className="btn btn-primary" href="#" role="button" data-toggle="modal" data-target="#cavvy-savvy-modal">info</button>
              </div>
            </div>

            <div className="modal fade" id="cavvy-savvy-modal" tabindex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Cavvy Savvy</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-5"><img src="/src/images/phone-cavvy-savvy.png" alt="Project" /></div>
                      <div className="col-md-7">
                        <h6>Bookin' it clammin' over t'</h6>
                        <p>Ankle biteah Outta Staydahs up t' wintah 'Roostik tube steak. Cah mummah from away Hold'er Newt she's, heddin for da ruhbarb! Mount Dessuht Hammah Gohd Dammah, feeder' the beans tunk puff junkah wintah. Windah bendah yahd kid muckle riyht on'ta her, from away wreckah Hammah Gohd Dammah, feeder' the beans.</p>
                        <p>Katahdin dooryahd owt, hum-dingah suppah mummah door-yahd heatah huck. Bogan no-see-um wintah yut, yow uns batrees slower than molasses going uphill in January hum-dingah tube steak smokie ankle biteah naw mummah, up t' hahd tellin' not knowin' noseeum chimbly nummah than a faht up t' camp podunk Sundee robin showah.</p>
                        <p>indah bendah If you can't stand the wintah you don't deserve the summah bogan anuthah Powrtland Museum of Aht yahd grindah wintah. <a href="#">Hammah Gohd Dammah</a>, feeder' the beans cubboard Bah </p>
                        <ul>
                          <li>Cah mummah from away</li>
                          <li>Katahdin rig up If you can't stand the wintah</li>
                          <li>Sundee robin showah</li>
                        </ul>
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

          </div>{/* END .row */}
        </div>{/* END .container */}
      </section>
    )
  }

}

export default Recent
