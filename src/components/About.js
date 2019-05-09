import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons'

class About extends Component {

  render() {
    return (
      <section className="about-me">
        <div className="container">
          <div className="row no-gutters">

            <div className="col-md-6">

              <h2 className="text-center text-md-left">&#47;&#47; about <span>me</span></h2>

              <p><strong>Hi there</strong>, my name is Eric Pierpont and I am a web developer based out of Steamboat Springs, CO. I grew up in Maine and attended the University of Maine where I earned my B.A. in New Media. I have been working in the industry since 2006 and have experience working for both private companies and as a contractor. I have a true passion for development which pushes me to learn something new with each and every project. It makes me smile to tell people that "I love what I do", and in the end I know that my work shows that.</p>

              <p>When I am not playing web geek, you will most likely find me skiing, biking, fishing, camping, playing disc golf or any other excuse to be outside.</p>

              <hr />

              <div className="row skill-set">

                <div className="col forte">
                  <h4><span>my forte</span></h4>
                  <ul>
                    <li>PHP/MySQL</li>
                    <li>WordPress</li>
                    <li>HTML/CSS</li>
                    <li>Bootstrap</li>
                    <li>Sass</li>
                    <li>Git</li>
                    <li>Agile/Scrum</li>
                  </ul>
                </div>

                <div className="col secondary">
                  <h4><span>secondary</span></h4>
                  <ul>
                    <li>OOP</li>
                    <li>JavaScript/jQuery</li>
                    <li>React</li>
                    <li>NPM</li>
                    <li>NodeJS</li>
                    <li>CLI</li>
                  </ul>
                </div>

                <div className="col goals">
                  <h4><span>other</span></h4>
                  <ul>
                    <li>RE Investments</li>
                    <li>Long Term Rentals</li>
                    <li>Property Management</li>
                  </ul>
                </div>

              </div>

              <hr />
              <p className="text-center">
                <a href="#" className="email">info@ericpierpont.com</a>
                <a href="#" className="social"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#" className="social"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="social"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="#" className="social"><FontAwesomeIcon icon={faStackOverflow} /></a>
                <a href="#" className="phone">207.838.3500</a>
              </p>

            </div>{/* END .col */}

            <div className="col-1"></div>{/* END .col */}

            <div className="col-md-5 experience">

              <div className="row no-gutters title">
                <div className="col-0 col-md-3 date"></div>
                <div className="col-12 col-md-9"><h2 className="text-center text-md-left">&#47;&#47; my <span>experience</span></h2></div>
              </div>{/* END .row */}

              <div className="row no-gutters">
                <div className="col-4 col-md-3 date">09.14 - Today</div>
                <div className="col-8 col-md-9"><strong>Swift Communications</strong> | <span>Remote</span><br />
                  WordPress Developer</div>
              </div>{/* END .row */}

              <div className="row no-gutters">
                <div className="col-4 col-md-3 date">06.10 - 09.14</div>
                <div className="col-8 col-md-9"><strong>Independent Contractor</strong> | <span>Remote</span><br/>
                  Web Developer</div>
              </div>{/* END .row */}

              <div className="row no-gutters">
                <div className="col-4 col-md-3 date">10.07 - 06.10</div>
                <div className="col-8 col-md-9"><strong>Resort Group</strong> | <span>Steamboat Springs, CO</span><br/>
                  Internet Marketing Specialist</div>
              </div>{/* END .row */}

              <div className="row no-gutters">
                <div className="col-4 col-md-3 date">11.06 - 10.07</div>
                <div className="col-8 col-md-9"><strong>Sunday River</strong> | <span>Newry, ME</span><br/>
                  Internet Marketing Specialist</div>
              </div>{/* END .row */}

              <hr />

              <div className="row no-gutters">
                <div className="col-4 col-md-3 date">09.02 - 05.06</div>
                <div className="col-8 col-md-9"><strong>The University of Maine </strong> | <span>Orono, ME</span><br/>
                  B.A. in New Media, <em>National Dean's List Society</em></div>
              </div>{/* END .row */}

              <hr />

              <div className="row no-gutters">
                <div className="col-4 col-md-3 date"></div>
                <div className="col-8 col-md-9"><a class="btn btn-primary" href="#" role="button">Resume</a></div>
              </div>{/* END .row */}

            </div>{/* END .col */}

          </div>{/* END .row */}
        </div>{/* END .container */}
      </section>
    )
  }

}

export default About
