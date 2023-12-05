import React from "react";
import Header from "./Header";
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home({ onContactClick, onProjectClick  }) {
    
  return (
    <>
        <Container>
            <Row className="align-items-center">
                <Col sm={7}>
                <Header onContactClick={onContactClick} onProjectClick={onProjectClick} />
                </Col>
                <Col sm={5}>
                <Image 
                    src="https://i.postimg.cc/X7cbnzZW/me.jpg"
                    fluid
                    roundedCircle
                    style={{ width: '450px', height: 'auto' }}
                />
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Home;