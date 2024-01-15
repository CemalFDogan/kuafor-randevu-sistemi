import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs, Button, ListGroup, Table } from 'react-bootstrap';
import mainApi from '../../api/mainApi';

export default function AdminHomePage() {
  const [key, setKey] = useState('staff');
  const [staff, setStaff] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    loadStaff();
    loadCustomers();
    loadServices();
  }, []);

  const loadStaff = async () => {
    try {
      const response = await mainApi.user.getAllWorkers();
      console.log("Gelen veri", response)
      if (Array.isArray(response.data)) {
        setStaff(response.data);
      } else {
        setStaff([]);
        console.error("Personel verileri yüklenemedi.");
      }
    } catch (error) {
      console.error("Personel yüklenirken hata oluştu:", error);
      setStaff([]);
    }
  };

  const loadCustomers = async () => {
    try {
      const response = await mainApi.user.getAllCustomers();
      if (Array.isArray(response.data)) {
        setCustomers(response.data);
      } else {
        setCustomers([]);
        console.error("Müşteri verileri yüklenemedi.");
      }
    } catch (error) {
      console.error("Müşteri yüklenirken hata oluştu:", error);
      setCustomers([]);
    }
  };

  const loadServices = async () => {
    try {
      const response = await mainApi.service.getAllServices();
      if (Array.isArray(response.data)) {
        setServices(response.data);
      } else {
        setServices([]);
        console.error("Hizmet verileri yüklenemedi.");
      }
    } catch (error) {
      console.error("Hizmetler yüklenirken hata oluştu:", error);
      setServices([]);
    }
  };

  const handleAdd = async () => {
    if (key === 'staff') {
      const newWorkerData = { /* Alınan veriler ile doldurulacak */ };
      await mainApi.user.addWorker(newWorkerData);
      loadStaff();
    } else if (key === 'customers') {
      const newCustomerData = { /* Alınan veriler ile doldurulacak */ };
      await mainApi.user.addCustomer(newCustomerData);
      loadCustomers();
    } else if (key === 'services') {
      const newServiceData = { /* Alınan veriler ile doldurulacak */ };
      await mainApi.service.addService(newServiceData);
      loadServices();
    }
  };

  const handleDelete = async (id) => {
    if (key === 'staff') {
      await mainApi.user.deleteWorker(id);
      loadStaff();
    } else if (key === 'customers') {
      await mainApi.user.deleteCustomer(id);
      loadCustomers();
    } else if (key === 'services') {
      await mainApi.service.deleteService(id);
      loadServices();
    }
  };


  const handleUpdate = async (updatedData) => {
    if (key === 'staff') {
      await mainApi.user.updateWorker(updatedData);
      loadStaff();
    } else if (key === 'customers') {
      await mainApi.user.updateCustomer(updatedData);
      loadCustomers();
    } else if (key === 'services') {
      await mainApi.service.updateService(updatedData);
      loadServices();
    }
  };

  return (
    <Container className="admin-home-page">
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="staff" title="Personeller">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Ad</th>
                <th>Soyad</th>
                <th>Email</th>
                <th>Telefon</th>
              </tr>
            </thead>
            <tbody>
              {staff.map(worker => (
                <tr key={worker.workerId}>
                  <td>{worker.workerId}</td>
                  <td>{worker.firstName}</td>
                  <td>{worker.lastName}</td>
                  <td>{worker.email}</td>
                  <td>{worker.phoneNumber}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="customers" title="Müşteriler">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Ad</th>
                <th>Soyad</th>
                {/* Diğer müşteri bilgilerinin başlık sütunları... */}
              </tr>
            </thead>
            <tbody>
              {customers.map(customer => (
                <tr key={customer.customerId}>
                  <td>{customer.customerId}</td>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  {/* Diğer müşteri bilgilerinin detay hücreleri... */}
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="services" title="Hizmetler">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Hizmet Adı</th>
                <th>Süre</th>
                <th>Fiyat</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.serviceId}>
                  <td>{service.serviceId}</td>
                  <td>{service.serviceName}</td>
                  <td>{service.duration}</td>
                  <td>{service.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
      <div className="admin-actions">
        <Button variant="primary" className="admin-button" onClick={() => handleAdd()}>Ekle</Button>
        <Button variant="secondary" className="admin-button" /* onClick={() => handleDelete(selectedId)} */>Sil</Button>
        <Button variant="success" className="admin-button" /* onClick={() => handleUpdate(selectedData)} */>Güncelle</Button>
      </div>
    </Container>
  );
}
