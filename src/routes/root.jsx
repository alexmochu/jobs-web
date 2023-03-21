import { useEffect, useState, Fragment } from 'react'
import { Outlet, useLoaderData, useSubmit, redirect, useNavigation } from 'react-router-dom';
import { getContacts, createContact } from '../contacts';
import NavBar from '../components/navBar';
import { navigation as Navs}  from '../constants'

export async function loader({ request }) {
  const url = new URL(request.url)
  const q = url.searchParams.get('q')
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export default function Root() {
  const [auth, setAuth] = useState(!true)
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