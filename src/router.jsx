import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Routes,
  Route
} from 'react-router-dom';
import Root, { loader as rootLoader } from './routes/root';
import ErrorPage from './error-page';
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from './routes/contact';
import EditContact, {
  action as editAction,
} from './routes/edit';

import App from './routes/App'
import Index from './routes/index.jsx'
import Settings from './routes/settings.jsx'
import Profile from './routes/profile.jsx'
import Login from './routes/login.jsx'
import SignUp, { action as signupAction } from './routes/signup.jsx'
import Pricing from './routes/pricing'
import FaqS from './routes/faqs.jsx'
import Employers from './routes/employers'
import NavBar from './components/navBar'
import ForgotPassword from './routes/forgot-password.jsx'
import ProtectedRoute from './routes/protectedRoute'
import { navigation as Navs}  from './constants'
import Dashboard from './routes/dashboard.jsx'
import Jobs from './routes/jobs.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    // action: rootAction,
    children: [
    {
    index: true,
    element: <App />
  },
    {
    path: '/jobs',
    element: <Jobs />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
    // action: loginAction,
  },
  // {
  //   path: 'employers',
  //   element: <Employers />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: 'profile',
    element: <ProtectedRoute><Profile /> </ProtectedRoute>,
    errorElement: <ErrorPage />,
  },
  //  {
  //   path: 'pricing',
  //   element: <Pricing />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: 'faqs',
    element: <FaqS />,
    errorElement: <ErrorPage />,
  },
    {
    path: 'dashboard',
    element: <ProtectedRoute><Dashboard /> </ProtectedRoute>,
    errorElement: <ErrorPage />,
  },
  {
    path: 'signup',
    element: <SignUp />,
    errorElement: <ErrorPage />,
    action: signupAction
  },

    {
    path: 'forgot-password',
    element: <ForgotPassword />,
    errorElement: <ErrorPage />,
  },
 
  {
    path: 'settings',
    element: <ProtectedRoute><Settings /> </ProtectedRoute>,
    errorElement: <ErrorPage />,
  },
]
  },
]);

export default router;
