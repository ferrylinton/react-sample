import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_TODO_API_HOST,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    validateStatus: function (status) {
        return (status >= 200 && status < 300) || status === 400 || status === 409;
    }
});

export default apiClient;