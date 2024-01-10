import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './_userProfilePage.scss';

export default function UserProfilePage() {
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        phone: '555-1234',
        password: 'examplepassword',
    });

    // Düzenleme modunu kontrol etmek için kullanılan state
    const [isEditing, setIsEditing] = useState(false);

    // Şifre değiştirme sırasında kullanılan state'ler
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    // Hata durumlarını kontrol etmek için kullanılan state'ler
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Profil bilgilerini güncelleme fonksiyonu
    const updateProfile = () => {
        // Profil bilgilerini güncelleme işlemleri burada gerçekleştirilir
        // Örneğin: bir API çağrısı ile server'a gönderilir
        // Bu örnekte sadece bir console.log kullanılmıştır
        console.log('Profil bilgileri güncellendi:', user);

        // Başarı mesajını ayarla
        setSuccessMessage('Profil bilgileri başarıyla güncellendi');

        // Düzenleme modunu kapat
        setIsEditing(false);
    };

    // Şifre değiştirme fonksiyonu
    const changePassword = () => {
        // Şifre değiştirme işlemleri burada gerçekleştirilir
        // Örneğin: bir API çağrısı ile server'a gönderilir
        // Bu örnekte sadece bir console.log kullanılmıştır
        console.log('Şifre değiştirildi');

        // Başarı mesajını ayarla
        setSuccessMessage('Şifre başarıyla değiştirildi');

        // Şifre değiştirme alanlarını temizle
        setCurrentPassword('');
        setNewPassword('');
        setConfirmNewPassword('');
    };
    return (

        <Container>
            <Row className="mt-5">
                <Col md={8} className="mx-auto">
                    
                    {successMessage && <Alert variant="success">{successMessage}</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
                        <Form.Group className="mb-3" controlId="formFirstName">
                            <Form.Label>Ad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Adınız"
                                value={user.firstName}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                disabled={!isEditing}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formLastName">
                            <Form.Label>Soyad</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Soyadınız"
                                value={user.lastName}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                disabled={!isEditing}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="E-mail adresiniz"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                                disabled={!isEditing}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formPhone">
                            <Form.Label>Telefon Numarası</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Telefon numaranız"
                                value={user.phone}
                                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                disabled={!isEditing}
                            />
                        </Form.Group>
                        

                        {isEditing && (
                            <>
                                <Form.Group className="mb-3" controlId="formCurrentPassword">
                                    <Form.Label>Şifre</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Şifreniz"
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                </Form.Group>

                            </>
                        )}

                        <Button
                            variant={isEditing ? 'primary' : 'secondary'}
                            type="button"
                            onClick={isEditing ? updateProfile : () => setIsEditing(true)}
                        >
                            {isEditing ? 'Profil Güncelle' : 'Düzenle'}
                        </Button>

                        {isEditing && (
                            <Button variant="secondary" type="button" className="ms-2" onClick={() => setIsEditing(false)}>
                                İptal
                            </Button>
                        )}

                        
                    </Form>
                </Col>
            </Row>
        </Container>

    );
}