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
import AdminPage from './pages/AdminPage/AdminPage';
import UserPage from './pages/UserPage/UserPage';
import AppointmentsPage from './pages/AppointmentsPage/AppointmentsPage';
import UserSettings from './pages/UserSettings/UserSettings';

// Bootstrap Nesneleri
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import FooterComponent from './components/FooterCompenent/FooterComponent';

export default function MyApp() {
  // Yeni Yöntem (React Router v6)
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Kullanıcı giriş durumunu tutan state
  const [userRole, setUserRole] = useState('');  // 'admin' veya 'user'

  // Kullanıcı başarıyla giriş yaptığında çağrılacak fonksiyon
  const handleLoginSuccess = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
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
        </Routes>
      </main>
      <FooterComponent />
    </Router>
  );
}
