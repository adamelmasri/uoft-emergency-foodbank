import React from 'react';
// import { Link } from 'gatsby';



import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import banner from '../assets/images/banner-min.jpg';

import ewb from '../assets/images/ewb.png';
import apus from '../assets/images/apus.png';
import tft from '../assets/images/tftb.png';
import fs from '../assets/images/fsb.png';


const sections = [
  { id: 'one', name: 'Contactless Foodbank' },
  { id: 'two', name: 'How It Works' },
  { id: 'three', name: 'Partners and Sponsors' },
  { id: 'four', name: 'Our Team' },

];
const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <div id="wrapper">
      <div id="main">
        <section id="one">
          <div className="image main" data-position="center">
            <img src={banner} alt="" />
          </div>
          <div className="container">
            <header className="major">
              <h2>A Contactless Foodbank for Students</h2>
              <p>
                <a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/1gKakfbU5J2rJsxSrt80G6jPQA6c9nWuMa1l1AZHCDXc/edit?ts=5e8f99fe">Register to receive a free box of produce</a>.
              </p>
            </header>
            <p>
              The COVID-19 crisis has amplified an existing problem for students at UofT and across Canada: <b>food insecurity</b>.
              Student poverty, a lack of economic opportunity and the closure of the University's only foodbank can only
              worsen the problem. Students from the Association of Part-time Undergradute Students (APUS), 
              Engineers Without Borders and Trek for Teens have partnered with FoodShare 
              to provide a safe way for food insecure students to access healthy food during difficult times. 
            </p>

            <ul className="actions fit">
                <li><a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/1gKakfbU5J2rJsxSrt80G6jPQA6c9nWuMa1l1AZHCDXc/edit?ts=5e8f99fe" className="icon fa-user-plus button primary fit">Register for a box</a></li>
                <li><a target="_blank" rel="noreferrer nofollow" href="https://www.gofundme.com/f/uoft-emergency-foodbank" className="button fit icon fa-dollar">Donate to the initiative</a></li>
              </ul>
          </div>
        </section>

        <section id="two">
          <div className="container">
            <h2>How It Works</h2>
            <ul className="feature-icons">
              <li className="fa-user-plus">
                <a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/1gKakfbU5J2rJsxSrt80G6jPQA6c9nWuMa1l1AZHCDXc/edit?ts=5e8f99fe">
                  Register&nbsp; 
                  </a>
                  for a box of produce using by providing your information no later than <b>Friday at 1pm</b>. 
                  </li>
              <li className="fa-envelope">You'll receive an email <b>within a few days</b> confirming the details of your order.</li>
              <li className="fas fa-leaf">Your food will arrive at your door between <b>Wednesday and Saturday of the following week.</b></li>
            </ul>
            <p>
              Every week students can register to receive a &nbsp;
              <a target="_blank" rel="noreferrer nofollow" href="https://goodfoodbox.foodshare.net/collections/frontpage/products/large-box">Good Food box</a>
              &nbsp;containing fresh produce. Each box feeds 2-4 people and students can continously register
              for as long as they need food. Information is provided to FoodShare by our volunteers
              in order to faciliate ordering and shipping. 
            </p>

          </div>
        </section>

        <section id="three">
          <div className="container">
            <h2>Partners and Sponsors</h2>
            <p>
              This initiative is made possible by the efforts and generosity of the following organizations.
              <br/>
              Please consider&nbsp; 
              <strong>
              <a target="_blank" rel="noreferrer nofollow" href="https://www.gofundme.com/f/uoft-emergency-foodbank">
              donating to the initiative &nbsp; 
              </a> 
                </strong>
              or &nbsp; 
              <strong>
              <a href="mailto:adam.el.masri@mail.utoronto.ca;donations.toronto@trekforteens.com;lpa.ewbuoft@gmail.com;"> 
              contacting us&nbsp; 
              </a> 
              </strong>
              

              if you'd like to support it through a partnership or sponsorship.
            </p>

            <div className="features">
            <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://apus.ca/" className="image">
                  <img src={apus} alt="APUS logo" />
                </a>
                <div className="inner">
                  <h4>Association of Part-time Undergradute Students</h4>
                  <p>
                    Advisory, outreach and financial support ($10000)
                  </p>
                </div>
              </article>
              <article>
                <a  target="_blank" rel="noreferrer nofollow" href="https://utoronto.ewb.ca/en/" className="image">
                  <img style={{width:"200px", margin:"auto"}} src={ewb} alt="EWB logo" />
                </a>
                <div className="inner">
                  <h4>Engineers Without Borders Toronto</h4>
                  <p>
                    Volunteer, outreach and financial support ($3000)
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://foodshare.net/" className="image">
                  <img src={fs} alt="FoodShare logo" />
                </a>
                <div className="inner">
                  <h4>FoodShare</h4>
                  <p>
                    Food provider, logistical and in-kind support ($6500)
                  </p>
                </div>
              </article>

              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.trekforteens.com/en/regions/toronto" className="image">
                  <img 
                  style={{backgroundColor:"#25355A", padding:"20px",}}
                  src="https://www.schoolofcities.utoronto.ca/sites/www.schoolofcities.utoronto.ca/files/SchoolofCities_HeaderLogo8.png" alt="Trek for Teens logo" />
                </a>
                <div className="inner">
                  <h4>University of Toronto School of Cities</h4>
                  <p>
                    Advisory, outreach and financial support ($1000)
                  </p>
                </div>
              </article>

              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.trekforteens.com/en/regions/toronto" className="image">
                  <img src={tft} alt="Trek for Teens logo" />
                </a>
                <div className="inner">
                  <h4>Trek for Teens</h4>
                  <p>
                    Volunteer and outreach support
                  </p>
                </div>
              </article>
              
            
            </div>
          </div>
        </section>

        <section id="four">
              <div className="container">
              <h2>Our Team</h2>
              <p>This initiative is led by the following project organizers:</p>
              <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/adamelmasri/">
                      <h4>Adam El-Masri</h4>
                      <span className="image fit"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQHQPdNtzEK8bg/profile-displayphoto-shrink_800_800/0?e=1598486400&v=beta&t=G86pWKA8aolKipsvTusSbm1n_WJ9qFKCWdLT8C60SXE" alt="" /></span>
                    </a>
                  </div>

                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/tanya-iyer-880981bb/">
                      <h4>Tanya Iyer</h4>
                      <span className="image fit"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQHBdbTENndskQ/profile-displayphoto-shrink_800_800/0?e=1598486400&v=beta&t=wAvduSqeWiBfEvdKgNTvRdpVoPgsQRURvdi6wQoktTE" alt="" /></span>
                    </a>
                  </div>

                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/amaial-mullick-6143b3152/">
                      <h4>Amaial Mullick</h4>
                      <span className="image fit"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQEyI7Eh9YI7-w/profile-displayphoto-shrink_800_800/0?e=1598486400&v=beta&t=qdA4X0BW_slZcgY49giVw7gSLG1DCRiezkBUABnM3PY" alt="" /></span>
                    </a>
                  </div>

                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/joanna-roy-162261195/">
                      <h4>Joanna Roy</h4>
                      <span className="image fit"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQEyI7Eh9YI7-w/profile-displayphoto-shrink_800_800/0?e=1598486400&v=beta&t=qdA4X0BW_slZcgY49giVw7gSLG1DCRiezkBUABnM3PY" alt="" /></span>
                    </a>
                  </div>

                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/rima-uraiqat/">
                      <h4>Rima Uraiqat</h4>
                      <span className="image fit"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQEbDl-TiAa6rA/profile-displayphoto-shrink_800_800/0?e=1598486400&v=beta&t=1RMjI_cMSSI34uN5ClvQGmSqBd3DseTelyd62lmY46c" alt="" /></span>
                    </a>
                  </div>

                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/joanna-roy-162261195/">
                      <h4>Sonam Vashisth</h4>
                      <span className="image fit"><img src="https://media-exp1.licdn.com/dms/image/C4D03AQHd9rfJDn4iwQ/profile-displayphoto-shrink_800_800/0?e=1598486400&v=beta&t=nXa4ALPPvcSlt67RzLaWMFEaF5xMkliOjoqDAvxrsXQ" alt="" /></span>
                    </a>
                  </div>
              </div>
              </div>
              </div>
            </section>


        
      </div>
    </div>
    <section id="footer">
      <PageFooter />
    </section>
  </Layout>
);

export default IndexPage;
