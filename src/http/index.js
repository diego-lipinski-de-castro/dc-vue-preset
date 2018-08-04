import axios from 'axios'

const httpClient = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 5000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
})

console.log(httpClient.baseURL)

httpClient.interceptors.request.use(request => {
    console.log('request: ', request)
    return request
}, error => {
    console.log('error: ', error)
    return Promise.reject(error)
})

httpClient.interceptors.response.use(response => {
    console.log('response: ', response)
    return response
}, error => {
    console.log('error: ', error)
    return Promise.reject(error)
})

export default httpClient
