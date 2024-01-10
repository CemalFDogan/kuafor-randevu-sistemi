import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function HairdresserNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
        <Container className="justify-content-between">
            {/* Burada kullanıcı için özel navbar içeriğini oluşturun */}
            {/* Örnek olarak sadece birkaç link ekleyeceğim */}
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/hairdresser" className="nav-link">Anasayfa</Nav.Link>
                <Nav.Link as={Link} to="/hairdresser-profile" className="nav-link">Profilim</Nav.Link>
                <Nav.Link as={Link} to="/hairdresser-appointments" className="nav-link">Randevular</Nav.Link>
                <Button as={Link} to="/logout" className="nav-button">Çıkış Yap</Button>
            </Nav>
        </Container>
    </Navbar>
  );
}
