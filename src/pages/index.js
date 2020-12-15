import React, {useState} from 'react';
// import { Link } from 'gatsby';



import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import config from '../../config';


import banner from '../assets/images/banner-min.jpg';

import ewb from '../assets/images/ewb.png';
import sgs from '../assets/images/sgs.jpeg';
import apus from '../assets/images/apus.png';
import tft from '../assets/images/tftb.png';
import fs from '../assets/images/fsb.png';
import joanna from '../assets/images/joanna-li.jpeg'
import adam from '../assets/images/adam-li.jpeg'
import tanya from '../assets/images/tanya-li.jpeg'
import amaial from '../assets/images/amaial-li.jpeg'
import sonam from '../assets/images/sonam-li.jpeg'



import { Card } from 'react-bootstrap';
import { CardGroup}  from 'react-bootstrap';
import { CardDeck}  from 'react-bootstrap';
import { Alert}  from 'react-bootstrap';
import { Button}  from 'react-bootstrap';





const sections = [
  { id: 'one', name: 'Contactless Foodbank' },
  { id: 'two', name: 'How It Works' },
  { id: 'three', name: 'Goals and Impact' },
  { id: 'four', name: 'Partners and Sponsors' },
  { id: 'five', name: 'Our Team' },
  { id: 'six', name: 'Media'}

];

function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
          <p style={{textAlign:"center", margin:"0"}}>
          We updated our <a target="_blank" style={{textDecoration:"underline", color:"blue"}} href="/additional-resources">'Additional Resources'</a> page on November 17th with services and resource lists within Toronto, Peel, York and Durham. 
          If you require urgent food relief services, please refer to the 'City-listed resources' or the automated chatbot 'Chalmers'.
            </p></Alert>
    );
  }
  return <div></div>;
}



