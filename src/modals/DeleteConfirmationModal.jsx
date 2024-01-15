import React from 'react';

export default function DeleteConfirmationModal({ onConfirm, onCancel }) {
    return (
        <div className="modal">
            <p>Silmek istediğinizden emin misiniz?</p>
            <button onClick={onConfirm}>Evet, Sil</button>
            <button onClick={onCancel}>Hayır, İptal Et</button>
        </div>
    );
}
