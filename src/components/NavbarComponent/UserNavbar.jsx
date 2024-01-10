import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../logo4.png";

export default function UserNavbar({ onLogout }) {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/" className="mr-auto">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Hamburger Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/user/profile">Profilim</Nav.Link>
            <Nav.Link as={Link} to="/user/appointments">Randevularım</Nav.Link>
            <Nav.Link as={Link} to="/user/settings">Ayarlar</Nav.Link>
            <Button as={Link} to="/" className="nav-button" onClick={onLogout}>Çıkış Yap</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
        <Container className="justify-content-between">
            {/* Burada kullanıcı için özel navbar içeriğini oluşturun */}
            {/* Örnek olarak sadece birkaç link ekleyeceğim */}
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/user" className="nav-link">Anasayfa</Nav.Link>
                <Nav.Link as={Link} to="/user-profile" className="nav-link">Profilim</Nav.Link>
                <Nav.Link as={Link} to="/user-appointments" className="nav-link">Randevularım</Nav.Link>
                <Button as={Link} to="/logout" className="nav-button">Çıkış Yap</Button>
            </Nav>
        </Container>
    </Navbar>
  );
}