const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />
    <div id="wrapper">
      <div id="main">
        <section id="one">
          <div className="image main" data-position="center">
            <img src={banner} alt="" />
          </div>
          <AlertDismissibleExample/>

          <div className="container">
            <header className="major">
              <h2>A Contactless Foodbank for Students</h2>
              <p>
                <a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/1gKakfbU5J2rJsxSrt80G6jPQA6c9nWuMa1l1AZHCDXc/edit?ts=5e8f99fe">Register to receive a free box of produce</a>.
              </p>
            </header>
            <p>
            The COVID-19 crisis has amplified an existing problem for students at UofT and across Canada: food insecurity. 
            Student poverty, a lack of economic opportunity and the closure of the University's only foodbank can only worsen the problem. 
            Students and staff from various unions, student groups and faculties have partnered to provide a safe way for food-insecure students to access healthy food during difficult times. 
            We do so by providing food boxes and resources on financial aid.
 
            </p>

            <ul className="actions fit">
                <li><a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/1gKakfbU5J2rJsxSrt80G6jPQA6c9nWuMa1l1AZHCDXc/edit?ts=5e8f99fe" className="icon fa-user-plus button primary fit">Register for a box</a></li>
                <li><a rel="noreferrer nofollow" href="https://fundraise.ewb.ca/https-fundraise-ewb_emergencyfoodbank" className="button primary fit icon fa-dollar">Donate now</a></li>
                <li><a target="_blank" rel="noreferrer nofollow" href="/additional-resources" className="button fit icon fa-search">See additional resources</a></li>
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
                  for a box of produce by providing your information no later than <b>Friday at 1 pm</b>. 
                  </li>
              <li className="fa-envelope">You'll receive an email <b>within a few days</b> confirming the details of your order.</li>
              <li className="fas fa-leaf">Your food will arrive at your door between <b>Wednesday and Saturday of the following week.</b></li>
            </ul>
            <p>
              Every week students can register to receive a &nbsp;
              <a target="_blank" rel="noreferrer nofollow" href="https://goodfoodbox.foodshare.net/collections/frontpage/products/large-box">Good Food box</a>
              &nbsp;containing fresh produce. Each box feeds 2-4 people and students can continously register
              for as long as they need food. Information is provided to FoodShare by our volunteers
              in order to faciliate ordering and shipping. <strong>Please note we can only support 50 students per week on a first-come, first-serve
              basis.</strong>
            </p>

          </div>
        </section>

        <section id="three">
          <div className="container">
            <h2>Goals and Impact</h2>
            <p> Our immediate goal is to ensure that students have consistent access to food. Our long-term goal is to advocate for economic justice through food justice.
               Recognizing that food insecurity is a 
              symptom of financial hardship, we are actively developing our program to deliver better services, collect and share research data,
              establish strategic partnerships with diverse stakeholders, and generate meaningful and progressive dialgoue regarding equitable access to education
              as it pertains to the barriers created by financial hardship.
            </p>
            <h3>Impact to date</h3>
            <ul className="feature-icons impact-icons">
              <li className="fa-archive"><strong>1300+ boxes delivered</strong> </li>
              <li className="fa-users"> <strong> 300+ students served </strong> </li>
              <li className="fa-usd"><strong>$34k+ in funds raised</strong> to tackle food insecurity</li>
              <li className="fa-book"><a target="_blank"rel="noreferrer nofollow" href="/additional-resources">Financial aid and food resources guide developed</a></li>
              <li className="fa-handshake-o"><strong>10 solidarity partnerships formed</strong> with UofT and community organizations  </li>


            </ul>
           
          </div>
        </section>

        <section id="four">
          <div className="container">
            <h2>Partners and Sponsors</h2>
            <p>
              This initiative is made possible by the efforts and generosity of the following organizations.
              <br/>
              Please consider 
              <strong>
              <a href={config.socialLinks[0].url}> 
              &nbsp;contacting us&nbsp;
              </a> 
              </strong>
              

              if you'd like to support it through a partnership or sponsorship. We also accept 

              <strong>
              <a target="_blank" href="https://fundraise.ewb.ca/https-fundraise-ewb_emergencyfoodbank"> 
              &nbsp;financial donations. &nbsp;
              </a> 
              </strong>
            </p>
            <div className="features">
            
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://apus.ca/" className="image">
                  <img src={apus} alt="APUS logo" />
                </a>
                <div className="inner">
                  <h4>Association of Part-time Undergradute Students</h4>
                  <p>
                    Advisory, outreach and financial support ($13000)
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
                  <h4>University of Toronto School of Graduate Studies</h4>
                  <p>
                    Advisory and financial support ($2000)
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="" className="image">
                  <img 
                  src={sgs} alt="School of Graduate Studies logo" />
                </a>
                <div className="inner">
                  <h4>University of Toronto School of Cities</h4>
                  <p>
                    Advisory, outreach and financial support ($1000)
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.cupe3902.org/" className="image">
                  <img src="https://www.cupe3902.org/wp-content/uploads/2016/11/logo-red-blue-0.5x-300x187.png" alt="CUPE 3902 logo" />
                </a>
                <div className="inner">
                  <h4>CUPE 3902</h4>
                  <p>
                    Advisory, outreach and financial support ($5000)
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
                    Volunteer, outreach and financial support ($6000)
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
                    Food provider, logistical and in-kind support ($7500)
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

        

        <section id="five">
              <div className="container">
              <h2>Our Team</h2>
              <p>This initiative is led by the following project organizers:</p>
              <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/adamelmasri/">
                      <h4>Adam El-Masri</h4>
                      <span className="image fit"><img src={adam} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/tanya-iyer-880981bb/">
                      <h4>Tanya Iyer</h4>
                      <span className="image fit"><img src={tanya} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/amaial-mullick-6143b3152/">
                      <h4>Amaial Mullick</h4>
                      <span className="image fit"><img src={amaial} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/joanna-roy-162261195/">
                      <h4>Joanna Roy</h4>
                      <span className="image fit"><img src={joanna} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-4 ">
                    <a target="_blank" href="https://www.linkedin.com/in/sonam-vashisth-206340157/">
                      <h4>Sonam Vashisth</h4>
                      <span className="image fit"><img src={sonam} alt="" /></span>
                    </a>
                  </div>
              </div>
              </div>
              </div>
            </section>

            <section id="six">
              <div className="container">
              <h2>Media</h2>
              <p>Publicity and news articles regarding this initiative.</p>

              <CardDeck>
  <Card>
    <Card.Header>
    <Card.Text>
    Op-ed: How we’re tackling student food insecurity through COVID-19
</Card.Text>
    </Card.Header>
    <Card.Img variant="top" src="https://thevarsity.ca/wp-content/uploads/2020/12/COMMENT_Blind-eye-to-Student-hunger-72_Fiona-Tung.jpg" />
    <Card.Body>
      <Card.Text>
      U of T Emergency Foodbank members (Adam and Amaial) on the systemic nature of poverty
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        <Card.Link target="_blank" href="https://thevarsity.ca/2020/12/06/op-ed-how-were-tackling-student-food-insecurity-through-covid-19/">
          Source: The Varsity
        </Card.Link>
      </small>
    </Card.Footer>
  </Card>

  <Card>
    <Card.Header>
    <Card.Text>
    SofC Fellow leads an initiative to create UofT Emergency Foodbank</Card.Text>
    </Card.Header>
    <Card.Img variant="top" src="https://www.schoolofcities.utoronto.ca/sites/www.schoolofcities.utoronto.ca/files/Snip20200617_50.png" />
    <Card.Body>
      <Card.Text>
      With the closing down of the only Foodbank at UofT, 2020 Student Fellow and Student Academy member Adam El-Masri, 
      with support from a group of similarly driven U of T students, put into motion the creation of a UofT Emergency Foodbank for economically vulnerable students. 
      Read our interview with Adam, where he explains what made him embark on this ambitious project and the motivation behind his dedication.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        <Card.Link target="_blank" href="https://www.schoolofcities.utoronto.ca/news/sofc-fellow-leads-initiative-create-uoft-emergency-foodbank">
          Source: School of Cities News
        </Card.Link>
      </small>
    </Card.Footer>
  </Card>
  
</CardDeck>

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
