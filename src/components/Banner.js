import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/header-img.svg";
import TextScramble from "./TextScramble";

const phrases = [
  "- Web Developer"
];

export const Banner = () => {

  const textRef = useRef(null);
  const fx = useRef(null);

  useEffect(() => {
    fx.current = new TextScramble(textRef.current);
    let counter = 0;

    const next = () => {
      fx.current.setText(phrases[counter]).then(() => {
        setTimeout(next, 3000);
      });
      counter = (counter + 1) % phrases.length;
    };

    next();
  }, []);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
              <h1>{`Hi ! I'm Alan`} <span className="wrap" ref={textRef}></span></h1>
            <p>After more than 5 years' experience in operations and communications, both in a start-up and in a major group, I decided to move into the Web Developer profession.
Passionate about tech, I design web projects independently. I love experimenting, discovering and learning new technologies.</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
