import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

import {
  createBrowserRouter,
  RouterProvider,
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


import { action as destroyAction } from './routes/destroy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'signup',
    element: <SignUp />
  },
    {
    path: 'pricing',
    element: <Pricing />
  },
  {
    path: 'faqs',
    element: <FaqS />
  },
  {
    path: 'dashboard',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
      {
        index: true,
        element: <Index />
      },{
        path: 'settings',
        element: <Settings />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'employers',
        element: <Employers />
      },
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
            {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <NavBar navigation={navigation} /> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
