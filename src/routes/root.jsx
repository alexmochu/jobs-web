import { useEffect, useState } from 'react';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import Queries from '../api/queries'
import AppHeader from '../landingpage/AppHeader';
import Toast from '../landingpage/Toast'
import Spinner from '../components/spinner'

export async function loader(){
  const response = await Queries.landingPage()
  return response
}

export default function Root() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await loader();
        setData(response);
        console.log(response)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const location = useLocation();
  const home = location.pathname === '/';
  const faqs = location.pathname === '/FAQs'
  const login = location.pathname === '/login'
  const signup = location.pathname === '/signup'
  const forgot = location.pathname === '/forgot-password'
  const terms = location.pathname === '/terms-conditions'
  const privacy = location.pathname === '/privacy-policy'
  const contact = location.pathname === '/contact-us'

  return (
    <body className='bg-white dark:bg-gray-900'>
      <Toast />
      {home | faqs | login | signup | forgot | terms | privacy | contact ? <AppHeader /> : null}
      {loading ? <Spinner/> : error ? <div>Error: {error.message}</div> : (
      <main>
        <Outlet />
      </main> )}
    </body>
  );
}