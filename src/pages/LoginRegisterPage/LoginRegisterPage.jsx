import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginRegisterPage({ onLoginSuccess }) {
    const navigate = useNavigate();  // useNavigate hook'unu kullanma

    // Kullanıcı giriş bilgileri için state tanımlamaları
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [data, setData] = useState([]);

    // Kayıt için state tanımlamaları
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


  /*   useEffect(() => {
        // Update the document title using the browser API
        axios.get("apiLinki").then(data => setData(data));
    });
 */
    // Test amaçlı sabit kullanıcı bilgileri
    const testUser = {
        email: "admin@kullanici.com",
        password: "123"
    };

    // Giriş yapma işlevi
    const handleLogin = (e) => {
        e.preventDefault();
    
        if (email === testUser.email && password === testUser.password) {
            // Kullanıcının rolünü belirle
            let role;
            if (email === 'admin@example.com') {
                role = 'admin';
            } else if (email === 'hairdresser@example.com') {
                role = 'hairdresser';
            } else {
                role = 'user';
            }
    
            // Giriş başarılı olduğunda onLoginSuccess fonksiyonunu çağır
            onLoginSuccess(role);
            navigate('/');  // Kullanıcıyı anasayfaya veya başka bir sayfaya yönlendir
        } else {
            // Giriş başarısız
            alert("E-posta veya şifre hatalı!");
        }
    };

    // Kayıt olma işlevi
    const handleRegister = (e) => {
        e.preventDefault();

        // Basit bir kayıt işlemi. Gerçekte veritabanına kaydetme işlemi yapılmalı.
        if (registerEmail && registerPassword && fullName && phoneNumber) {
            // Kayıt başarılı, kullanıcıyı giriş sayfasına yönlendir veya başka bir işlem yap
            alert("Kayıt başarılı! Giriş yapabilirsiniz.");
            setRegisterEmail('');
            setRegisterPassword('');
            setFullName('');
            setPhoneNumber('');
        } else {
            alert("Lütfen tüm alanları doldurun!");
        }
    };

    return (
        <Container className="login-register-page">
            <Row>
                {/* Üye Girişi Bölümü */}
                <Col md={6} className="login-section">
                    <h2>Üye Girişi</h2>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="E-posta adresinizi girin"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Şifrenizi girin"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Beni hatırla" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Giriş Yap
                        </Button>
                    </Form>
                    <div className="forgot-password-link">
                        <a href="#">Şifremi Unuttum</a>
                    </div>
                </Col>

                {/* Kayıt Ol Bölümü */}
                <Col md={6} className="register-section">
                    <h2>Kayıt Ol</h2>
                    <Form onSubmit={handleRegister}>
                        <Form.Group controlId="formBasicFullName">
                            <Form.Label>Ad Soyad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Tam adınızı girin"
                                value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="E-posta adresinizi girin"
                                value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Şifre</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Bir şifre belirleyin"
                                value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label>Telefon Numarası</Form.Label>
                            <Form.Control
                                type="tel" placeholder="Telefon numaranızı girin"
                                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Kayıt Ol
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
