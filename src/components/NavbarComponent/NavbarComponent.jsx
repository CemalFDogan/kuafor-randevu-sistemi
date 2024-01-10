import AdminNavbar from './AdminNavbar';
import UserNavbar from './UserNavbar';
import DefaultNavbar from './DefaultNavbar';
import HairdresserNavbar from './HairdresserNavbar';

export default function NavbarComponent({ isLoggedIn, userRole, onLogout }) {
    console.log('isLoggedIn:', isLoggedIn, 'userRole:', userRole); // Durum bilgisini konsola yazdır

    if (!isLoggedIn) {
        // Kullanıcı giriş yapmamışsa, varsayılan Navbar'ı döndür
        return <DefaultNavbar />;
    }

    // Kullanıcı giriş yapmışsa, rolüne göre uygun Navbar'ı döndür
    switch (userRole) {
        case 'admin':
            return <AdminNavbar onLogout={onLogout} />;
        case 'user':
            return <UserNavbar onLogout={onLogout} />;
        case 'hairdresser':
            return <HairdresserNavbar onLogout={onLogout} />;
        default:
            // Tanımsız bir rol varsa veya rol belirtilmemişse, varsayılan Navbar'ı döndür
            return <DefaultNavbar />;
    }
};
