import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table, Tab, Tabs } from 'react-bootstrap';

export default function HairdresserAppointmentsPage() {
    const [appointmentRequests, setAppointmentRequests] = useState([]);
    const [confirmedAppointments, setConfirmedAppointments] = useState([]);
    const [pastAppointments, setPastAppointments] = useState([]);
    const [selectedHours, setSelectedHours] = useState([]);
    const [selectedHoursForForm, setSelectedHoursForForm] = useState([]);

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
    };

    const handleSetWorkingHours = () => {
        // Seçilen saatleri kontrol edip tek bir hücreye ekleyen işlemler
        const formattedHours = selectedHours.join(', ');
        setSelectedHoursForForm([formattedHours]);

        // Diğer işlemler
        const updatedAppointmentRequests = [...appointmentRequests];
        for (const hour of selectedHours) {
            updatedAppointmentRequests.push({
                hour,
                status: 'onay bekliyor',
            });
        }
        setAppointmentRequests(updatedAppointmentRequests);

        // Seçili saatleri sıfırlama
        setSelectedHours([]);
    };

    const handleAcceptAppointment = (index) => {
        // Randevu isteğini kabul etme işlemleri
        // Burada randevuyu onaylamak için gerekli işlemleri yapabilirsiniz.
    };

    const handleRejectAppointment = (index) => {
        // Randevu isteğini reddetme işlemleri
        // Burada randevuyu reddetmek için gerekli işlemleri yapabilirsiniz.
    };
    const handleCancelAppointment = (index) => {
        // Randevu isteğini reddetme işlemleri
        // Burada randevuyu reddetmek için gerekli işlemleri yapabilirsiniz.
    };

    return (
        <Container fluid>
            <Row>
                
                <Col className="content">
                    <Tabs defaultActiveKey="appointmentRequests" id="controlled-tabs">
                        <Tab eventKey="appointmentRequests" title="Randevu İstekleri">
                            <div className="table-wrapper">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Saat</th>
                                            <th>Durum</th>
                                            <th>İşlemler</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointmentRequests.map((appointment, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{appointment.hour}</td>
                                                <td>{appointment.status}</td>
                                                <td>
                                                    <Button
                                                        variant="success"
                                                        onClick={() => handleAcceptAppointment(index)}
                                                    >
                                                        Onayla
                                                    </Button>
                                                    <Button
                                                        variant="danger"
                                                        onClick={() => handleRejectAppointment(index)}
                                                    >
                                                        Reddet
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey="confirmedAppointments" title="Onaylanmış Randevular">
                            <div className="table-wrapper">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Saat</th>
                                            <th>Notlar</th>
                                            <th>Randevu Durumu</th>
                                            <th>İşlemler</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {confirmedAppointments.map((appointment, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{appointment.hour}</td>
                                                <td>{appointment.notes}</td>
                                                <td>{appointment.status}</td>
                                                <td>
                                                    <Button variant="danger" onClick={() => handleCancelAppointment(index)}>
                                                        İptal Et
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey="pastAppointments" title="Geçmiş Randevular">
                            <div className="table-wrapper">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Saat</th>
                                            <th>Randevu Durumu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pastAppointments.map((appointment, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{appointment.hour}</td>
                                                <td>{appointment.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            
        </Container>
    );
}
 