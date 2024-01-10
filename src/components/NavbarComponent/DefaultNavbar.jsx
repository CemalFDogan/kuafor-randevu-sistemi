import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from "../../logo4.png";

export default function DefaultNavbar() {
    return (
        <Navbar expand="lg" className="custom-navbar">

            {/* Logo */}
            <Navbar.Brand as={Link} to="/" className="mr-auto">
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="Logo"
                />
            </Navbar.Brand>

            {/* Hamburger Toggle Button */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            {/* Navbar İçeriği */}
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link as={Link} to="/" className="nav-link">Ana Sayfa</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="nav-link">Hakkımızda</Nav.Link>
                    <Nav.Link as={Link} to="/team" className="nav-link">Ekiple Tanış</Nav.Link>
                    <Nav.Link as={Link} to="/services" className="nav-link">Hizmetler</Nav.Link>
                    <Nav.Link as={Link} to="/salon" className="nav-link">Salon</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="nav-link">İletişim Sayfası</Nav.Link>
                    <Button as={Link} to="/login-register" className="nav-button">Kayıt/Oturum Aç</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
