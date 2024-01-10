import { Container, Row, Col } from 'react-bootstrap'; // Row ve Col import ediliyor
import teamData from '../../data/teamData';

export default function TeamPage() {
  return (
    <div className="team-page">
      <Container>
        <h2 className="text-center mb-5">Ekibimiz</h2>
        <Row>
          {teamData.members.map((member, index) => (
            // Her kart için bir 'Col' komponenti kullanılıyor
            <Col key={index} md={4} className="mb-4">
              <div className="team-member">
                <img src={member.image} alt={member.name} className="img-fluid" />
                <h3>{member.name}</h3>
                <p>{member.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
