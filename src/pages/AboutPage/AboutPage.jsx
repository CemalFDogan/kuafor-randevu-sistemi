import { Container, Row, Col, Image } from 'react-bootstrap';
import aboutData from '../../data/aboutData';

export default function AboutPage() {
  const { title, history, mission, vision, images } = aboutData;

  return (
    <div className="about-page">
      <Container>
        <h2>{title}</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Image src={images.salonImage} alt="Salon" fluid className="mb-3 centered-image" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Tarihçemiz</h3>
            <p>{history}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Misyonumuz</h3>
            <p>{mission}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Vizyonumuz</h3>
            <p>{vision}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
