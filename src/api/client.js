import axios from 'axios'
// localhost --> http://127.0.0.1:5000/
// production --> https://jobs.kejanigarage.com/
var axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/',
  headers: {
    'Content-Type': 'application/json',
    'header-access-token': localStorage.getItem('headerAccessToken'),
  },
})
export default axiosInstance
