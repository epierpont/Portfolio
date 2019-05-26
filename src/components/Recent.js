import React, { Component } from 'react'
import Project from './Project'

class Recent extends Component {

  render() {
    return (
      <section className="recent-work">
      {this.props.renderMsg ?
        <div className="container">
          <div className="row">

            <div className="col text-center">
              <h2>&#47;&#47; recent <span>projects</span></h2>
            </div>

          </div>

          <div className="row no-gutters">

            <Project details={{
              name: "Steamboat Pilot & Today",
              slug: "steamboat",
              cardText: "Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.",
              modalHeading: "Bookin' it clammin' over t'",
              modalText: "Ankle biteah Outta Staydahs up t' wintah 'Roostik tube steak. Cah mummah from away Hold'er Newt she's, heddin for da ruhbarb! Mount Dessuht Hammah Gohd Dammah, feeder' the beans tunk puff junkah wintah. Windah bendah yahd kid muckle riyht on'ta her, from away wreckah Hammah Gohd Dammah, feeder' the beans.",
              siteUrl: "https://steamboatpilot.com",
            }}/>

            <Project details={{
              name: "Park Record",
              slug: "park-record",
              cardText: "Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.",
              modalHeading: "Bookin' it clammin' over t'",
              modalText: "Ankle biteah Outta Staydahs up t' wintah 'Roostik tube steak. Cah mummah from away Hold'er Newt she's, heddin for da ruhbarb! Mount Dessuht Hammah Gohd Dammah, feeder' the beans tunk puff junkah wintah. Windah bendah yahd kid muckle riyht on'ta her, from away wreckah Hammah Gohd Dammah, feeder' the beans.",
              siteUrl: "https://photos.parkrecord.com",
            }}/>

            <Project details={{
              name: "Cavvy Savvy",
              slug: "cavvy-savvy",
              cardText: "Duis quis enim nec sapien fringilla interdum. Ut faucibus blandit mauris, rutrum varius lorem ultrices nec. Duis eu porta felis. Integer aliquam est sapien, a tristique ante ornare eget. Nam vel lacinia eros. Proin viverra ut mauris ac consequat. Proin malesuada dui tincidunt, euismod justo vitae, vestibulum nulla. Nunc tristique finibus sem eget feugiat.",
              modalHeading: "Bookin' it clammin' over t'",
              modalText: "Ankle biteah Outta Staydahs up t' wintah 'Roostik tube steak. Cah mummah from away Hold'er Newt she's, heddin for da ruhbarb! Mount Dessuht Hammah Gohd Dammah, feeder' the beans tunk puff junkah wintah. Windah bendah yahd kid muckle riyht on'ta her, from away wreckah Hammah Gohd Dammah, feeder' the beans.",
              siteUrl: "https://cavvysavvy.tsln.com",
            }}/>

          </div>
        </div>
      : null }
      </section>
    )
  }

}

export default Recent
