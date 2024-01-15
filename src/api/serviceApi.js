import axios from 'axios';

const BASE_URL = 'http://localhost:8081/api/services'; // Backend server URL

export const addService = async (createServiceRequest) => {
    try {
        const response = await axios.post(`${BASE_URL}/addService`, createServiceRequest);
        return response.data;
    } catch (error) {
        // Hata yönetimi
        console.error('Hizmet eklenirken bir hata oluştu', error);
    }
};

export const getAllServices = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/get-all-services`);
        return response.data;
    } catch (error) {
        console.error('Tüm hizmetleri alırken bir hata oluştu', error);
    }
};

export const deleteService = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error('Hizmet silinirken bir hata oluştu', error);
    }
};

export const updateService = async (updateServiceRequest) => {
    try {
        await axios.put(`${BASE_URL}/update-service`, updateServiceRequest);
    } catch (error) {
        console.error('Hizmet güncellenirken bir hata oluştu', error);
    }
};

export const getServiceById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/get-by-id-service`, { params: { id } });
        return response.data;
    } catch (error) {
        console.error('Hizmet detayları alınırken bir hata oluştu', error);
    }
};