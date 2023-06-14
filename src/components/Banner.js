import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/header-img.svg";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = [ " - Full stack Developer"]
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta]= useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 2);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setIndex(prevIndex => prevIndex - 1);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum +1);
        setIndex(1);
        setDelta(500);
      } else {
        setIndex(prevIndex => prevIndex + 1);
      }
    }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portofolio</span>
              <h1>{`Hi ! I'm Alan`} <span className="wrap">{text}</span></h1>
            <p>After more than 5 years' experience in operations and communications, both in a start-up and in a large group, I decided to move into the Web Developer profession.
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
