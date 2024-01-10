import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import './_adminHairdresserPage.scss'; // SCSS dosyanız


export default function AdminHairdresserPage() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ firstname: '', lastname: '', phonenumber: '', email: '', password: '' });
    const [editingUser, setEditingUser] = useState(null);

    const handleAddUser = () => {
        if (editingUser === null) {
            setUsers([...users, newUser]);
        } else {
            const updatedUsers = [...users];
            updatedUsers[editingUser] = newUser;
            setUsers(updatedUsers);
            setEditingUser(null);
        }

        setNewUser({ firstname: '', lastname: '', phonenumber: '', email: '', password: '' });
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
/*     const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ firstname: '', lastname:'', phonenumber:'', email: '', password:'' });

    const handleAddUser = () => {
        setUsers([...users, newUser]);
        setNewUser({ firstname: '', lastname:'', phonenumber:'', email: '', password:'' });
    };

    const handleDeleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    }; */

    return (
        <Container fluid>
            <Row>
                <Col md={4} className="sidebar">
                    <h2>Kuaförler</h2>
                    <Form>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                value={newUser.firstname}
                                onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                value={newUser.lastname}
                                onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter phone number"
                                value={newUser.phonenumber}
                                onChange={(e) => setNewUser({ ...newUser, phonenumber: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={newUser.email}
                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={newUser.password}
                                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                            />
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddUser}>
                            {editingUser === null ? 'Kullanıcı ekle' : 'Kullanıcı güncelle'}
                        </Button>
                    </Form>
                </Col>
                <Col md={8} className="content">
                    <div className="table-wrapper">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index} onClick={() => handleEditUser(index)}>
                                    <td>{index + 1}</td>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.phonenumber}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password.replace(/./g, '*')}</td>

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