import { Outlet, useLoaderData } from 'react-router-dom';
import Queries from '../api/queries'
import AppHeader from '../landingpage/AppHeader';

export async function loader(){
  const response = await Queries.landingPage()
  return response
}

export default function Root() {

  return (
    <body className='bg-white dark:bg-gray-900'>
      {/* <NavBar navigation={Navs} auth={isAuthenticated}/> */}
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </body>
  );
}