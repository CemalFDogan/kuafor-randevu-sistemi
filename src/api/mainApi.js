import * as appointmentApi from './appointmentApi';
import * as serviceApi from './serviceApi';
import * as userApi from './userApi';

const mainApi = {
    appointment: appointmentApi,
    service: serviceApi,
    user: userApi
};

export default mainApi;
