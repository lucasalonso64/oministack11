import axios from 'axios';

const api = axios.create({
   // baseURL: "http://localhost:3333", /local
    baseURL: "http://192.168.0.106:3333",
})

export default api;