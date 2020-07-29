import React from 'react';

import Layout from '../components/Layout';
import SideBar from '../components/SideBar';

import { Card } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



const IndexPage = () => (
  <Layout>
    <SideBar />
    <div id="wrapper">
      <div id="main">
        <section>
          <div className="container">
            <section>
              <h2>Similar Initiatives</h2>
              <p>There are other groups in Toronto providing similar initiatives and resources. We've compiled them here for your convenience.
                Click on the name to read more about the initiative and click on the image to go directly to their site.
              </p>
              <div className="features">
            <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.instagram.com/p/CCB9i7bh5o6/" className="image">
                  <img src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.0-9/73541626_1477272935757924_6155967086234435584_n.png?_nc_cat=109&_nc_sid=85a577&_nc_ohc=gW2aOzjVnrkAX9JD7YQ&_nc_ht=scontent.fyyz1-2.fna&oh=232035033ec052c0af2bcb6352d5f493&oe=5F324D06" alt="UTERN Logo" />
                </a>
                <div className="inner">
                  <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      University of Toronto Environmental Resource Network
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>                  COVID-19 presents a barrier to everyone's access to healthy food. In response, UTERN is partnering with FoodShare Toronto to give back to UofT students who are facing food insecurity by facilitating the distribution of fresh, locally grown produce. 
            </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                </Accordion>
                 
                </div>
              </article>

              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://docs.google.com/forms/d/e/1FAIpQLScmtnMtpsWjTp5kicU3_X2mrM5t57A-4k7U7jYDaiWdFmSAfQ/viewform?fbclid=IwAR0NGWUuJj8hkW1CPvj3-xp8vwKtx0YEgG9JNR6GLVhinj6Fd0mzmNqiDMA" className="image">
                  <img src="https://scontent.fyyz1-2.fna.fbcdn.net/v/t1.0-9/97977035_10220091796039023_8588258167480123392_n.jpg?_nc_cat=108&_nc_sid=ca434c&_nc_ohc=KbOvx8Ehi7UAX9lPOmJ&_nc_ht=scontent.fyyz1-2.fna&oh=5a6dece1c5cea2061c1b2a2df1999160&oe=5F345009" alt="The People's Pantry Logo" />
                </a>
                <div className="inner">

                <Accordion >
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      The People's Pantry
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>                  
                      <p>
                      The COVID-19 crisis has left many in our community struggling to access food as we are faced with mass unemployment and loss of income, excessive hoarding at grocery stores, reduced transportation options, and more. Particularly hard-hit communities include, but are not limited to, low-income and working-class families, QTBIPOC (Queer, Trans*, Black, Indigenous, and People of Colour), single parents, sex workers, those living in precarious housing situations, those living with underlying medical conditions, those with disabilities, newly-arrived immigrants, and the elderly.
                        </p>

                        <p>
                In response to the pandemic, The People's Pantry is a grassroots initiative providing home-cooked meals and grocery bundles to individuals and families across the GTA who have been disproportionately affected by the COVID-19 crisis. We serve those who are struggling financially or are otherwise unable to provide sufficient food for themselves and their family. Meals and groceries will be delivered right to their door, 100% free of charge. 
                </p>
                     </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                </Accordion>
                 
                 
                </div>
              </article>

              <article>
                <a target="_blank" rel="noreferrer nofollow" href="https://www.facebook.com/FoodForThoughtToronto/" className="image">
                  <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t1.0-9/98006483_117927683247536_6382289932630622208_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=baxnvdeXk9YAX-xOTYl&_nc_ht=scontent.fyyz1-1.fna&oh=e8351aa2e3e1648e392f7179ae87f427&oe=5F330A75" alt="Food for Thought Logo" />
                </a>
                <div className="inner">

                <Accordion >
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Food for Thought
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>                  
                      <p>
                      An education worker-run initiative providing emergency relief in solidarity with racialized and working-class students and school communities.
                        </p>
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
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Uplift Kitchen
                      </Accordion.Toggle>
                    </Card.Header>
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
                  <img src="https://instagram.fybz2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/109024262_276370246986164_981173937791864574_n.jpg?_nc_ht=instagram.fybz2-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=KUseIhVEUxYAX-zzYgT&oh=5bfb2d0e1a5efcec62d079591e25cf16&oe=5F496B76" alt="Community Fridge Toronto" />
                </a>
                <div className="inner">

                <Accordion >
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Community Fridge Toronto
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>                  
                      <p>
                      
                      refrigerators run by the community for the community.
aiming to tackle food disparity and redistribute wealth n privilege.
cleaned and restocked daily                         </p>
                     </Card.Body>
                    </Accordion.Collapse>
                  </Card>

                </Accordion>
                 
                 
                </div>
              </article>
              
            
            </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
