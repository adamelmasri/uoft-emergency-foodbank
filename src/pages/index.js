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
import philosophy from '../assets/images/philosophy.jpg';
import cfcc from '../assets/images/cfcc.png';
import uoft from '../assets/images/uoft.png';
import utgsu from '../assets/images/utgsu.jpg'
import sh from '../assets/images/shlogo.png';
import db from '../assets/images/dblogo.jpeg';
import ecobio from '../assets/images/ecobio.png';
import history from '../assets/images/history.png';







import joanna from '../assets/images/joanna-li.jpeg'
import adam from '../assets/images/adam-li.jpeg'
import tanya from '../assets/images/tanya-li.jpeg'
import amaial from '../assets/images/amaial-li.jpeg'
import sonam from '../assets/images/sonam-li.jpeg'
import bridget from '../assets/images/bridget.jpeg'
import person from '../assets/images/user.png'
import chaintanya from '../assets/images/chaintanya.jpeg'
import shiqi from '../assets/images/shiqi.jpeg'
import katie from '../assets/images/katie.jpg'







import { Card } from 'react-bootstrap';
import { CardGroup}  from 'react-bootstrap';
import { CardDeck}  from 'react-bootstrap';
import { Alert}  from 'react-bootstrap';
import { Button}  from 'react-bootstrap';

import moment from 'moment';

var weeksSinceStart = moment().diff(moment("2020-04-30"), 'week')
console.log(weeksSinceStart)


