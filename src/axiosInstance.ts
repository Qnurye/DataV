import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://back.qnurye.online:2026',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
