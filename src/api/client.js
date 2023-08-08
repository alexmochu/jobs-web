import axios from 'axios'
// localhost --> http://127.0.0.1:5000/
// production --> https://jobs.kejanigarage.com/

const baseURL = import.meta.env.VITE_API_BASE_URL

const getHeaderAccessToken = () => {
  return localStorage.getItem('headerAccessToken')
}

var axiosInstance = axios.create({
  baseURL,
})

// Interceptor to update the header access token before each request
axiosInstance.interceptors.request.use(
  function (config) {
    const token = getHeaderAccessToken();
    if (token) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['header-access-token'] = token;
    }
    return config;
  },
  function (error) {
    console.log('error', error)
    return Promise.reject(error)
  },
)

export default axiosInstance
