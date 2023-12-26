import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <Container style={{ marginTop: '2rem' }}>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Hakkımızda</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Biz Kimiz?</Card.Subtitle>
              <Card.Text>
                MyApp, modern ve kullanıcı dostu web çözümleri sunan öncü bir teknoloji şirketidir.
                Misyonumuz, en yenilikçi ve etkili yazılım çözümlerini sunarak kullanıcılarımızın 
                hayatını kolaylaştırmaktır.
              </Card.Text>
              <Card.Text>
                Etkileyici bir kullanıcı deneyimi, yüksek performans ve erişilebilirlik, bizim için en
                önemli önceliklerdir. Uzman ekibimiz, her bir proje için özel olarak tasarlanmış 
                çözümler üretmektedir.
              </Card.Text>
              <Card.Title>Vizyonumuz</Card.Title>
              <Card.Text>
                Teknolojinin sürekli değişen dünyasında, yenilikçi ve sürdürülebilir çözümler 
                sunarak sektörde lider olmayı hedefliyoruz. Kullanıcılarımızın ve müşterilerimizin 
                memnuniyeti, bu yoldaki en büyük motivasyon kaynağımızdır.
              </Card.Text>
              <Card.Title>Neden Biz?</Card.Title>
              <Card.Text>
                Uzman ekibimiz, yılların getirdiği tecrübe ve bilgi birikimi ile her türlü zorluğun 
                üstesinden gelmeye hazırdır. İnovatif yaklaşımlar ve son teknoloji çözümler ile 
                sizlere hizmet vermekteyiz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
