import { useState, Fragment } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom';
import NavBar from '../components/navBar';
import { navigation as Navs}  from '../constants'
import api from '../api'

export async function loader(){
  const req = await api.home.landingPage()
  return req
}

export default function Root() {
  const landingPage = useLoaderData()
  console.log(landingPage)
  const [auth, setAuth] = useState(true)
  return (
    <>
    <Fragment>
      <NavBar navigation={Navs} auth={auth} setAuth={setAuth}/>
      <main>
        <div className='bg-white'>
              <div id="detail">
                <Outlet />
              </div>
        </div>
      </main>
    </Fragment>
    </>
  );
}