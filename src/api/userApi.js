import axios from 'axios';

const API_URL = 'http://localhost:8081/api/users'; // Sunucunuzun URL'si

export const addCustomer = async (customerData) => {
    return await axios.post(`${API_URL}/addCustomer`, customerData);
};

export const getAllCustomers = async () => {
    return await axios.get(`${API_URL}/getAllCustomers`);
};

export const getByIdCustomer = async (id) => {
    return await axios.get(`${API_URL}/getByIdCustomer/${id}`);
};

export const updateCustomer = async (updateCustomerRequest) => {
    return await axios.put(`${API_URL}/updateCustomer`, updateCustomerRequest);
};

export const deleteCustomer = async (id) => {
    return await axios.delete(`${API_URL}/deleteCustomer/${id}`);
};

export const addWorker = async (workerData) => {
    return await axios.post(`${API_URL}/addWorker`, workerData);
};

export const getAllWorkers = async () => {
    return await axios.get(`${API_URL}/getAllWorkers`);
};

export const getByIdWorker = async (id) => {
    return await axios.get(`${API_URL}/getByIdWorker/${id}`);
};

export const updateWorker = async (updateWorkerRequest) => {
    return await axios.put(`${API_URL}/updateWorker`, updateWorkerRequest);
};

export const deleteWorker = async (id) => {
    return await axios.delete(`${API_URL}/deleteWorker/${id}`);
};

export const loginUser = async (userLoginRequest) => {
    return await axios.post(`${API_URL}/login`, userLoginRequest);
};

export const customerRegister = async (customerRegisterRequest) => {
    return await axios.post(`${API_URL}/register`, customerRegisterRequest);
};
