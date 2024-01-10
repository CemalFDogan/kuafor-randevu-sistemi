import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table, Tabs, Tab } from 'react-bootstrap';
import './_userAppointmentsPage.scss';

export default function UserAppointmentsPage() {

    const [appointments, setAppointments] = useState([]);
    const [newAppointment, setNewAppointment] = useState({
        hairdresser: '',
        service: '',
        appointmentTime: '',
        notes: '',
        status: 'onay bekliyor',
    });
    const [editingAppointment, setEditingAppointment] = useState(null);

    const hairdressers = ['Hairdresser 1', 'Hairdresser 2', 'Hairdresser 3']; // Kuaför seçenekleri
    const services = ['Service 1', 'Service 2', 'Service 3']; // Hizmet seçenekleri

    const handleAddAppointment = () => {
        if (editingAppointment === null) {
            setAppointments([...appointments, newAppointment]);
        } else {
            const updatedAppointments = [...appointments];
            updatedAppointments[editingAppointment] = newAppointment;
            setAppointments(updatedAppointments);
            setEditingAppointment(null);
        }

        setNewAppointment({
            hairdresser: '',
            service: '',
            appointmentTime: '',
            notes: '',
            status: 'onay bekliyor',
        });
    };

    const handleDeleteAppointment = (index) => {
        const updatedAppointments = [...appointments];
        updatedAppointments.splice(index, 1);
        setAppointments(updatedAppointments);
        setEditingAppointment(null);
    };

    const handleEditAppointment = (index) => {
        setNewAppointment(appointments[index]);
        setEditingAppointment(index);
    };

    const handleCancelAppointment = (index) => {
        const updatedAppointments = [...appointments];
        const appointment = { ...updatedAppointments[index] };

        // Eğer durum "onay bekliyor" veya "onaylandı" ise "iptal edildi" yap, aksi halde değiştirmiyoruz
        appointment.status = ['onay bekliyor', 'onaylandı'].includes(appointment.status) ? 'iptal edildi' : appointment.status;

        updatedAppointments[index] = appointment;
        setAppointments(updatedAppointments);
    };


    return (

        <Container fluid>
            <Row>
                <Col md={4} className="sidebar">
                    <h2>Randevu Oluştur</h2>
                    <Form>
                        <Form.Group controlId="formHairdresser">
                            <Form.Label>Kuaför</Form.Label>
                            <Form.Control
                                as="select"
                                value={newAppointment.hairdresser}
                                onChange={(e) => setNewAppointment({ ...newAppointment, hairdresser: e.target.value })}
                            >
                                <option value="">Kuaför Seçin</option>
                                {hairdressers.map((hairdresser, index) => (
                                    <option key={index} value={hairdresser}>
                                        {hairdresser}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formService">
                            <Form.Label>Hizmet</Form.Label>
                            <Form.Control
                                as="select"
                                value={newAppointment.service}
                                onChange={(e) => setNewAppointment({ ...newAppointment, service: e.target.value })}
                            >
                                <option value="">Hizmet Seçin</option>
                                {services.map((service, index) => (
                                    <option key={index} value={service}>
                                        {service}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formAppointmentTime">
                            <Form.Label>Randevu Saati</Form.Label>
                            <Form.Control
                                type="time"
                                value={newAppointment.appointmentTime}
                                onChange={(e) => setNewAppointment({ ...newAppointment, appointmentTime: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formNotes">
                            <Form.Label>Notlar</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={newAppointment.notes}
                                onChange={(e) => setNewAppointment({ ...newAppointment, notes: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formStatus">
                            <Form.Label>Randevu Durumu</Form.Label>
                            <Form.Control
                                as="select"
                                value={newAppointment.status}
                                onChange={(e) => setNewAppointment({ ...newAppointment, status: e.target.value })}
                            >
                                <option value="onay bekliyor">Onay Bekliyor</option>
                                <option value="onaylandı">Onaylandı</option>
                                <option value="iptal edildi">İptal Edildi</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddAppointment}>
                            {editingAppointment === null ? 'Randevu Oluştur' : 'Randevu Güncelle'}
                        </Button>
                    </Form>
                </Col>
                <Col md={8} className="content">
                 <Tabs >
                    <Tab eventKey="appointmentsAwaitingApproval" title="Onay Bekleyen Randevular">
                    <div className="table-wrapper">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Kuaför</th>
                                    <th>Hizmet</th>
                                    <th>Randevu Saati</th>
                                    <th>Notlar</th>
                                    <th>Randevu Durumu</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index} onClick={() => handleEditAppointment(index)}>
                                        <td>{index + 1}</td>
                                        <td>{appointment.hairdresser}</td>
                                        <td>{appointment.service}</td>
                                        <td>{appointment.appointmentTime}</td>
                                        <td>{appointment.notes}</td>
                                        <td>{appointment.status}</td>
                                        <td>
                                            {['onay bekliyor', 'onaylandı'].includes(appointment.status) && (
                                                <Button variant="danger" onClick={(e) => { e.stopPropagation(); handleCancelAppointment(index); }}>
                                                    İptal Et
                                                </Button>
                                            )}

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
                                    <th>Kuaför</th>
                                    <th>Hizmet</th>
                                    <th>Randevu Saati</th>
                                    <th>Notlar</th>
                                    <th>Randevu Durumu</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index} onClick={() => handleEditAppointment(index)}>
                                        <td>{index + 1}</td>
                                        <td>{appointment.hairdresser}</td>
                                        <td>{appointment.service}</td>
                                        <td>{appointment.appointmentTime}</td>
                                        <td>{appointment.notes}</td>
                                        <td>{appointment.status}</td>
                                        <td>
                                            {['onay bekliyor', 'onaylandı'].includes(appointment.status) && (
                                                <Button variant="danger" onClick={(e) => { e.stopPropagation(); handleCancelAppointment(index); }}>
                                                    İptal Et
                                                </Button>
                                            )}

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                    </Tab>
                    <Tab eventKey="canceledAppointments" title="İptal Edilen Randevular">
                    <div className="table-wrapper">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Kuaför</th>
                                    <th>Hizmet</th>
                                    <th>Randevu Saati</th>
                                    <th>Notlar</th>
                                    <th>Randevu Durumu</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index} onClick={() => handleEditAppointment(index)}>
                                        <td>{index + 1}</td>
                                        <td>{appointment.hairdresser}</td>
                                        <td>{appointment.service}</td>
                                        <td>{appointment.appointmentTime}</td>
                                        <td>{appointment.notes}</td>
                                        <td>{appointment.status}</td>
                                        <td>
                                            {['onay bekliyor', 'onaylandı'].includes(appointment.status) && (
                                                <Button variant="danger" onClick={(e) => { e.stopPropagation(); handleCancelAppointment(index); }}>
                                                    İptal Et
                                                </Button>
                                            )}

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
                                    <th>Kuaför</th>
                                    <th>Hizmet</th>
                                    <th>Randevu Saati</th>
                                    <th>Notlar</th>
                                    <th>Randevu Durumu</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                    <tr key={index} onClick={() => handleEditAppointment(index)}>
                                        <td>{index + 1}</td>
                                        <td>{appointment.hairdresser}</td>
                                        <td>{appointment.service}</td>
                                        <td>{appointment.appointmentTime}</td>
                                        <td>{appointment.notes}</td>
                                        <td>{appointment.status}</td>
                                        <td>
                                            {['onay bekliyor', 'onaylandı'].includes(appointment.status) && (
                                                <Button variant="danger" onClick={(e) => { e.stopPropagation(); handleCancelAppointment(index); }}>
                                                    İptal Et
                                                </Button>
                                            )}

                                        </td>
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
};


