// AdminNavbar.js
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="justify-content-between">

        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/admin/dashboard" className="nav-link">Yönetim Paneli</Nav.Link>
          <Nav.Link as={Link} to="/admin/users" className="nav-link">Kullanıcılar</Nav.Link>

          <Nav.Link as={Link} to="/admin/settings" className="nav-link">Ayarlar</Nav.Link>
          <Button as={Link} to="/logout" className="nav-button">Çıkış Yap</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
