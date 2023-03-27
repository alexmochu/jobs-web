import { useState, Fragment } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from '../components/navBar';
import { navigation as Navs}  from '../constants'
import Queries from '../api/queries'
import { userState } from '../main'

export async function loader(){
  const response = await Queries.landingPage()
  return response
}

export default function Root() {
  const landingPage = useLoaderData()
  const { value } = userState()
  const isAuthenticated = value.isAuthenticated
  return (
    <Fragment>
      <NavBar navigation={Navs} auth={isAuthenticated}/>
      <main>
        <div className='bg-white'>
              <div id="detail">
                <Outlet />
              </div>
        </div>
      </main>
    </Fragment>
  );
}