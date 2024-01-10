import { Row, Col } from 'react-bootstrap';


export default function FooterComponent() {
    return (
        <footer className="footer footer-custom bg-dark text-light py-3">
            <div className="container">
                <Row>
                    <Col md={4}>
                        <h2>İletişim</h2>
                        <p>Adres: 1234 Sokak, Salon Mahallesi, Şehir, Ülke</p>
                        <p>Telefon: (123) 456 78 90</p>
                        <p>E-posta: contact@prestijkuaför.com</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <h2>Hakkımızda</h2>
                        <p>Profesyonel ekibimiz ve kaliteli hizmet anlayışımız ile sizlere en iyi deneyimi sunmayı amaçlıyoruz.</p>
                    </Col>
                    <Col md={4} className="text-end">
                        <h2>Sosyal Medya</h2>
                        <p>Bizi sosyal medyada takip edin!</p>
                        <p>Instagram, Facebook, Twitter</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="text-center mt-3">
                        <p>© 2023 Prestij Kuaför. Tüm hakları saklıdır.</p>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}