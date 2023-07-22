import client from './client'

export default {
  home: {
    landingPage: () => client.get('/api').then((res) => res.data),
  },
  user: {
    login: (credentials) => client.post('/api/login', { credentials }).then((res) => res.data),
    logout: () => client.post('/api/logout'),
    signup: (user) => client.post('/api/register', { user }).then((res) => res.data.user),
    forgotPassword: (user) =>
      client.post('/forgot-password', { user }).then((res) => res.data.user),
  },
  jobs: {
    jobsUser: (username) => client.get(`/api/jobs/${username}`, { username }).then((res) => res.data),
    jobCreate: (job) => client.post(`/api/jobs`, { job }).then((res) => res.data),
    jobUpdate: (job) => client.put(`/api/job/${job.job_id}`, { job }).then((res) => res.data),
    jobDelete: (id) => client.delete(`/api/job/${id}`, { id }).then((res) => res.data)
  }
}
