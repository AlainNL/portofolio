import { Container, Row, Col, TabContainer } from "react-bootstrap";
import { Nav, Tab } from "react-bootstrap";
import { Card } from "./Card";
import Lifeaz from "../assets/Lifeaz.png";
import Allomovies from "../assets/Allomovies.png";
import Shiny from "../assets/Shiny.png";
import lmj from '../assets/lmj.png';
import linkxo from "../assets/linkxo.png";

import colorSharp2 from "../assets/color-sharp2.png";


export const Projects = () => {
  const projects = [
    {
      title: "Link XO",
      description: "Social network",
      imgUrl: linkxo,
    },
    {
      title: "Lifeaz",
      description: "Lifeaz webiste - The 1st life-saving defibrillator made for the home.",
      imgUrl: Lifeaz,
    },
    {
      title: "AlloMovies",
      description: "The Movie Database",
      imgUrl: Allomovies,
    },
  ];

  const projectsTab2 = [
    {
      title: "La maison jungle",
      description: "Buy your plants on La Maison Jungle website",
      imgUrl: lmj,
    },
    {
      title: "Shine Agency",
      description: "Freelance website",
      imgUrl: Shiny,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
              </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <Card
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  {
                    projectsTab2.map((project, index) => {
                      return (
                        <Card
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                  </Row>
              </Tab.Pane>
            </Tab.Content>
          </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="color sha"></img>
    </section>
  )
}
