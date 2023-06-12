import { useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastNAme: '',
    email: '',
    message: '',

  }
  const [formDetais, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] =useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetais,
      [category]: value
    })
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Contact me</h2>
            <form>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetais.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetais.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetais.email} placeholder="email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" value={formDetais.phone} placeholder="phone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <textarea rows="6" value={formDetais.message} placeholder="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  <button type="submit"><span>{buttonText}</span></button>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
