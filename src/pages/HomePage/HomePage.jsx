import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import homeData from '../../data/homeData';  // Doğru yolu belirtin

export default function HomePage() {
  const { heroImages, services, testimonials } = homeData.homePage;

  return (
    <Container className="homePage">
      <Row className="heroSection">
        <Carousel>
          {heroImages.map((img, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={`/${img.src}`} alt={img.alt} />
              <Carousel.Caption>
                <h3>{img.captionHeader}</h3>
                <p>{img.captionText}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>

      <Row className="servicesSection">
        {services.map((service, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Img variant="top" src={`/${service.src}`} alt={service.alt} />
              <Card.Body>
                <Card.Title>{service.captionHeader}</Card.Title>
                <Card.Text>{service.captionText}</Card.Text>
                <Button variant="primary">{service.buttonText}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="testimonialsSection">
        <Carousel>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={`/${testimonial.src}`} alt={testimonial.alt} />
              <Carousel.Caption>
                <p>"{testimonial.captionText}"</p>
                <em>- {testimonial.author}</em>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}
