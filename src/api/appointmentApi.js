import axios from 'axios';


const BASE_URL = 'http://localhost:8081/api/appointments'; // Sunucunuzun URL'si

export const addAppointment = async (createAppointmentRequest) => {
    try {
        const response = await axios.post(`${BASE_URL}/addAppointment`, createAppointmentRequest);
        return response.data;
    } catch (error) {
        // Hata işleme
        console.error('Adding appointment failed:', error);
    }
};

export const getAllAppointments = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/get-all-appointment`);
        return response.data;
    } catch (error) {
        // Hata işleme
        console.error('Fetching appointments failed:', error);
    }
};

export const getAppointmentById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/get-by-id-appointment`, { params: { id } });
        return response.data;
    } catch (error) {
        // Hata işleme
        console.error('Fetching appointment failed:', error);
    }
};

export const deleteAppointment = async (deleteAppointmentRequest) => {
    try {
        const response = await axios.delete(`${BASE_URL}/delete-appointment`, { data: deleteAppointmentRequest });
        return response.data;
    } catch (error) {
        // Hata işleme
        console.error('Deleting appointment failed:', error);
    }
};

export const getAvailableSlots = async (workerId, appointmentDate, serviceIds) => {
    try {
        const response = await axios.get(`${BASE_URL}/available-slots`, {
            params: { workerId, appointmentDate, serviceIds }
        });
        return response.data;
    } catch (error) {
        // Hata işleme
        console.error('Fetching available slots failed:', error);
    }
};
