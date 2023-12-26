import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent({ isLoggedIn, userRole }) {
    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container className="justify-content-between">
                {/* Sol taraftaki bağlantılar */}
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" className="nav-link">Ana Sayfa</Nav.Link>
                    <Nav.Link as={Link} to="/about" className="nav-link">Hakkımızda</Nav.Link>
                    <Nav.Link as={Link} to="/team" className="nav-link">Ekiple Tanış</Nav.Link>
                </Nav>

                {/* Orta Logo */}
                <Navbar.Brand as={Link} to="/" className="mx-auto navbar-brand">Logo</Navbar.Brand>

                {/* Sağ taraftaki bağlantılar ve butonlar */}
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/services" className="nav-link">Hizmetler</Nav.Link>
                    <Nav.Link as={Link} to="/salon" className="nav-link">Salon</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="nav-link">İletişim</Nav.Link>

                    {/* Giriş yapmamış kullanıcılar için */}
                    {!isLoggedIn && <Button as={Link} to="/login-register" className="nav-button">Kayıt/Oturum Aç</Button>}

                    {/* Giriş yapmış kullanıcılar için */}
                    {isLoggedIn && (
                        <>
                            {/* Rolüne göre özel bağlantılar */}
                            {userRole === 'admin' && <Nav.Link as={Link} to="/admin" className="nav-link">Admin Sayfası</Nav.Link>}
                            {userRole === 'user' && <Nav.Link as={Link} to="/user" className="nav-link">Kullanıcı Sayfası</Nav.Link>}

                            <Nav.Link as={Link} to="/appointments" className="nav-link">Randevular</Nav.Link>
                            <Nav.Link as={Link} to="/settings" className="nav-link">Ayarlar</Nav.Link>
                            {/* Çıkış yap butonu - Fonksiyonelitesi henüz eklenmedi */}
                            <Button className="nav-button">Çıkış Yap</Button>
                        </>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
}
