import React from "react";
import Header from "./Header";
import { Container, Row, Col, Image } from 'react-bootstrap';

function Home() {
  return (
    <>
        <Container>
            <Row className="align-items-center"> {/* This line aligns items vertically */}
                <Col sm={7}>
                <Header />
                </Col>
                <Col sm={5}>
                <Image 
                    src="https://i.postimg.cc/cLVX62ZP/NEW.jpg"
                    fluid
                    roundedCircle
                    style={{ width: '400px', height: 'auto' }}
                />
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default Home;