import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Routes,
  Route
} from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact';
import EditContact, {
  action as editAction,
} from './routes/edit';


import Index from './routes/index.jsx'
import Settings from './routes/settings.jsx'
import Profile from './routes/profile.jsx'
import Login from './routes/login.jsx'
import SignUp from './routes/signup.jsx'
import Pricing from './routes/pricing'
import FaqS from './routes/faqs.jsx'
import Employers from './routes/employers'
import NavBar from './components/navBar'
import ForgotPassword from './routes/forgot-password.jsx'
import ProtectedRoute from './routes/protectedRoute'
import { navigation as Navs}  from './constants'
import Dashboard from './routes/dashboard.jsx'
import Jobs from './routes/jobs.jsx'


import { action as destroyAction } from './routes/destroy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
    {
    index: true,
    element: <App />
  },
    {
    path: '/jobs',
    element: <Jobs />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
  {
    path: 'employers',
    element: <Employers />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
  {
    path: 'profile',
    element: <ProtectedRoute><Profile /> </ProtectedRoute>,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
   {
    path: 'pricing',
    element: <Pricing />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
  {
    path: 'faqs',
    element: <FaqS />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
    {
    path: 'dashboard',
    element: <ProtectedRoute><Dashboard /> </ProtectedRoute>,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
  {
    path: 'signup',
    element: <SignUp />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },

    {
    path: 'forgot-password',
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
 
  {
    path: 'settings',
    element: <ProtectedRoute><Settings /> </ProtectedRoute>,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
  },
]
  },


]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <NavBar navigation={Navs} /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
