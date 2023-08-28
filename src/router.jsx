import {
  createBrowserRouter,
  // RouterProvider,
  // createRoutesFromElements,
  // Routes,
  // Route,
} from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
// import Contact, { loader as contactLoader, action as contactAction } from './routes/contact'
// import EditContact, { action as editAction } from './routes/edit'

import App from './routes/App'
// import Index from './routes/index.jsx'
import Settings from './routes/settings.jsx'
import AllJobs from './routes/allJobs'
import Users from './routes/users'
import Profile from './routes/profile.jsx'
import QA from './routes/qa.jsx'
import CoverLetters from './routes/coverletter.jsx'
import CoverLetterBuilder from './routes/coverletterbuilder.jsx'
import ResumeBuilder from './routes/resumeBuilder.jsx'
import Resumes from './routes/resumes.jsx'
import Login from './routes/login.jsx'
import SignUp from './routes/signup.jsx'
// import Pricing from './routes/pricing'
import FaqS from './routes/faqs.jsx'
import PrivacyPolicy from './routes/privacyPolicy.jsx'
import ContactUs from './routes/contactUs.jsx'
import TermsConditions from './routes/termsConditions.jsx'
// import Employers from './routes/employers'
import ForgotPassword from './routes/forgot-password.jsx'
import ForgotPasswordVerify from './routes/forgot-password-verify.jsx'
import ProtectedRoute from './routes/protectedRoute'
// import { navigation as Navs } from './constants'
import Dashboard from './routes/dashboard.jsx'
import RootDashboard from './routes/dashboardRoot.jsx'
// import Jobs from './routes/jobs.jsx'
import JobSearch from './routes/jobsSearch'
import JobTracker from './routes/jobsTracker'
import ChangePassword from './routes/changePassword'
import ConfirmEmail from './routes/confrimEmail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      // {
      //   path: '/jobs',
      //   element: <Jobs />,
      //   errorElement: <ErrorPage />,
      // },
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
      // {
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
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'terms-conditions',
        element: <TermsConditions />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'contact-us',
        element: <ContactUs />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <RootDashboard />{' '}
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <ProtectedRoute>
                <Dashboard />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'profile',
            element: (
              <ProtectedRoute>
                <Profile />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'job-search',
            element: (
              <ProtectedRoute>
                <JobSearch />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'job-tracker',
            element: (
              <ProtectedRoute>
                <JobTracker />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'settings',
            element: (
              <ProtectedRoute>
                <Settings />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'qa',
            element: (
              <ProtectedRoute>
                <QA />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'cover-letters',
            element: (
              <ProtectedRoute>
                <CoverLetters />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'cover-letter-builder',
            element: (
              <ProtectedRoute>
                <CoverLetterBuilder />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'resume-builder',
            element: (
              <ProtectedRoute>
                <ResumeBuilder />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'resumes',
            element: (
              <ProtectedRoute>
                <Resumes />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'all-jobs',
            element: (
              <ProtectedRoute>
                <AllJobs />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: 'users',
            element: (
              <ProtectedRoute>
                <Users />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
          {
          path: 'change-password',
            element: (
              <ProtectedRoute>
                <ChangePassword />{' '}
              </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: 'signup',
        element: <SignUp />,
        errorElement: <ErrorPage />,
        // action: signupAction
      },

      {
        path: 'forgot-password',
        element: <ForgotPassword />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'forgot-password/:id',
        element: <ForgotPasswordVerify />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'verify-email/:id',
        element: <ConfirmEmail />,
        errorElement: <ErrorPage />,
      },
    ],
  },
])

export default router
