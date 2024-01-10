import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../logo4.png";

export default function AdminNavbar({ onLogout }) {
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
            <Nav.Link as={Link} to="/admin/dashboard">Yönetim Paneli</Nav.Link>
            <Nav.Link as={Link} to="/admin/users">Kullanıcılar</Nav.Link>
            <Nav.Link as={Link} to="/admin/settings">Ayarlar</Nav.Link>
            <Button as={Link} to="/" className="nav-button" onClick={onLogout}>Çıkış Yap</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
