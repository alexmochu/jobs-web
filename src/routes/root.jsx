import { useState, Fragment } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from '../components/navBar';
import { navigation as Navs}  from '../constants'
import Queries from '../api/queries'
import { userState } from '../main'
import AppHeader from '../landingpage/AppHeader';

export async function loader(){
  const response = await Queries.landingPage()
  return response
}

export default function Root() {
  const landingPage = useLoaderData()
  const { value } = userState()
  const isAuthenticated = value.isAuthenticated
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