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

    let sopoText = '<p><em>Small condoized 3-unit, buy & hold investment</em></p><p>This property was a white elephant of a deal and a financing and logistical nightmare. It looked to be a standard 3-unit property but was deeded out as individual condos. It\'s in the glorious Knightville neighborhood, rehab is in progress and will be tied to a plethora of cashflow possibilities.</p><p><strong>Purchase Date:</strong> 2/22<br /> <strong>Purchase Price:</strong> 450k<br /><strong>Cash Invested:</strong> 100k<br /><strong>Monthly Cashflow:</strong> TBD</p>';

    let auburnText = '<p><em>Small 3-unit multi-family, buy & hold investment</em></p><p>I house-hacked this property as well. There were extensive plumbing and sewer drain issues. Each unit went through a thorough rehab, bringing new life to a wonderful property in a great neighborhood. This one is a keeper!</p><p><strong>Purchase Date:</strong> 9/19<br /> <strong>Purchase Price:</strong> 165k<br /><strong>Cash Invested:</strong> 70k<br /><strong>Cash-Out Refi:</strong> 70k<br /><strong>Monthly Cashflow:</strong> $1250</p>';

    let lewistonText = '<p><em>Small 3-unit multi-family, buy & hold investment</em></p><p>This was my first property and beyond intimidating. I lived in the property for one year, did some light rehab work and learned so much about property management and what it meant to provide housing for those in the L/A market.</p><p><strong>Purchase Date:</strong> 11/17<br /> <strong>Purchase Price:</strong> 150k<br /><strong>Cash Invested:</strong> 12k<br /><strong>Cash-Out Refi:</strong> 42k<br /><strong>Monthly Cashflow:</strong> $1000</p>';

    return (
      <section className="recent-work">
        {this.props.renderMsg ?
          <div className="container">
            <div className="row">

              <div className="col text-center">
                <h2>&#47;&#47; recent <span>projects</span></h2>
              </div>

            </div>

            <div className="row">

              <Project details={{
                name: "South Portland, ME",
                slug: "sopo",
                propertyText: <div className="property-text" dangerouslySetInnerHTML={{ __html: sopoText }}></div>,
              }} />

              <Project details={{
                name: "Auburn, ME",
                slug: "auburn",
                propertyText: <div className="property-text" dangerouslySetInnerHTML={{ __html: auburnText }}></div>,
              }} />

              <Project details={{
                name: "Lewiston, ME",
                slug: "lewiston",
                propertyText: <div className="property-text" dangerouslySetInnerHTML={{ __html: lewistonText }}></div>,
              }} />

            </div>
          </div>
          : null}
      </section>
    )
  }

}

export default Recent
