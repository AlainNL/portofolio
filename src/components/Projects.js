import { Container, Row, Col, TabContainer } from "react-bootstrap"
import { NavBar } from './components/NavBar';

export const Projects = () => {
  const projects = [
    {
      title: "Lifeaz",
      description: "Development Home",
      imgUrl: "",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">

            </Nav>
            </TabContainer>
          </Col>
        </Row>
      </Container>

    </section>
  )
}
