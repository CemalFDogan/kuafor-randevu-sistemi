import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './_hairdresserHomePage.scss';
import resim1 from "../../toplu_cekim.png";
import { Container, Row, Col, Table } from 'react-bootstrap';

export default function HairdresserPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <Container fluid style={{
      backgroundImage: `url(${resim1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '78vh', // Minimum yükseklik ekran boyu kadar
    }}>
      <Row>
        {/* 9'luk kısım */}
        <Col md={8} > {/* Yarı saydam beyaz arkaplan */}
          {/* İçerik */}
        </Col>

        {/* 3'lük kısım */}
        <Col md={4} > {/* Yarı saydam beyaz arkaplan */}
          <Row>
            <div className="calendar-section">
              <h4>Takvim</h4>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy" // Tarih formatı
                showTimeInput={false} // Saat kısmını devre dışı bırak

              />
            </div>
          </Row>


          <Row>

          </Row>
          <div className="appointments-section">
            <h4 >Randevularım</h4>
            <Table striped bordered hover>

              <thead>
                <tr>
                  <th>#</th>
                  <th>Kuaför</th>
                  <th>Hizmet</th>
                  <th>Randevu Saati</th>
                  <th>Randevu Durumu</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Kuaför 1</td>
                  <td>Hizmet 1</td>
                  <td>12:00</td>
                  <td>Onay Bekliyor</td>

                </tr>

              </tbody>
            </Table>
          </div>

        </Col>
      
    
      </Row >
    </Container >
  );
}
