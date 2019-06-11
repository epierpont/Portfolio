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

import epierpontResume from '../pdfs/epierpont-resume.pdf'

class About extends Component {

  render() {
    return (
      <section className="about-me">
      {this.props.renderMsg ?
        <div className="container">
          <div className="row no-gutters">

            <div className="col-md-6">

              <h2 className="text-center text-md-left">&#47;&#47; about <span>me</span></h2>

              <p><strong>Hi there</strong>, my name is Eric Pierpont and I am a web developer based out of Steamboat Springs, CO. I grew up in Maine and attended the University of Maine where I earned my B.A. in New Media. I have been working in the industry since 2006 and have experience working for both private companies and as a contractor. I have a true passion for development which pushes me to learn something new with each and every project. It makes me smile to tell people that "I love what I do", and in the end I know that my work shows that.</p>

              <p>When I am not playing web geek, you will most likely find me skiing, biking, fishing, camping, playing disc golf or any other excuse to be outside.</p>

              <hr />

              <div className="row skill-set">
                <SkillSet slug="forte" list={['PHP/MySQL', 'WordPress', 'OOP', 'HTML/CSS', 'Bootstrap', 'Sass', 'Git', 'Agile/Scrum']}/>
                <SkillSet slug="secondary" list={['JavaScript/jQuery', 'React', 'NPM', 'NodeJS', 'CLI']}/>
                <SkillSet slug="other" list={['RE Investments', 'Long Term Rentals', 'Property Management']}/>
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
                date: "09.14 - Today",
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

              <Experience details={{ date:
                "10.07 - 06.10",
                company: "Resort Group",
                location: "Steamboat Springs, CO",
                position: "Internet Marketing Specialist"
              }} />

              <Experience details={{
                date: "11.06 - 10.07",
                company: "Sunday River",
                location: "Newry, ME",
                position: "Interactive Marketing Manager"
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
        : null }
      </section>
    )
  }

}

export default About
