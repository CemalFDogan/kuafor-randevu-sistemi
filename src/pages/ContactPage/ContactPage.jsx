import { Container, Card, Row, Col } from 'react-bootstrap';
import contactInfo from '../../data/contact';

export default function ContactPage() {
    return (
        <Container className="contact-page">
            <Row>
                <Col md={6}>
                    <Card className="contact-card">
                        <Card.Body>
                            <Card.Title>İletişim Bilgileri</Card.Title>
                            <Card.Text>
                                <strong>Adres:</strong> {contactInfo.address}<br />
                                <strong>Telefon:</strong> {contactInfo.phone}<br />
                                <strong>E-posta:</strong> {contactInfo.email}<br />
                                <strong>Çalışma Saatleri:</strong> {contactInfo.workingHours}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <div className="map-container">
                        <iframe
                            title="Salon Konumu"  // Benzersiz bir başlık ekleniyor
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.123435245014!2d29.05114131566685!3d41.04422597929839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55a4f2c93ebeb%3A0x454d16a7a1c8150!2sYour%20Salon%20Address!5e0!3m2!1sen!2str!4v1644258345678"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
