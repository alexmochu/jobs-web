import api from './api'
import setAuthToken from '../utilities/setAuthToken'
import removeAuthToken from '../utilities/removeAuthToken'

const landingPage = async () => {
  const response = await api.home.landingPage()
  return response
}

const signup = async (user) => {
  const response = await api.user.signup(user)
  return response
}

const login = async (credentials) => {
  const response = await api.user.login(credentials)
  const token = response.header_access_token
  localStorage.headerAccessToken = token
  return setAuthToken(token)
}

const logout = async () => {
  const response = await api.user.logout()
  const token = localStorage.getItem('headerAccessToken')
  removeAuthToken(token)
  localStorage.removeItem(token)
  return response
}

const Queries = {
  landingPage,
  signup,
  login,
  logout,
}

export default Queries
