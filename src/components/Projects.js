import { Container, Row, Col, TabContainer } from "react-bootstrap";
import { Nav, Tab } from "react-bootstrap";
import { Card } from "./Card";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img2.png";
import projImg3 from "../assets/project-img3.png";
import colorSharp2 from "../assets/color-sharp2.png";


export const Projects = () => {
  const projects = [
    {
      title: "Lifeaz",
      description: "Development Home",
      imgUrl: projImg1,
    },
    {
      title: "Lifeaz",
      description: "Development Home",
      imgUrl: projImg2,
    },
    {
      title: "Lifeaz",
      description: "Development Home",
      imgUrl: projImg3,
    },
  ];

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
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
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
              <Tab.Pane eventKey="second">Lorem Dipseum</Tab.Pane>
              <Tab.Pane eventKey="third">Lorem Dipseum</Tab.Pane>
            </Tab.Content>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="color sha"></img>
    </section>
  )
}
