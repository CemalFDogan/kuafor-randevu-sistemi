import AdminNavbar from './AdminNavbar';
import UserNavbar from './UserNavbar';
import DefaultNavbar from './DefaultNavbar';
import HairstylistNavbar from './HairstylistNavbar';

export default function NavbarComponent({ isLoggedIn, userRole }) {
    console.log('isLoggedIn:', isLoggedIn, 'userRole:', userRole); // Durum bilgisini konsola yazdır

    if (!isLoggedIn) {
        // Kullanıcı giriş yapmamışsa, varsayılan Navbar'ı döndür
        return <DefaultNavbar />;
    }

    // Kullanıcı giriş yapmışsa, rolüne göre uygun Navbar'ı döndür
    switch(userRole) {
        case 'admin':
            return <AdminNavbar />;
        case 'user':
            return <UserNavbar />;
        case 'hairstylist':
            return <HairstylistNavbar />;
        default:
            // Tanımsız bir rol varsa veya rol belirtilmemişse, varsayılan Navbar'ı döndür
            return <DefaultNavbar />;
    }
};
