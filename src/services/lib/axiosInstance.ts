import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://66955e9a4bd61d8314cb12b7.mockapi.io/api',
})

export default axiosInstance
