import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Queries from '../api/queries'
import AppHeader from '../landingpage/AppHeader'
import Toast from '../landingpage/Toast'
import { useQuery } from 'react-query'; // Import useQuery from react-query
import Spinner from '../components/spinner'

export async function loader() {
  const response = await Queries.landingPage()
  return response
}

export default function Root() {
  const { data, isLoading, isError, error } = useQuery('landingPage', loader);

  const location = useLocation()
  const home = location.pathname === '/'
  const faqs = location.pathname === '/FAQs'
  const login = location.pathname === '/login'
  const pricing = location.pathname === '/pricing'
  const signup = location.pathname === '/signup'
  const forgot = location.pathname === '/forgot-password'
  const terms = location.pathname === '/terms-conditions'
  const privacy = location.pathname === '/privacy-policy'
  const cookie = location.pathname === '/cookie-policy'
  const contact = location.pathname === '/contact-us'
  const about = location.pathname === '/about'
  const forgotPassword = location.pathname.startsWith('/forgot-password/');
  const verifyEmail = location.pathname.startsWith('/verify-email/')

  return (
    <body className='bg-white dark:bg-gray-900'>
      <Toast />
      {home | faqs | login | signup | forgot | terms | privacy | contact | about | forgotPassword | verifyEmail | pricing | cookie ? <AppHeader /> : null}
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <main>
          <Outlet />
        </main>
      )}
    </body>
  )
}
