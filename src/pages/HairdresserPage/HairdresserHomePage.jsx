import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './_hairdresserHomePage.scss';
import { Container, Row, Col, Table } from 'react-bootstrap';

export default function HairdresserPage() {
    const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <Container fluid>
      <Row>
        {/* 9'luk kısım */}
        <Col md={8}>
          <div className="welcome-section">
            <img src="path/to/your/image.jpg" alt="User Avatar" className="user-avatar" />
            <p>Hoş geldiniz, user </p>
          </div>
        </Col>

        {/* 3'lük kısım */}
        <Col md={4}>
          {/* Üst kısım */}
          <Row>
            <div className="calendar-section">
              <h4>Takvim</h4>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy" // Tarih formatı
                showTimeInput={false} // Saat kısmını devre dışı bırak
              //open // Takvim açık başlasın
              />
            </div>
          </Row>


          {/* Alt kısım */}
          <Row>

          </Row>
          <div className="appointments-section">
            <h4 >Randevularım</h4>
            <Table striped bordered hover>
              {/* Tablo başlığı ve içeriği buraya eklenecek */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Kuaför</th>
                  <th>Hizmet</th>
                  <th>Randevu Saati</th>
                  <th>Randevu Durumu</th>
                  {/* Diğer sütun başlıkları */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kuaför 1</td>
                  <td>Hizmet 1</td>
                  <td>12:00</td>
                  <td>Onay Bekliyor</td>
                  {/* Diğer sütun değerleri */}
                </tr>
                {/* Diğer randevular */}
              </tbody>
            </Table>
          </div>

        </Col>
      </Row>
    </Container>
  );
}