import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AdminNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="justify-content-between">

        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/admin" className="nav-link">Anasayfa</Nav.Link>
          <Nav.Link as={Link} to="/admin-hairdresser" className="nav-link">Kuaförler</Nav.Link>
          <Nav.Link as={Link} to="/admin-services" className="nav-link">Hizmetler</Nav.Link>
          <Button as={Link} to="/logout" className="nav-button">Çıkış Yap</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}



