<<<<<<< HEAD

import salonA from "../../assets/images/salon_image/1.jpeg"
import salonB from "../../assets/images/salon_image/2.jpeg"
import salonC from "../../assets/images/salon_image/3.jpeg"
import salonD from "../../assets/images/salon_image/4.jpeg"
import salonE from "../../assets/images/salon_image/5.jpeg"
import salonF from "../../assets/images/salon_image/6.jpeg"


export default function SalonPage() {
    return (
        <div className="container my-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <img src={salonA} alt="Gallery 1" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonB} alt="Gallery 2" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonC} alt="Gallery 3" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonD} alt="Gallery 4" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonE} alt="Gallery 5" className="img-fluid gallery-image" />
          </div>
          <div className="col-md-4 mb-4">
            <img src={salonF} alt="Gallery 6" className="img-fluid gallery-image" />
          </div>
        </div>
      </div>
    );
}
=======
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
>>>>>>> cemal
