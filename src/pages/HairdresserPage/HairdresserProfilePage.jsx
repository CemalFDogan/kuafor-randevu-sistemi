import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table, Alert, Tab, Tabs } from 'react-bootstrap';

export default function HairdresserProfilePage() {
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

    const [selectedHours, setSelectedHours] = useState([]);
    const [selectedHourForSelect, setSelectedHourForSelect] = useState('');
    const [selectedHourFromSelect, setSelectedHourFromSelect] = useState('');

    const generateHoursOptions = () => {
        const hoursOptions = [];
        for (let i = 8; i <= 20; i++) {
            const formattedHour = `${i < 10 ? '0' : ''}${i}:00`;
            hoursOptions.push(
                <Form.Check
                    key={formattedHour}
                    type="checkbox"
                    label={formattedHour}
                    checked={selectedHours.includes(formattedHour)}
                    onChange={() => handleToggleHour(formattedHour)}
                />
            );
        }
        return hoursOptions;
    };

    const generateSelectOptions = () => {
        return selectedHours.map((hour, index) => (
            <option key={index} value={hour}>
                {hour}
            </option>
        ));
    };

    const handleToggleHour = (hour) => {
        const updatedHours = [...selectedHours];
        if (updatedHours.includes(hour)) {
            // Saat seçiliyse, kaldır
            updatedHours.splice(updatedHours.indexOf(hour), 1);
        } else {
            // Saat seçili değilse, ekle
            updatedHours.push(hour);
        }
        setSelectedHours(updatedHours);

        // Seçilen saatleri birleştirip tek bir string'e çevirme
        const selectedHoursString = updatedHours.join(', ');
        setSelectedHourForSelect(selectedHoursString);
    };

    const handleSelectHourFromCell = () => {
        // Seçilen saatleri select menüsünde seçilen saate atama
        setSelectedHourFromSelect(selectedHourForSelect);
    };

    return (
        <Container>
            <Row>
                <Col md={4} className="mx-auto">
                    <h2 className="text-center mb-4">Profil</h2>
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


                <Col md={4} className="sidebar">
                    <h2>Çalışma Saatleri</h2>
                    <Form>
                        <Form.Group controlId="formWorkingHours">
                            {generateHoursOptions()}
                        </Form.Group>
                        <Button variant="primary" onClick={handleSetWorkingHours}>
                            Çalışma Saatlerini Ayarla
                        </Button>
                        <Form.Group controlId="formSelectedHours">
                            <Form.Label>Seçilen Saatler</Form.Label>
                            <Form.Control
                                as="select"
                                multiple
                                value={selectedHourFromSelect}
                                onChange={(e) => setSelectedHourFromSelect(Array.from(e.target.selectedOptions, option => option.value))}
                            >
                                {generateSelectOptions().map((hour, index) => (
                                    <option key={index} value={hour}>
                                        {hour}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={4} className="content">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Seçilen Saatler</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td onClick={() => handleSelectHourFromCell()}>{selectedHourForSelect}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>


                </Col>

            </Row>
        </Container>
    );
    function handleSetWorkingHours() {
        // Çalışma saatlerini ayarlamak için gerekli işlemler
    }
}