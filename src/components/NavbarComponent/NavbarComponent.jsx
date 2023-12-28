import AdminNavbar from './AdminNavbar';
import UserNavbar from './UserNavbar';
import DefaultNavbar from './DefaultNavbar';

export default function NavbarComponent({ isLoggedIn, userRole }) {
    console.log('isLoggedIn:', isLoggedIn, 'userRole:', userRole); // Bu satırı ekleyin

    if (!isLoggedIn) {
        // Kullanıcı giriş yapmamışsa, bu kısım çalışacak.
        return <DefaultNavbar />; // Varsayılan Navbar componentiniz buraya gelebilir.
    }

    return userRole === 'admin' ? <AdminNavbar /> : <UserNavbar />;

};