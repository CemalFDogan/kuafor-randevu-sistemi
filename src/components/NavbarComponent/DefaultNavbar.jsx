import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function DefaultNavbar() {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container className="justify-content-between">
                {/* Sol taraftaki bağlantılar */}
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" className="nav-link">Ana Sayfa</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="nav-link">Hakkımızda</Nav.Link>
                </Nav>

                {/* Ortadaki logo */}
                <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>

                {/* Sağ taraftaki bağlantılar ve butonlar */}
                <Nav>
                    <Nav.Link as={Link} to="/contact" className="nav-link">İletişim Sayfası</Nav.Link>
                    <Button as={Link} to="/login-register" className="nav-button">Kayıt/Oturum Aç</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}
