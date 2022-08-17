import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import landingPageImg from '../../../Resources/images/image.png'
import bgone from '../../../Resources/images/Group 1.png'
import bgtwo from '../../../Resources/images/Group 2.png'
import "./Header.css";
function Header() {
  return (
<div className="header_container">
<img src={bgone} alt="" className="bg_image_one" />

<Container>
      <Row>
        <Col md={6}>
          <img src={landingPageImg} alt="" className="landingPage_img" />
        </Col>
        <Col md={6}>qwqwww</Col>
      </Row>
    </Container>
    <img src={bgtwo} alt="" className="bg_image_two" />

</div>
  );
}

export default Header;
