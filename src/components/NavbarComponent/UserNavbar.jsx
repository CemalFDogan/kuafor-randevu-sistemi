import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UserNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
        <Container className="justify-content-between">
            {/* Burada kullanıcı için özel navbar içeriğini oluşturun */}
            {/* Örnek olarak sadece birkaç link ekleyeceğim */}
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/user/profile" className="nav-link">Profilim</Nav.Link>
                <Nav.Link as={Link} to="/user/appointments" className="nav-link">Randevularım</Nav.Link>
                <Nav.Link as={Link} to="/user/settings" className="nav-link">Ayarlar</Nav.Link>
                <Button as={Link} to="/logout" className="nav-button">Çıkış Yap</Button>
            </Nav>
        </Container>
    </Navbar>
  );
}
