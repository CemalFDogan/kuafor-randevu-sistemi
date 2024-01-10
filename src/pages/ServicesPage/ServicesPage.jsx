import { Container, Row, Col } from 'react-bootstrap';
import servicesData from '../../data/servicesData';

export default function ServicesPage() {
    return (
        <div className="services-page">
            <Container>
                <h2 className="text-center mb-4">Hizmetlerimiz</h2>
                <Row>
                    {servicesData.map((service, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <div className="service-card">
                                <img src={service.imageUrl} alt={service.title} className="service-image" />
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}
