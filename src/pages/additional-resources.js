import React from 'react';

import Layout from '../components/Layout';
import SideBar from '../components/SideBar';

import { Card } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import pp from '../assets/images/peoplespantry.png';
import utsu from '../assets/images/utsu.jpg';
import cf from '../assets/images/cf.jpg';
import uoft from '../assets/images/uoft.png';
import utgsu from '../assets/images/utgsu.jpg';
import apus from '../assets/images/apus.png'
import cupe from '../assets/images/cupe.png'








const IndexPage = () => (
  <Layout>
    <SideBar />
    <div id="wrapper">
      <div id="main">
        <section>
          <div className="container">
            <h2>Additional Resources</h2>

            <section>
              <p> We've compiled a list of resources and services in the GTA as well as a list of financial services available at UofT. </p>
              <strong>Instructions</strong>
              <ol>
                <li> Click on the category to see the list of available services.</li>
                <li> Once the list appears you can click on the name for more information or on the image to go the resource.</li>
              </ol>
              <div className="features">
                <Accordion >

                  <Card>
                  <Card.Header>

                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Financial resources available at the University of Toronto                     </Accordion.Toggle>
                        </Card.Header>

                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <article>
                          <a target="_blank" rel="noreferrer nofollow" href="https://utsu.formstack.com/forms/bursaries_and_grants" className="image">
                            <img src={utsu} alt="UTSU Logo" />
                          </a>
                          <div className="inner">

                            <Accordion >
                              <Card>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    UTSU Financial Aid Bursaries
                      </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <p>
                                      The UTSU offers 7 types of bursaries to help alleviate financial burdens for undergraduate students. <strong>
                                        The emergency bursary can be used for groceries.
                      </strong>
                                    </p>

                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>

                            </Accordion>


                          </div>
                        </article>



                        <article>
                          <a target="_blank" rel="noreferrer nofollow" href="https://future.utoronto.ca/finances/financial-aid/emergency-assistance-grants/" className="image">
                            <img src={uoft} alt="UofT Logo" />
                          </a>
                          <div className="inner">

                            <Accordion >
                              <Card>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    UofT Emergency Assistance Grants
                      </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <p>
                                      The University of Toronto provides 3 grants for undergraduate and graduate students facing financial hardship.
                                      These can often be used to account for cost-of-living andd educational expenses not completed covered by your current income
                                      and loan-based financial aid programs.
                      </p>

                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>

                            </Accordion>


                          </div>
                        </article>

                        <article>
                          <a target="_blank" rel="noreferrer nofollow" href="https://utgsu.ca/funding-2/" className="image">
                            <img src={utgsu} alt="UTGSU Logo" />
                          </a>
                          <div className="inner">

                            <Accordion >
                              <Card>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    UTGSU Financial Assistance
                      </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <p>
                                      The UTGSU provides several sources of funding for UTGSU members and for groups and events that serve their members.
                      </p>

                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>

                            </Accordion>


                          </div>
                        </article>


                        <article>
                          <a target="_blank" rel="noreferrer nofollow" href="https://apus.ca/services/scholarships-bursaries/" className="image">
                            <img src={apus} alt="APUS Logo" />
                          </a>
                          <div className="inner">

                            <Accordion >
                              <Card>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    APUS Scholarships &amp; Bursaries
                      </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <p>
                                      Recognizing that part-time students face barriers to accessing funding from governmental and institutional programs,
                                      APUS bursaries are available to part-time undergraduate students on all three campuses of the University of Toronto.
                                      These bursaries are provided on the basis of financial need as determined by the Office of Enrolment Services.
                      </p>

                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>

                            </Accordion>


                          </div>
                        </article>

                        <article>
                          <a target="_blank" rel="noreferrer nofollow" href="https://www.cupe3902.org/" className="image">
                            <img src={cupe} alt="CUPE 3902 Logo" />
                          </a>
                          <div className="inner">

                            <Accordion >
                              <Card>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    CUPE 3902 Financial Supports
                      </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <p>
                                      CUPE 3902 provides a comprehensive set of financial supports for it's members. Please visit their website
                                      and select your unit to determine what is available.
                      </p>

                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>

                            </Accordion>


                          </div>
                        </article>


                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion >

                <Accordion>

<Card>
  <Card.Header>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
      City-listed resources in Toronto, Peel, Durham and York regions                   </Accordion.Toggle>
  </Card.Header>
  <Accordion.Collapse eventKey="0">
    <Card.Body>


    <article>
        <a target="_blank" rel="noreferrer nofollow" href="https://211central.ca/" className="image">
          <img src="https://211central.ca/wp-content/uploads/2019/04/cropped-211central_logo.png" alt="211 Central Logo" />
        </a>
        <div className="inner">

          <Accordion >
            <Card>

                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  211 Central
    </Accordion.Toggle>

              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>
                  A list of searchable services, including food, for Toronto, Durham, Peel and York Region
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            

          </Accordion>


        </div>
      </article>

      <article>
        <a target="_blank" rel="noreferrer nofollow" href="https://www.torontocentralhealthline.ca/listservices.aspx?id=10572&region=TorontoCentral" className="image">
          <img src="https://www.torontocentralhealthline.ca/Images/HLlogo-TCO.png" alt="Toronto Central Healthline Logo" />
        </a>
        <div className="inner">

          <Accordion >
            <Card>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Toronto Central Healthline
    </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <p>
                  A list of food banks and food services within the City of Toronto. Make sure to select the region of Toronto you're in before
                  providing your postal code. 
                  </p>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            

          </Accordion>


        </div>
      </article>


    </Card.Body>

  </Accordion.Collapse>

</Card>







</Accordion>

                <Accordion>

                  <Card>
                  <Card.Header>

                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Community-led grassroots services                      </Accordion.Toggle>
                        </Card.Header>

                        
                    <Accordion.Collapse eventKey="0">

                      
                      <Card.Body>

                        <article>
                          <a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/e/1FAIpQLScmtnMtpsWjTp5kicU3_X2mrM5t57A-4k7U7jYDaiWdFmSAfQ/viewform?fbclid=IwAR0NGWUuJj8hkW1CPvj3-xp8vwKtx0YEgG9JNR6GLVhinj6Fd0mzmNqiDMA" className="image">
                            <img src={pp} alt="The People's Pantry Logo" />
                          </a>
                          <div className="inner">

                            <Accordion >
                              <Card>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    The People's Pantry
                      </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <p>
                                      The COVID-19 crisis has left many in our community struggling to access food as we are faced with mass unemployment and loss of income, excessive hoarding at grocery stores, reduced transportation options, and more. Particularly hard-hit communities include, but are not limited to, low-income and working-class families, QTBIPOC (Queer, Trans*, Black, Indigenous, and People of Colour), single parents, sex workers, those living in precarious housing situations, those living with underlying medical conditions, those with disabilities, newly-arrived immigrants, and the elderly.
                        </p>

                                    <p>
                                      In response to the pandemic, The People's Pantry is a grassroots initiative providing home-cooked meals and grocery bundles to individuals and families across the GTA who have been disproportionately affected by the COVID-19 crisis. We serve those who are struggling financially or are otherwise unable to provide sufficient food for themselves and their family. Meals and groceries will be delivered right to their door, 100% free of charge, no questions asked, no fixed address required.</p>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>

                            </Accordion>


                          </div>
                        </article>

                        <article>
                          <a target="_blank" rel="noreferrer nofollow" href="https://www.upliftkitchen.ca/" className="image">
                            <img src="https://static.ucraft.app/fs/ucraft/userFiles/upliftkitchen/images/logo.png?v=1591563056" alt="Uplift Kitchen Logo" />
                          </a>
                          <div className="inner">

                            <Accordion >
                              <Card>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Uplift Kitchen
                      </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <p>
                                      Uplift Kitchen is two friends who see a need in our community and have the means to help.
                      Our goal is to give Black identifying folks the food and resources they need to survive during this time of global crisis, and in the future.                         </p>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>

                            </Accordion>


                          </div>
                        </article>

                        <article>
                          <a target="_blank" rel="noreferrer nofollow" href="https://www.instagram.com/cf___to/" className="image">
                            <img src={cf} alt="Community Fridge Toronto" />
                          </a>
                          <div className="inner">

                            <Accordion >
                              <Card>
                                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Community Fridge Toronto
                      </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                  <Card.Body>
                                    <p>

                                      refrigerators run by the community for the community. aiming to tackle food disparity and redistribute wealth n privilege.cleaned and restocked daily                         </p>
                                  </Card.Body>
                                </Accordion.Collapse>
                              </Card>

                            </Accordion>


                          </div>
                        </article>

                      </Card.Body>

                    </Accordion.Collapse>

                  </Card>





                </Accordion>

               

                <Accordion>

                  <Card>
                  <Card.Header>

                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Automated chatbot (Chalmers Bot) for seeking resources within Ontario                 </Accordion.Toggle>
                        </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <p>This chatbot requires your location and a bit of interaction but it can help you find
                          local and available resources at any time.
                        </p>

                        <iframe src="https://chalmers.amplelabs.co/" width="100%" height="700px">
                          
                        </iframe>
                      </Card.Body>

                    </Accordion.Collapse>

                  </Card>

                  





                </Accordion>



              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
