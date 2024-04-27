// api.ts
import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: 'https://localhost:7047/api/',
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;
