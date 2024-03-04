import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://toolbelts-backend.vercel.app/api'
})

export default instance;