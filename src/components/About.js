import React, { Component } from 'react'
import SkillSet from './SkillSet'
import Experience from './Experience'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons'

import epierpontResume from '../pdfs/epierpont-resume-2022.pdf'

class About extends Component {

  render() {
    return (
      <section className="about-me">
        {this.props.renderMsg ?
          <div className="container">
            <div className="row no-gutters">

              <div className="col-md-6">

                <h2 className="text-center text-md-left">&#47;&#47; about <span>me</span></h2>

                <p><strong>Hi there</strong>, my name is Eric Pierpont. I am a recent real estate investor and have been a web developer for a long time now. I grew up in Maine and spent my 20s out west in Steamboat Springs living the ski bum lifestyle. I moved back to Maine in my early 30s and started buying investment properties. I love the tangibility of this asset class and know there is more fun to be had.</p>

                <p>When I am not geeking out on spreadsheets, you will most likely find me biking, camping, rehabbing a property, traveling or any other excuse to step away from the computer screen.</p>

                <hr />

                <div className="row skill-set">
                  <SkillSet slug="real estate forte" list={['Property Valuation', 'Financial Management', 'Comp Analysis', 'Market Trends', 'Negotiations']} />
                  <SkillSet slug="web forte" list={['PHP/MySQL', 'WordPress', 'OOP', 'React/JS', 'HTML/CSS', 'Git']} />

                </div>

                <hr />

                <p className="text-center">
                  <a href="mailto:info@ericpierpont.com" className="email">info@ericpierpont.com</a>
                  <a href="https://www.facebook.com/eric.pierpont" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
                  <a href="https://www.instagram.com/epierpont/" className="social"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://www.linkedin.com/in/epierpont/" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href="https://stackoverflow.com/users/2762834/epierpont" className="social"><FontAwesomeIcon icon={faStackOverflow} /></a>
                  <a href="tel:2078383500" className="phone">207.838.3500</a>
                </p>

              </div>

              <div className="col-1"></div>

              <div className="col-md-5 experience">

                <div className="row no-gutters title">
                  <div className="col-0 col-md-3 date"></div>
                  <div className="col-12 col-md-9"><h2 className="text-center text-md-left">&#47;&#47; my <span>experience</span></h2></div>
                </div>

                <Experience details={{
                  date: "11.17 - Today",
                  company: "Real Estate Investor",
                  location: "Remote",
                  position: ""
                }} />

                <Experience details={{
                  date: "07.21 - 8.22",
                  company: "iBec Creative",
                  location: "Remote",
                  position: "Web Developer"
                }} />

                <Experience details={{
                  date: "09.14 - 06.21",
                  company: "Swift Communications",
                  location: "Remote",
                  position: "WordPress Developer"
                }} />

                <Experience details={{
                  date: "06.10 - 09.14",
                  company: "Independent Contractor",
                  location: "Remote",
                  position: "Web Developer"
                }} />

                <Experience details={{
                  date:
                    "10.07 - 06.10",
                  company: "Resort Group",
                  location: "Steamboat Springs, CO",
                  position: "Internet Marketing Specialist"
                }} />

                <hr />

                <Experience details={{
                  date: "09.02 - 05.06",
                  company: "The University of Maine",
                  location: "Orono, ME",
                  position: "B.A. in New Media, National Dean's List Society"
                }} />

                <hr />

                <div className="row no-gutters">
                  <div className="col-4 col-md-3 date"></div>
                  <div className="col-8 col-md-9"><a className="btn btn-primary" href={epierpontResume} role="button">Resume</a></div>
                </div>

              </div>

            </div>
          </div>
          : null}
      </section>
    )
  }

}

export default About
