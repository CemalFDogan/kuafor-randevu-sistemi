import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import resim1 from "../../toplu_cekim.png";

export default function UserPage() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={12}>
          <div className="welcome-section" style={{
            backgroundImage: `url(${resim1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh', // Ekranın tam yüksekliğini kaplar
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
           
          </div>
        </Col>
      </Row>
    </Container>
  );
}
