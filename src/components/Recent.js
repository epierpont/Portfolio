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
              cardText: "The Steamboat Pilot & Today is a free daily newspaper operating out of beautiful Steamboat Springs, CO. The WP site is heavily reliant upon custom Gutenberg blocks tied to transients to help reduce server load. The popular trending stories block runs queries using the Google Analytics Reporting API.",
              modalHeading: "Bookin' it clammin' over t'",
              modalText: "Ankle biteah Outta Staydahs up t' wintah 'Roostik tube steak. Cah mummah from away Hold'er Newt she's, heddin for da ruhbarb! Mount Dessuht Hammah Gohd Dammah, feeder' the beans tunk puff junkah wintah. Windah bendah yahd kid muckle riyht on'ta her, from away wreckah Hammah Gohd Dammah, feeder' the beans.",
              siteUrl: "https://steamboatpilot.com",
            }}/>

            <Project details={{
              name: "Park Record",
              slug: "park-record",
              cardText: "The Park Record is a bi-weekly newspaper located in Park City, UT and serves the Summit County area of Utah. The Park Record Photos site showcases their latest photo galleries and is powered through their SmugMug account. Featured images and galleries are populated using SmugMug JSON feeds. ",
              modalHeading: "Bookin' it clammin' over t'",
              modalText: "Ankle biteah Outta Staydahs up t' wintah 'Roostik tube steak. Cah mummah from away Hold'er Newt she's, heddin for da ruhbarb! Mount Dessuht Hammah Gohd Dammah, feeder' the beans tunk puff junkah wintah. Windah bendah yahd kid muckle riyht on'ta her, from away wreckah Hammah Gohd Dammah, feeder' the beans.",
              siteUrl: "https://photos.parkrecord.com",
            }}/>

            <Project details={{
              name: "Cavvy Savvy",
              slug: "cavvy-savvy",
              cardText: "CavvySavvy is a sister company to the Tri-State Livestock News publication and provides a common space for horse owners, professionals and trainers. It is a basic WP theme and takes advantage of the many available core functions to developers. No need to reinvent the wheel here.",
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
