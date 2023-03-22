import client from './client'

export default {
  home: {
    landingPage: () => client.get('/').then((res) => res.data),
  },
  user: {
    login: (credentials) => client.post('/login', { credentials }).then((res) => res.data.user),
    logout: () => client.post('/logout').then((res) => res.data.user),
    signup: (user) => client.post('/register', { user }).then((res) => res.data.user),
    forgotPassword: (user) =>
      client.post('/forgot-password', { user }).then((res) => res.data.user),
  },
}
