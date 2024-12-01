import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://back.qnurye.online:2026',
  headers: {
    'Content-Type': 'application/json',
  },
})

const AiInstance = axios.create({
  baseURL: 'http://10.12.112.166:9977/v1/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
