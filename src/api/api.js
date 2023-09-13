import client from './client'
import clientEmail from './clientEmail'

export default {
  home: {
    landingPage: () => client.get('/api').then((res) => res.data),
    helloEmail: () => clientEmail.get('/api/hello').then((res) => res.data),
  },
  user: {
    login: (credentials) => client.post('/api/login', { credentials }).then((res) => res.data),
    logout: () => client.post('/api/logout'),
    signup: (user) => client.post('/api/register', { user }).then((res) => res.data),
    changePassword: (passwords) => client.put('/api/change-password', {passwords}).then((res) => res.data),
    forgotPassword: (email) =>
      client.post('/api/reset-password', { email }).then((res) => res.data),
    allUsers: () => client.get('/admin/users').then((res) => res.data)
  },
  jobs: {
    jobsUser: (id) => client.get(`/api/jobs/${id}`, { id }).then((res) => res.data),
    jobCreate: (job) => client.post(`/api/jobs`, { job }).then((res) => res.data),
    jobUpdate: (job) => client.put(`/api/job/${job.job_id}`, { job }).then((res) => res.data),
    jobDelete: (id) => client.delete(`/api/job/${id}`, { id }).then((res) => res.data),
    allJobs: () => client.get('/admin/jobs').then((res) => res.data)
  },
  letters: {
    lettersUser: (id) => client.get(`/api/letters/${id}`, { id }).then((res) => res.data),
    letterCreate: (letter) => client.post(`/api/letters`, { letter }).then((res) => res.data),
    letterDelete: (id) => client.delete(`/api/letter/${id}`, { id }).then((res) => res.data),
  },
  email: {
    createVerifyEmail: (email) =>
      client.post('/api/create-verify-email', {email}).then((res) => res.data),
    sendVerifyEmail: (email) =>
      clientEmail.post('/api/welcomeemail', { email }).then((res) => res.data),
    verifyEmail: (info) =>
      client.post(`/api/verify-email/${info.token}`, {info}).then((res) => res.data),
    sendForgotPasswordEmail: (email) =>
      clientEmail.post('/api/resetpassword', { email }).then((res) => res.data),
    resetForgotPassword: (info) =>
      client.put(`/api/reset-password/${info.token}`, {info}).then((res) => res.data)
  }
}