const sections = [
  { id: 'one', name: 'Contactless Food Bank' },
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
      <div>
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <p style={{textAlign:"center", margin:"0"}}>

          <span style={{fontWeight:"bold"}}>Important announcement - Please Read</span>
          <br/>

          Please see the following information regarding our plan for our future operations. 
          There will be an email coming out shortly to further explain the situation in greater detail
          including plans on next steps and ways in which our community can be more involved
          to support this initiative. 
          <br/>
          <br/>


         <span style={{fontWeight:"bold"}}>What happened?</span>
         <br/>
        The UofT Emergency Food Bank has temporarily run out of funds.
        As we await further prospective funding to arrive, this means that we are 
        required to pause our programming for the near future (which may be a few weeks). 
        there are various resources available that can
        be found here: <a target="_blank" style={{textDecoration:"underline", color:"blue"}} href="/additional-resources"> Additional resources </a> 
        </p></Alert>
      </div>
     
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
              <h2>A Contactless Food Bank for Students</h2>
              <p>
                <a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/1gKakfbU5J2rJsxSrt80G6jPQA6c9nWuMa1l1AZHCDXc/edit?ts=5e8f99fe">Register to receive a free box of produce</a>.
              </p>
            </header>
            <p>
            The COVID-19 crisis has amplified an existing problem for students at UofT and across Canada: food insecurity. 
            Student poverty, a lack of economic opportunity and the closure of the University's only food bank can only worsen the problem. 
            Students and staff from various unions, student groups and faculties have partnered to provide a safe way for food-insecure students to access healthy food during difficult times. 
            We do so by providing food boxes and resources on financial aid.
            </p>

            <ul className="actions fit">
                <li><a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/1gKakfbU5J2rJsxSrt80G6jPQA6c9nWuMa1l1AZHCDXc/edit?ts=5e8f99fe" className="icon fa-user-plus button primary fit">Register for a box</a></li>
                <li><a rel="noreferrer nofollow" href="https://fundraise.ewb.ca/campaign/uoft-emergency-food-bank-fundraiser/c307061" className="button primary fit icon fa-dollar">Donate now</a></li>
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
                  for a box of produce by providing your information no later than <b>Thursday at 10am</b>. 
                  </li>
              <li className="fa-envelope">You'll receive an email <b>the following Monday</b> confirming the details of your order .</li>
              <li className="fas fa-leaf">Your food will arrive at your door between <b>Tuesday and Sunday of the following week.</b> 
               You will receive text messages notifying you of the status of your delivery on the delivery day including the morning of, 20 minutes before it arrives,
              and when it arrives.</li>
            </ul>
            <p>
              Every week registered and non-registered students (including recent alumni) can sign up to receive a &nbsp;
              <a target="_blank" rel="noreferrer nofollow" href="https://goodfoodbox.foodshare.net/collections/frontpage/products/large-box">large Good Food box</a>
              &nbsp; 
              or
              &nbsp;
              <a target="_blank" rel="noreferrer nofollow" href="https://goodfoodbox.foodshare.net/collections/frontpage/products/large-box">small Good Food box</a>
              &nbsp;
              containing fresh produce. Students can continously register
              for as long as they need food. Information is provided to FoodShare by our volunteers
              in order to faciliate ordering and shipping. <strong>Please note we can only support 50 students per week on a first-come, first-serve
              basis. The form may close early if we reach our limit. The form re-opens every Sunday at noon.</strong>
            </p>

            <h3>Commitment to Accessibility</h3>
            <p>If for any reason the information we request poses a barrier to accessing this service, please send us an email with your name and address and we will provide a box. If you are not comfortable with sharing your address, we can also provide a giftcard
              using only your name and UofT email.<strong> As long as you self-identify as a member of the UofT community, we are committed to providing you with access to food to the best of our abilities.</strong> We welcome any and all feedback on how we can
              improve our service and reduce barriers wherever possible.
              </p>

          </div>
        </section>

        <section id="three">
          <div className="container">
          <div className="features">
          
            <h2>Goals and Impact</h2>
            <p> Our immediate goal is to ensure that students have consistent access to food. Our long-term goal is to advocate for economic justice and poverty alleviation.
               Recognizing that food insecurity is a 
              symptom of financial hardship, we are actively developing our program to deliver better services, collect and share research data,
              establish strategic partnerships with diverse stakeholders, and generate meaningful and progressive dialgoue regarding equitable access to education
              as it pertains to dismantling the barriers created by financial hardship.
            </p>
            <article>
            <h3>Impact to Date</h3>
            <ul className="feature-icons impact-icons">
              <li className="fa-archive"><strong>{weeksSinceStart * 50}+ boxes and giftcards provided</strong> </li>
              <li className="fa-users"> <strong> 1000+ people </strong> in over <strong>600+ student households </strong> </li>
              <li className="fa-usd"><strong>$75k+ in funds raised</strong> to tackle food inssecurity</li>
              <li className="fa-book"><a target="_blank"rel="noreferrer nofollow" href="/additional-resources">Financial aid and food resources guide developed</a></li>
              <li className="fa-handshake-o"><strong>15+ solidarity partnerships formed</strong> with UofT and community organizations  </li>
            </ul>
            </article>
            
            <article>
            <h3>
              'Feeding the Student Movement' Program 
            </h3>
            <p>
              A food honoraria program that aims to support students who participate in online programming 
              focusing on social justice and equity (e.g. workshops, panel discussions, etc.). In providing a food honoria, we are limiting a financial barrier that
              often prohibits students in need from participating in equity and social justice seeking movements. Contact us if your
              UofT group/organization/community is interested in collaborating. 
            </p>
            <div style={{}}>
            <h4>Events we've sponsored</h4>
            <ul className="feature-icons">
            <li>
              <a href="https://fb.me/e/4RoBuA8tR" target="_blank" rel="noreferrer nofollow">
             Mental Health From the Margins: A Community Consultation By and For Equity-Seeking Groups and Students
              </a> in collaboration with major UofT campus unions, college councils, professional faculty associations, and the MHPC
            </li>
            <li>
              <a href="https://www.instagram.com/p/CMXpUOIBD5r/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer nofollow">
              March Townhall for SMART: </a>tri-campus mental health updates and questions regarding campaigns, peer suppoort and consultations
            </li>

            <li>
              <a href="https://www.instagram.com/p/CMXpUOIBD5r/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer nofollow">
              April Meeting for SMART 
              </a> 
              </li>
            <li>
              <a href="https://www.instagram.com/p/CPTbpS2hiIH/?utm_source=ig_web_copy_link" target="_blank" rel="noreferrer nofollow">
              May Meeting for SMART </a> </li>
            <li>
              <a href="https://www.instagram.com/thepearsproject/?hl=en" target="_blank" rel="noreferrer nofollow">
              PEARS Project Event: The PEARS Project is a grassroots, trauma-informed coalition that provides support and resources to survivors of sexual violence across UofT.
              </a>
            </li>
            </ul>
            </div>
            </article>
            
           </div>
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
              <a target="_blank" href="https://fundraise.ewb.ca/campaign/uoft-emergency-food-bank-fundraiser/c307061"> 
              &nbsp;financial donations. &nbsp;
              </a> 
              </strong>
            </p>
            <div className="features">
            <article>
                <a  target="_blank" rel="noreferrer nofollow" href="" className="image">
                  <img style={{width:"200px", margin:"auto"}} src={cfcc} alt="CFCC logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://cfccanada.ca/en-US/Home">Community Food Centres Canada</a></h4>
                  <p>
                    We are a <a target="_blank" rel="noreferrer nofollow" href="https://goodfoodorganizations.ca/"></a>Good Food organization partner receiving
                    training on food bank redevelopment and training on advocacy and campaigning.
                  </p>
                </div>
              </article>
            <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://foodshare.net/" className="image">
                  <img src={fs} alt="FoodShare logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://foodshare.net/">FoodShare</a></h4>
                  <p>
                    Food provider, logistical, strategic and in-kind support ($16000)
                  </p>
                </div>
              </article>

              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://secondharvest.ca/" className="image">
                  <img src={sh} alt="Second Harvest Logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://secondharvest.ca/">Second Harvest</a></h4>
                  <p>
                    Financial support through the Emergency Fund  ($10000)
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.dailybread.ca/" className="image">
                  <img src={db} alt="Daily Bread Logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://www.dailybread.ca/">Daily Bread</a></h4>
                  <p>
                   Food provider and logistical support
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://apus.ca/" className="image">
                  <img src={apus} alt="APUS logo" />
                </a>
                <div className="inner">
                  <h4><a target="_blank" rel="noreferrer nofollow" href="https://apus.ca/">Association of Part-time Undergradute Students</a></h4>
                  <p>
                    Advisory, outreach and financial support ($13000)
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://utgsu.ca/" className="image">
                  <img src={utgsu} alt="UTGSU logo" />
                </a>
                <div className="inner">
                  <h4><a target="_blank" rel="noreferrer nofollow" href="https://utgsu.ca/">University of Toronto Graduate Student Union</a></h4>
                  <p>
                    Advisory, outreach and financial support ($1000)
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.viceprovoststudents.utoronto.ca/" className="image">
                  <img src={uoft} alt="UofT logo" />
                </a>
                <div className="inner">
                  <h4><a target="_blank" rel="noreferrer nofollow" href="https://www.viceprovoststudents.utoronto.ca/s">University of Toronto - Office of the Vice-Provost, Students</a></h4>
                  <p>
                    Logistical and financial support($20000)
                  </p>
                </div>
              </article>

              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.cupe3902.org/" className="image">
                  <img src="https://www.cupe3902.org/wp-content/uploads/2016/11/logo-red-blue-0.5x-300x187.png" alt="CUPE 3902 logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://www.cupe3902.org/">CUPE 3902</a></h4>
                  <p>
                    Advisory, outreach and financial support ($5000)
                  </p>
                </div>
              </article>
              
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.schoolofcities.utoronto.ca/" className="image">
                  <img 
                  style={{backgroundColor:"#25355A", padding:"20px",}}
                  src="https://www.schoolofcities.utoronto.ca/sites/www.schoolofcities.utoronto.ca/files/SchoolofCities_HeaderLogo8.png" alt="School of Cities logo" />
                </a>
                <div className="inner">
                  <h4><a target="_blank" rel="noreferrer nofollow" href="https://www.schoolofcities.utoronto.ca/">University of Toronto - School of Cities</a></h4>
                  <p>
                  Advisory, outreach and financial support ($1000)
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.sgs.utoronto.ca/" className="image">
                  <img 
                  src={sgs} alt="School of Graduate Studies logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://www.sgs.utoronto.ca/">University of Toronto - School of Graduate Studies</a></h4>
                  <h4></h4>
                  <p>
                  Advisory and financial support ($2000)
                  </p>
                </div>
              </article>
              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://philosophy.utoronto.ca/" className="image">
                  <img 
                  src={philosophy} alt="Department of Philosophy logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://philosophy.utoronto.ca/">University of Toronto - Department of Philosophy</a></h4>
                  <p>
                    Financial Support ($500)
                  </p>
                </div>
              </article>

              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://eeb.utoronto.ca/" className="image">
                  <img 
                  src={ecobio} alt="Department of Ecology & Evolutionary Biology logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://eeb.utoronto.ca/">University of Toronto - Department of Ecology & Evolutionary Biology</a></h4>
                  <p>
                    Financial Support ($1000)
                  </p>
                </div>
              </article>

              <article>
                <a 
                style={{backgroundColor:"#25355A",
              padding:10,}}

                target="_blank" rel="noreferrer nofollow" href="https://www.history.utoronto.ca/" className="image">
                  <img 
                  src={history} alt="Department of History logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://www.history.utoronto.ca/">University of Toronto - Department of History</a></h4>
                  <p>
                    Financial Support ($494)
                  </p>
                </div>
              </article>
              
              <article>
                <a  target="_blank" rel="noreferrer nofollow" href="https://utoronto.ewb.ca/en/" className="image">
                  <img style={{width:"200px", margin:"auto"}} src={ewb} alt="EWB logo" />
                </a>
                <div className="inner">
                <h4><a target="_blank" rel="noreferrer nofollow" href="https://utoronto.ewb.ca/en/">Engineers Without Borders Toronto</a></h4>
                  <p>
                    Volunteer, outreach and financial support ($6000)
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
                  <div className="col-3 ">
                    <a target="_blank" href="https://www.linkedin.com/in/adamelmasri/">
                      <h4>Adam El-Masri</h4>
                      <span className="image fit"><img src={adam} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-3 ">
                    <a target="_blank" href="https://www.linkedin.com/in/tanya-iyer-880981bb/">
                      <h4>Tanya Iyer</h4>
                      <span className="image fit"><img src={tanya} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-3 ">
                    <a target="_blank" href="https://www.linkedin.com/in/amaial-mullick-6143b3152/">
                      <h4>Amaial Mullick</h4>
                      <span className="image fit"><img src={amaial} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-3 ">
                    <a target="_blank" href="https://www.linkedin.com/in/joanna-roy-162261195/">
                      <h4>Joanna Roy</h4>
                      <span className="image fit"><img src={joanna} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-3 ">
                    <a target="_blank" href="https://www.linkedin.com/in/sonam-vashisth-206340157/">
                      <h4>Sonam Vashisth</h4>
                      <span className="image fit"><img src={sonam} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-3 ">
                    <a target="_blank" href="https://www.linkedin.com/in/bridgethenry/">
                      <h4>Bridget Henry</h4>
                      <span className="image fit"><img src={bridget} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-3 ">
                    <a target="_blank" href="#">
                      <h4>Katie Rockburn</h4>
                      <span className="image fit"><img src={katie} alt="" /></span>
                    </a>
                  </div>

                  <div className="col-3 ">
                    <a target="_blank" href="https://www.linkedin.com/in/chaitanya-ahuja/">
                      <h4>Chaitanya Ahuja</h4>
                      <span className="image fit"><img src={chaintanya} alt="" /></span>
                    </a>
                  </div>
                  <div className="col-3 ">
                    <a target="_blank" href="https://www.linkedin.com/in/shiqi-xu/">
                      <h4>Shiqi Xu</h4>
                      <span className="image fit"><img src={shiqi} alt="" /></span>
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

<CardDeck style={{marginBottom:"25px"}}>

<Card >
  <Card.Header>
  <Card.Text>
  Feeding City: COVID-19 and Campus Food Insecurity
</Card.Text>
  </Card.Header>
  <Card.Img variant="top" src="https://www.utsc.utoronto.ca/projects/feedingcity/wp-content/uploads/sites/31/2021/04/MicrosoftTeams-image-1-e1619228756717.jpg" />
  <Card.Body>
    <Card.Text>
    Research report documenting food insecurity on UofT campuses
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">
      <Card.Link target="_blank" href="https://www.utsc.utoronto.ca/projects/feedingcity/2021/05/05/covid-19-and-campus-food-insecurity/">
        Source: UTSC - Feeding The City: Pandemic & Beyond
      </Card.Link>
    </small>
  </Card.Footer>
</Card>
<Card >
  <Card.Header>
  <Card.Text>
  Food Security: The Key to Student Self-fulfillment
</Card.Text>
  </Card.Header>
  <Card.Img variant="top" src="http://blogs.studentlife.utoronto.ca/innovationhub/files/2020/04/cropped-Innovation-Hub-Icon-with-Text-1.png" />
  <Card.Body>
    <Card.Text>
    A blog post releasing the findings of a report on student food security lists the UofT Emergency Food Bank as a resource. 
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">
      <Card.Link target="_blank" href="http://blogs.studentlife.utoronto.ca/innovationhub/food-insecurity-the-key-to-student-self-fulfillment/">
        Source: UofT Innovation Hub
      </Card.Link>
    </small>
  </Card.Footer>
</Card>
<Card>
    <Card.Header>
    <Card.Text>
    Hunger and Our Communities: Organization Highlight
  </Card.Text>
    </Card.Header>
    <Card.Img variant="top" src="https://feedingcityorg.files.wordpress.com/2020/12/featured-images-ftc-50.png" />
    <Card.Body>
      <Card.Text>
      Junior Researchers: Azra Alavi, Hannah Klemmensen, Olivia Rodrigo and Yusra Khalid highlight community organizations tackling food insecurity.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        <Card.Link target="_blank" href="https://feedingcity.org/2020/12/18/hunger-and-our-communities-organization-highlight/">
          Source: Feeding The City
        </Card.Link>
      </small>
    </Card.Footer>
  </Card>
</CardDeck>

  <CardDeck>
  <Card>
    <Card.Header>
    <Card.Text>
    Meal Exchange - Catalyzing Community Food Solutions Panel

  </Card.Text>
    </Card.Header>
    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5fa8521696a5fd2ab92d32e6/1621990526580-C8CQ5JZR9BRFLM5R0RMO/Food+Security+Conference-04.png?format=500w" />
    <Card.Body>
      <Card.Text>
      Conference Series: Promoting Food Security in Higher Education
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
        <Card.Link target="_blank" href="https://www.youtube.com/watch?v=MIBoOc2uw4o&list=PLhFlhZYYgAm00X8BnYqLOWsQE8F_yMYM6&index=6&ab_channel=MealExchange">
          Source: Meal Exchange
        </Card.Link>
      </small>
    </Card.Footer>
  </Card>

 
  <Card>
    <Card.Header>
    <Card.Text>
    Op-ed: How we’re tackling student food insecurity through COVID-19
</Card.Text>
    </Card.Header>
    <Card.Img variant="top" src="https://thevarsity.ca/wp-content/uploads/2020/12/COMMENT_Blind-eye-to-Student-hunger-72_Fiona-Tung.jpg" />
    <Card.Body>
      <Card.Text>
      U of T Emergency Food Bank members (Adam and Amaial) on the systemic nature of poverty
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
    SofC Fellow leads an initiative to create UofT Emergency Food Bank</Card.Text>
    </Card.Header>
    <Card.Img variant="top" src="https://www.schoolofcities.utoronto.ca/sites/www.schoolofcities.utoronto.ca/files/Snip20200617_50.png" />
    <Card.Body>
      <Card.Text>
      With the closing down of the only Food Bank at UofT, 2020 Student Fellow Adam El-Masri, 
      with support from a group of similarly driven U of T students, put into motion the creation of a UofT Emergency Food Bank for economically vulnerable students. 
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
