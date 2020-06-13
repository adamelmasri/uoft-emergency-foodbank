import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import banner from '../assets/images/banner.jpg';

import ewb from '../assets/images/ewb.png';
import apus from '../assets/images/apus.png';
import tft from '../assets/images/tftb.png';
import fs from '../assets/images/fsb.png';


const sections = [
  { id: 'one', name: 'Contactless Foodbank' },
  { id: 'two', name: 'How It Works' },
  { id: 'three', name: 'Our Partners' },
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
              <br/>
              Student poverty, a lack of economic opportunity and the closure of the University's only foodbank can only
              worsen the problem. Students from the Association of Part-time Undergradute Students (APUS), 
              Engineers Without Borders and Trek for Teens have partnered with FoodShare 
              to provide a safe way for food insecure students to access healthy food during difficult times. 
            </p>
          </div>
        </section>

        <section id="two">
          <div className="container">
            <h3>How It Works</h3>
            <ul className="feature-icons">
              <li className="fa-user-plus">
                <a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/1gKakfbU5J2rJsxSrt80G6jPQA6c9nWuMa1l1AZHCDXc/edit?ts=5e8f99fe">
                  Register&nbsp; 
                  </a>
                  for a box of produce using by providing your information no later than <b>Friday at 1pm</b>. 
                  </li>
              <li className="fa-envelope">You'll receive an email <b>within a few days</b> confirming the details of your order.</li>
              <li className="fas fa-leaf">Your food will arrive at your door between <b>Wedneday and Saturday of the following week.</b></li>
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
            <h3>Partners and Sponsors</h3>
            <p>
              This initiative is made possible by the efforts and generosity of the following organizations:
            </p>
            <div className="features">
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://utoronto.ewb.ca/en/" className="image">
                  <img src={ewb} alt="EWB logo" />
                </a>
                <div className="inner">
                  <h4>Engineers Without Borders Toronto</h4>
                  <p>
                    Volunteer, outreach and financial support ($3000)
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://apus.ca/" className="image">
                  <img src={apus} alt="APUS logo" />
                </a>
                <div className="inner">
                  <h4>Association of Part-time Undergradute Students</h4>
                  <p>
                    Advisory, outreach and financial support
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
            </div>
          </div>
        </section>

        {/* <section id="four">
          <div className="container">
            <h3>Contact Us</h3>
            <p>
              Integer eu ante ornare amet commetus vestibulum blandit integer in
              curae ac faucibus integer non. Adipiscing cubilia elementum
              integer. Integer eu ante ornare amet commetus.
            </p>
            <form method="post" action="#">
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="6"
                  />
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        className="primary"
                        value="Send Message"
                      />
                    </li>
                    <li>
                      <input type="reset" value="Reset Form" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section id="five">
          <div className="container">
            <h3>Elements</h3>
            <h4>Text</h4>
            <p>
              This is <b>bold</b> and this is <strong>strong</strong>. This is{' '}
              <i>italic</i> and this is <em>emphasized</em>. This is{' '}
              <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code:{' '}
              <code>for (;;) ... </code>. Finally,{' '}
              <a target="_blank" href="/#">this is a link</a>.
            </p>
            <hr />
            <header>
              <h4>Heading with a Subtitle</h4>
              <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
            </header>
            <br />
            <h5>
              This started contains all HTML elements
              <br />
              Checkout available styling
              <Link to="/Element"> here</Link>
            </h5>
          </div>
        </section> */}
      </div>
    </div>
    <section id="footer">
      <PageFooter />
    </section>
  </Layout>
);

export default IndexPage;
