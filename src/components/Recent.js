import React, { Component } from 'react'
import Project from './Project'

import steamboatLogo from '../images/logo-steamboat.png'
import steamboatPhone from '../images/phone-steamboat.png'

import parkRecordLogo from '../images/logo-park-record.png'
import parkRecordPhone from '../images/phone-park-record.png'

import cavvySavvyLogo from '../images/logo-cavvy-savvy.png'
import cavvySavvyPhone from '../images/phone-cavvy-savvy.png'

class Recent extends Component {

  render() {

    let steamboatModalText = '<p>This recent redesign uses a custom WP theme on a multisite environment powering over 15 different news websites including the Steamboat Pilot, Vail Daily, Aspen Times, Tahoe Daily Tribune and more. Each site has its own unique vaules for DoubleClick, Google Analytics, Facebook Comments and more. This is handled through a settings page which really drives the environment.</p> <p>The real challenge of the project was the implementation of custom Gutenberg blocks, this functionality allows editors to insert cards and choose which category to pull from, number of posts, tags, custom post type content and so on. My role within the project resided with much of the OOP PHP development work alongside various styling tweaks.</p> <p>My favorite part of the project was hooking into the Google Analytics Reporting API and querying my way to JSON feeds via specific custom dimensions for trending stories.</p>';

    let parkRecordModalText = '<p>The Park Record was looking for a way to connect photos living within their SmugMug account to a standalone site. Each post in WP requires unique parameters to connect to the appropriate JSON feed in order to populate through the SmugMug API.</p> <p>I was responsible for most of the development and really had to emulate a previous solution based on styling. I think the site has an interesting feel to it with fade-in loading and infinite pagination.</p> <p>It\'s a relatively basic WP theme but allows users to step away from the main Park Record site and explore a photo based environment.</p>';

    let cavvySavvyModalText = '<p>The end product of this custom theme is the epitome of a nuts and bolts WP solution. I really enjoy developing within WordPress because much of the heavy lifting is done so there is no reason to reinvent the wheel, however you are able to make it as complex and involved as need be.</p> <p>I\'m excited about the future of WP and know it has a strong following and great codex. I feel as if I have reached an endpoint within my current career position and would like to explore React more alongside the WordPress REST API.</p> <p>If you\'re not learning, you are not having fun.</p>';

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
              modalHeading: "So many Gutenberg blocks",
              modalText: <div className="modal-text" dangerouslySetInnerHTML={{__html: steamboatModalText}}></div>,
              siteUrl: "https://steamboatpilot.com",
              logoUrl: steamboatLogo,
              phoneUrl: steamboatPhone
            }}/>

            <Project details={{
              name: "Park Record",
              slug: "park-record",
              cardText: "The Park Record is a bi-weekly newspaper located in Park City, UT and serves the Summit County area of Utah. The Park Record Photos site showcases their latest photo galleries and is powered through their SmugMug account. Featured images and galleries are populated using SmugMug JSON feeds. ",
              modalHeading: "Good photography captures genuine emotion",
              modalText: <div className="modal-text" dangerouslySetInnerHTML={{__html: parkRecordModalText}}></div>,
              siteUrl: "https://photos.parkrecord.com",
              logoUrl: parkRecordLogo,
              phoneUrl: parkRecordPhone
            }}/>

            <Project details={{
              name: "Cavvy Savvy",
              slug: "cavvy-savvy",
              cardText: "CavvySavvy is a sister company to the Tri-State Livestock News publication and provides a common space for horse owners, professionals and trainers. It is a basic WP theme and takes advantage of the many available core functions to developers. No need to reinvent the wheel here.",
              modalHeading: "No frills WP",
              modalText: <div className="modal-text" dangerouslySetInnerHTML={{__html: cavvySavvyModalText}}></div>,
              siteUrl: "https://cavvysavvy.tsln.com",
              logoUrl: cavvySavvyLogo,
              phoneUrl: cavvySavvyPhone
            }}/>

          </div>
        </div>
      : null }
      </section>
    )
  }

}

export default Recent
