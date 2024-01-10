import AdminNavbar from './AdminNavbar';
import UserNavbar from './UserNavbar';
import DefaultNavbar from './DefaultNavbar';
import HairdresserNavbar from './HairdresserNavbar';

export default function NavbarComponent({ isLoggedIn, userRole }) {
    console.log('isLoggedIn:', isLoggedIn, 'userRole:', userRole); // Bu satırı ekleyin

    switch(userRole) {
        case 'admin':
            return <AdminNavbar />;
        case 'user':
            return <UserNavbar />;
        case 'hairdresser':
            return <HairdresserNavbar />;
        default:
            // Tanımsız bir rol varsa veya rol belirtilmemişse, varsayılan Navbar'ı döndür
            return <DefaultNavbar />;
    }
};