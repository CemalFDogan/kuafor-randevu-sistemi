import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
//import './_adminHairdresserPage.scss'; // SCSS dosyanız

export default function AdminHairdresserPage() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ hairdresser: '', service: ''});
    const [editingUser, setEditingUser] = useState(null);

    const hairdressers = ['Hairdresser 1', 'Hairdresser 2', 'Hairdresser 3']; // Kuaför seçenekleri

    const handleAddUser = () => {
        if (editingUser === null) {
            setUsers([...users, newUser]);
        } else {
            const updatedUsers = [...users];
            updatedUsers[editingUser] = newUser;
            setUsers(updatedUsers);
            setEditingUser(null);
        }

        setNewUser({ hairdresser: '', service: ''});
    };

    const handleDeleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
        setEditingUser(null);
    };

    const handleEditUser = (index) => {
        setNewUser(users[index]);
        setEditingUser(index);
    };

    return (
        <Container fluid>
            <Row>
                <Col md={4} className="sidebar">
                    <h2>Kuaförler</h2>
                    <Form>
                    <Form.Group controlId="formHairdresser">
                            <Form.Label>Kuaför</Form.Label>
                            <Form.Control
                                as="select"
                                value={newUser.hairdresser}
                                onChange={(e) => setNewUser({ ...newUser, hairdresser: e.target.value })}
                            >
                                <option value="">Kuaför Seçin</option>
                                {hairdressers.map((hairdresser, index) => (
                                    <option key={index} value={hairdresser}>
                                        {hairdresser}
                                    </option>
                                ))}
                            </Form.Control>
                    </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Hizmetler</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={newUser.service}
                                onChange={(e) => setNewUser({ ...newUser, service: e.target.value })}
                            />
                        </Form.Group>
                        
                        <Button variant="primary" onClick={handleAddUser}>
                            {editingUser === null ? 'Hizmet ekle' : 'Hizmet güncelle'}
                        </Button>
                    </Form>
                </Col>
                <Col md={8} className="content">
                    <div className="table-wrapper">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Kuaför</th>
                                <th>Hizmet</th>
                                <th>Aksiyon</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} onClick={() => handleEditUser(index)}>
                                    <td>{index + 1}</td>
                                    <td>{user.hairdresser}</td>
                                    <td>{user.service}</td>
                                    

                                    <td>
                                        <Button variant="danger" onClick={() => handleDeleteUser(index)}>
                                            Sil
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    </div>
                 </Col>

            </Row>
        </Container>
    );
}
