import axios from 'axios'
// localhost --> http://127.0.0.1:5000/
// production --> https://jobs.kejanigarage.com/

const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5000/'

var axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'header-access-token': localStorage.getItem('headerAccessToken'),
  },
})
export default axiosInstance
