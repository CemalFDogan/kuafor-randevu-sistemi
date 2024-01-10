import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

// Sayfa 
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import LoginRegisterPage from './pages/LoginRegisterPage/LoginRegisterPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import TeamPage from './pages/TeamPage/TeamPage';
import SalonPage from './pages/SalonPage/SalonPage';
import ContactPage from './pages/ContactPage/ContactPage';
import AdminPage from './pages/AdminPage/AdminHomePage';
import AdminHairdresserPage from './pages/AdminPage/AdminHairdresserPage';
import AdminServicesPage from './pages/AdminPage/AdminServicesPage';
import UserPage from './pages/UserPage/UserPage';
import UserProfilePage from './pages/UserPage/UserProfilePage';
import UserAppointmentsPage from './pages/UserPage/UserAppointmentsPage';
import AppointmentsPage from './pages/AppointmentsPage/AppointmentsPage';
import HairdresserPage from './pages/HairdresserPage/HairdresserHomePage';
import HairdresserAppointmentsPage from './pages/HairdresserPage/HairdresserAppointmentsPage';
import HairdresserProfilePage from './pages/HairdresserPage/HairdresserProfilePage';



// Bootstrap Nesneleri
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import FooterComponent from './components/FooterCompenent/FooterComponent';

export default function MyApp() {
  // Yeni Yöntem (React Router v6)
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Kullanıcı giriş durumunu tutan state
  const [userRole, setUserRole] = useState('');  // 'admin' veya 'user'

  // Kullanıcı başarıyla giriş yaptığında çağrılacak fonksiyon
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setUserRole("admin");
  };


  return (
    <Router>
      {/* isLoggedIn prop'u ile NavbarComponent çağrısı */}
      <NavbarComponent isLoggedIn={isLoggedIn} userRole={userRole} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/login-register" element={<LoginRegisterPage onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/salon" element={<SalonPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/appointments" element={<AppointmentsPage/>}/>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/admin-hairdresser" element={<AdminHairdresserPage />} />
          <Route path="/admin-services" element={<AdminServicesPage />} />
          <Route path="/hairdresser" element={<HairdresserPage/>}/>
          <Route path="/hairdresser-profile" element={<HairdresserProfilePage/>}/>
          <Route path="/hairdresser-appointments" element={<HairdresserAppointmentsPage/>}/>
          <Route path="/user" element={<UserPage/>}/>
          <Route path="/user-profile" element={<UserProfilePage/>}/>
          <Route path="/user-appointments" element={<UserAppointmentsPage/>}/>

        </Routes>

        {/* {
          userRole==="admin" (<h2>cemal</h2>)
        } */}


      

      </main>
      {!isLoggedIn && <FooterComponent />}
    </Router>
  );
}
