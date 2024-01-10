import { Carousel, Card, Button, Container, Row, Col } from 'react-bootstrap';
import homeData from '../../data/homeData';  // Doğru yolu belirtin

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Slider Bölümü */}
      <Carousel className="custom-slider">
        {homeData.sliderImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image.src} alt={image.alt} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Hizmetler Bölümü */}
      <section className="services-section">
        <Container>
          <Row>
            {homeData.services.map((service, index) => (
              <Col md={4} key={index}>
                <div className="service-card">
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Müşteri Yorumları */}
      <section className="testimonials-section">
        <Container>
          <Row>
            {homeData.testimonials.map((testimonial, index) => (
              <Col md={6} key={index}>
                <div className="testimonial">
                  <p>"{testimonial.quote}"</p>
                  <div className="author">- {testimonial.author}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}