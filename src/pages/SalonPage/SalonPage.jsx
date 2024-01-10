import { Container, Row, Col, Tab, Nav, Card } from 'react-bootstrap';
import salonData from '../../data/salonData';

export default function SalonPage() {
    return (
        <Container className="salon-page">
            <Tab.Container defaultActiveKey="sections">
                <Nav variant="pills" className="salon-nav">
                    <Nav.Item>
                        <Nav.Link eventKey="sections">Bölümler</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="collection">Koleksiyon</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="sections">
                        <Row>
                            {salonData.sections.map((section, index) => (
                                <Col md={4} key={index}>
                                    <Card className="section-card">
                                        <Card.Img variant="top" src={section.imageUrl} />
                                        <Card.Body>
                                            <Card.Title>{section.name}</Card.Title>
                                            <Card.Text>{section.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="collection">
                        <Row>
                            {salonData.collection.map((item, index) => (
                                <Col md={4} key={index}>
                                    <Card className="collection-card">
                                        <Card.Img variant="top" src={item.imageUrl} />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </Container>
    );
}
