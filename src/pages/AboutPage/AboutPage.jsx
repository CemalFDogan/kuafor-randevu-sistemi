<<<<<<< HEAD
import hakkimizdaİlkResim from "../../assets/images/hakkimizda_image/1.jpeg"
import hakkimizdaİkinciResim from "../../assets/images/hakkimizda_image/2.jpg"
import hakkimizdaUcuncuResim from "../../assets/images/hakkimizda_image/3.jpg"


export default function AboutPage() {
  
  return (
    <div className="hakkimizda-container">
    {/* İlk İçerik */}
    <div className="hakkimizda-content">
      <div className="image-container">
        <img src={hakkimizdaİlkResim} alt="İşletme Resmi 1" className="img-fluid" />
      </div>
      <div className="text-container">
        <h2>Hakkımızda 1</h2>
        <p>İşletmeniz hakkında bilgi buraya gelecek.</p>
      </div>
    </div>

    {/* İkinci İçerik */}
    <div className="hakkimizda-content">
    <div className="text-container">
        <h2>Hakkımızda 2</h2>
        <p>İşletmeniz hakkında bilgi buraya gelecek.</p>
      </div>
      <div className="image-container">
        <img src={hakkimizdaİkinciResim} alt="İşletme Resmi 2" className="img-fluid" />
      </div>
      
    </div>

    {/* Üçüncü İçerik */}
    <div className="hakkimizda-content">
      <div className="image-container">
        <img src={hakkimizdaUcuncuResim} alt="İşletme Resmi 3" className="img-fluid" />
      </div>
      <div className="text-container">
        <h2>Hakkımızda 3</h2>
        <p>İşletmeniz hakkında bilgi buraya gelecek.</p>
      </div>
    </div>
  </div>
=======
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
>>>>>>> cemal
  );
}
