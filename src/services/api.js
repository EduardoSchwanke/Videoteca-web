import axios from 'axios'

const api = axios.create({
    baseURL: 'https://videoteca-server-production.up.railway.app'
})

export default api