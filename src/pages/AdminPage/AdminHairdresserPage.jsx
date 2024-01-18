import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form, Table } from 'react-bootstrap';
import './_adminHairdresserPage.scss'; // SCSS dosyanız
import mainApi from '../../api/mainApi';


export default function AdminHairdresserPage() {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ firstname: '', lastname: '', phonenumber: '', email: '', password: '' });
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        loadHairdressers();

    }, []);

    const loadHairdressers = async () => {
        try {
            const response = await mainApi.user.getAllWorkers(); // API'den tüm kuaförleri al
            if (response && response.data) {
                setUsers(response.data.map(user => ({ ...user, firstname: user.firstName, lastname: user.lastName, phonenumber: user.phoneNumber }))); // API'den gelen veri formatını değiştir
            } else {
                setUsers([]);
                console.error("Kuaför verileri yüklenemedi.");
            }
        } catch (error) {
            console.error("Kuaförler yüklenirken hata oluştu:", error);
            setUsers([]);
        }
    };


    const handleAddUser = async () => {
        const userData = {
            firstName: newUser.firstname,
            lastName: newUser.lastname,
            phoneNumber: newUser.phonenumber,
            email: newUser.email,
            password: newUser.password
        };


        await mainApi.user.addWorker(userData); // Yeni kullanıcı ekleme


        loadHairdressers();
        setNewUser({ firstname: '', lastname: '', phonenumber: '', email: '', password: '' });
        setEditingUser(null);
    };




    const handleDeleteUser = async (index) => {
        const userId = users[index].workerId;
        await mainApi.user.deleteWorker(userId);
        loadHairdressers();
    };

    const handleEditUser = (index) => {
        setEditingUser(index);
        setNewUser({
            firstname: users[index].firstName,
            lastname: users[index].lastName,
            phonenumber: users[index].phoneNumber,
            email: users[index].email,
            password: users[index].password
        });
    };


    const handleUpdateUser = async () => {
        if (editingUser === null) return;

        const userData = {
           WorkerId: users[editingUser].WorkerId, 
            firstName: newUser.firstname,
            lastName: newUser.lastname,
            phoneNumber: newUser.phonenumber,
            email: newUser.email,
            password: newUser.password,
            role: "HAIRDRESSER"
        };

        await mainApi.user.updateWorker(userData);

        loadHairdressers();
        setNewUser({ firstname: '', lastname: '', phonenumber: '', email: '', password: '' });
        setEditingUser(null);
    };





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
                            Kullanıcı ekle
                        </Button>
                        <Button variant="primary" onClick={handleUpdateUser}>
                            Kullanıcı güncelle
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
                                        <td>{user.password}</td>

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