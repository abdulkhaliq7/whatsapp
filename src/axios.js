import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://whatsapp-backend7.herokuapp.com',
});

export default instance;

