import React, { useState } from 'react';

export default function AddUserModal({ onSubmit }) {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        role: ''
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(userData);
    }

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <input name="firstName" value={userData.firstName} onChange={handleChange} placeholder="Ad" />
                <input name="lastName" value={userData.lastName} onChange={handleChange} placeholder="Soyad" />
                <input name="email" value={userData.email} onChange={handleChange} placeholder="E-posta" />
                <input name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} placeholder="Telefon Numarası" />
                <input name="password" type="password" value={userData.password} onChange={handleChange} placeholder="Parola" />
                <select name="role" value={userData.role} onChange={handleChange}>
                    <option value="HAIRDRESSER">Kuaför</option>
                    <option value="ADMIN">Yönetici</option>
                    <option value="CUSTOMER">Müşteri</option>
                </select>
                <button type="submit">Ekle</button>
            </form>
        </div>
    );
}
