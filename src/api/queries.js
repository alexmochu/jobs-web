import api from './api'
import setAuthToken from '../utilities/setAuthToken'
import removeAuthToken from '../utilities/removeAuthToken'

const landingPage = async () => {
  const response = await api.home.landingPage()
  return response
}

const getAllUsers = async () => {
  const response = await api.user.allUsers()
  return response
}

const getAllJobs = async () => {
  const response = await api.jobs.allJobs()
  return response
}

const helloEmail = async () => {
  const response = await api.home.helloEmail()
  return response
}

const signup = async (user) => {
  const response = await api.user.signup(user)
  return response
}

const createJob = async (job) => {
  const response = await api.jobs.jobCreate(job)
  return response
}

const createLetter = async (job) => {
  const response = await api.letters.letterCreate(job)
  return response
}

const createResume = async (job) => {
  const response = await api.resumes.resumeCreate(job)
  return response
}

const updateJob = async (user) => {
  const response = await api.jobs.jobUpdate(user)
  return response
}

const updateLetter = async (letter) => {
  const response = await api.letters.letterUpdate(letter)
  return response
}

const updateResume = async (resume) => {
  const response = await api.resumes.resumeUpdate(resume)
  return response
}

const deleteJob = async (id) => {
  const response = await api.jobs.jobDelete(id)
  return response
}

const deleteLetter = async (id) => {
  const response = await api.letters.letterDelete(id)
  return response
}

const deleteResume = async (id) => {
  const response = await api.resumes.resumeDelete(id)
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

const getCurrentUserJobs = async (id) => {
  const response = await api.jobs.jobsUser(id)
  return response
}

const getCurrentUserLetters = async (id) => {
  const response = await api.letters.lettersUser(id)
  return response
}

const getCurrentUserResumes = async (id) => {
  const response = await api.resumes.resumesUser(id)
  return response
}

const forgotPassword = async (email) => {
  const response = await api.user.forgotPassword(email)
  return response
}

const changePassword = async (passwords) => {
  const response = await api.user.changePassword(passwords)
  return response  
}

const sendForgotPasswordEmail = async (items) => {
  const response = await api.email.sendForgotPasswordEmail(items)
  return response
}

const resetForgotPassword = async (items) => {
  const response = await api.email.resetForgotPassword(items)
  return response
}

const verifyEmail = async (items) => {
  const response = await api.email.verifyEmail(items)
  return response
}

const createVerifyEmail = async (email) => {
  const response = await api.email.createVerifyEmail(email)
  return response
}

const sendVerifyEmail = async (items) => {
  const response = await api.email.sendVerifyEmail(items)
  return response
}

const Queries = {
  landingPage,
  helloEmail,
  signup,
  login,
  logout,
  getCurrentUserJobs,
  createJob,
  updateJob,
  deleteJob,
  deleteLetter,
  forgotPassword,
  changePassword,
  sendForgotPasswordEmail,
  resetForgotPassword,
  verifyEmail,
  createVerifyEmail,
  sendVerifyEmail,
  getAllJobs,
  getAllUsers,
  getCurrentUserLetters,
  createLetter,
  updateLetter,
  getCurrentUserResumes,
  createResume,
  deleteResume,
  updateResume
}

export default Queries
