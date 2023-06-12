import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import Angular from '../assets/angular.svg';
import JSlogo from '../assets/JSlogo.svg';
import iconreact from "../assets/iconreact.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
                <h2>
                  Skills
                </h2>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                      <img src={JSlogo} alt="JavaScript logo"/>
                      <h5>JavaScript</h5>
                    </div>
                    <div className="item">
                      <img src={Angular} alt="Angular logo"/>
                      <h5>Angular</h5>
                    </div>
                    <div className="item">
                      <img src={iconreact} alt="React logo"/>
                      <h5>React JS</h5>
                    </div>
                </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
