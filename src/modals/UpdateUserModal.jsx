import React, { useState, useEffect } from 'react';

export default function UpdateUserModal({ userData, onUpdate }) {
    // userData'nın varsayılan bir değerle başlatılması
    const [updatedData, setUpdatedData] = useState(userData || { firstName: '', lastName: '', email: '', phoneNumber: '', role: '' });

    useEffect(() => {
        // userData güncellendiğinde updatedData'yı güncelle
        if (userData) {
            setUpdatedData(userData);
        }
    }, [userData]);

    const handleChange = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedData);
    }

    return (
        <div className="modal">
            <form onSubmit={handleSubmit}>
                <input name="firstName" value={updatedData.firstName} onChange={handleChange} placeholder="Ad" />
                <input name="lastName" value={updatedData.lastName} onChange={handleChange} placeholder="Soyad" />
                <input name="email" value={updatedData.email} onChange={handleChange} placeholder="E-posta" />
                <input name="phoneNumber" value={updatedData.phoneNumber} onChange={handleChange} placeholder="Telefon Numarası" />
                {updatedData.role && (
                    <select name="role" value={updatedData.role} onChange={handleChange}>
                        <option value="HAIRDRESSER">Kuaför</option>
                        <option value="ADMIN">Yönetici</option>
                        <option value="CUSTOMER">Müşteri</option>
                    </select>
                )}
                <button type="submit">Güncelle</button>
            </form>
        </div>
    );
}
