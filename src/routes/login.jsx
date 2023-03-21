import { useEffect, useState, Fragment } from 'react'
import { Outlet, Link, useLoaderData, useSubmit, Form, redirect, NavLink, useNavigation } from 'react-router-dom';
import { getContacts, createContact } from '../contacts';
import NavBar from '../components/navBar';
import { navigation as Navs}  from '../constants'

// import LoginGithub from 'react-login-github';
import LoginGithub from 'react-login-github';
import axios from 'axios';
import cors from 'cors';

const clientId = 'f4cdea3da9b80d0c0b78';
// client secret kejani jobs secret = 17c99cdfe149d1ce11a936276e24ee5799df5a15
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

const url = 'http://127.0.0.1:5000'

export const client = axios.create({
    baseURL: url
})

export default function Login() {
    // Enable CORS for all requests
    axios.defaults.withCredentials = true;

    const [message, setMessage] = useState('');
    const [token, setToken] = useState(localStorage.getItem('header-access-token'));
    // const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    // const [query, setQuery] = useState(q)
    const submit = useSubmit()

      const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      'q'
    );
  
  // UNCOMMENT THE 1ST USEEFFECT
  //     useEffect(() => {
  //   document.getElementById('q').value = q;
  // }, [q]);
      // useEffect(() => {
      //   setQuery(q)
      // }, [q]);

  const handleLoginSuccess = async (response) => {
    const token = response.code;
    localStorage.setItem('header-access-token', token);
    setToken(token);
    const res = await axios.get
    (`${url}/login/github`, {
      withCredentials: false,
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'

      }
    });
    console.log('we made it', res)
    setMessage(response.data.message);
    window.opener.postMessage({ type: 'login-success', data: { token } }, window.origin);
    window.close();
  };

  const handleAuthMessage = (event) => {
  if (event.origin !== `${url}`) return;
  if (event.data.type === 'login-success') {
    const { token } = event.data.data;
    setToken(token);
  }
};

useEffect(() => {
  window.addEventListener('message', handleAuthMessage);
  return () => window.removeEventListener('message', handleAuthMessage);
}, []);

  const handleLoginFailure = (response) => {
    console.error(response);
  };

    const handleLogin = async () => {
    console.log('start')
    await axios.get(`${url}/login`, {
      withCredentials: false,
      headers: { 
        'Content-Type': 'application/json',
        'header-access-token': token,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'

      }
    });
    console.log('stop')
    localStorage.setItem('header-access-token')
    setToken(null);
    setMessage('');
  };

  const handleLogout = async () => {
    console.log('start')
    let headerAccessToken = ''
    headerAccessToken = localStorage.getItem('header-access-token');
    await axios.get(`${url}/logout`, {
      withCredentials: false,
      headers: { 
        'Content-Type': 'application/json',
        'header-access-token': headerAccessToken,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'

      }
    });
    console.log('stop')
    localStorage.removeItem('header-access-token');
    setToken(null);
    setMessage('');
  };
  console.log('token', token)
  return (
    <Fragment>
      {/* <NavBar navigation={Navs} /> */}
      <div>
        {token ? (
        <>
          <p>You are logged in.</p>
          <p>The message: {message}</p>
          <button onClick={handleLogout}>Login out</button>
        </>
        ) : (
        <>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900'>Login</h1>        
          <Form method='post'>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Dont have an account? <Link to='/signup'>Register</Link></span>
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Username</span>
            <input type="text" value="tboneee" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label className="block">
            <span className="block text-sm font-medium text-slate-700">Password</span>
            <input type="text" value="tboneee" disabled className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label className="block">
            <button type='submit' className="block text-sm font-medium text-slate-700">Login</button>
            <Link to='/forgot-password'>Forgot password?</Link>
          </label>
        </Form>
          {/* <LoginGithub
            clientId={clientId}
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            redirectUrl={'http://localhost:5173/login/github/authorized'}
          /> */}
          {message && <p>{message}</p>}
        </>
        )}
      </div>
    </Fragment>


    // <>
    // <Fragment>
    //   <NavBar navigation={Navs} />
    //   <main>
    //     <div className='bg-white'>
    //       <div>
    //         {/* Mobile filter dialog */}
    //         {/* <MobileForm
    //           filters={filters}
    //           mobileFiltersOpen={mobileFiltersOpen}
    //           setMobileFiltersOpen={setMobileFiltersOpen}
    //         /> */}
    //         <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
    //           <div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
    //             <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
    //              Settings
    //             </h1>
    //             {/* <Header sortOptions={sortOptions} setMobileFiltersOpen={setMobileFiltersOpen} /> */}
    //           </div>
    //           <section aria-labelledby='products-heading' className='pt-6 pb-24'>
    //             <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
    //               {/* Filters */}
    //               {/* <Form filters={filters} /> */}
    //               {/* Product grid */}


    //   <div id="sidebar">
    //       <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
    //       <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    //           {contacts.length ? (
    //           <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
    //                           {contacts.map((contact) => (

    //             <li  key={contact.id}>
    //               <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{contact.name}</a>
    //             </li>
    //               ))}
    //           </ul>  ) : (
    //         <p>
    //           <i>No contacts</i>
    //         </p>
    //       )}
    //       </div>
    //             <nav>

    //       {contacts.length ? (
    //         <ul>
    //           {contacts.map((contact) => (
    //             <li key={contact.id}>
    //                                   <NavLink
    //                 to={`contacts/${contact.id}`}
    //                 className={({ isActive, isPending }) =>
    //                   isActive
    //                     ? 'active'
    //                     : isPending
    //                     ? 'pending'
    //                     : ''
    //                 }
    //               >
    //               <Link to={`contacts/${contact.id}`}>
    //                 {contact.first || contact.last ? (
    //                   <>
    //                     {contact.first} {contact.last}
    //                   </>
    //                 ) : (
    //                   <i>No Name</i>
    //                 )}{' '}
    //                 {contact.favorite && <span>★</span>}
    //               </Link></NavLink>
    //             </li>
    //           ))}
    //         </ul>
    //       ) : (
    //         <p>
    //           <i>No contacts</i>
    //         </p>
    //       )}
    //     </nav>
    //     <div>
    //       <Form id="search-form" role="search">
    //         <input
    //           id="q"
    //                         className={searching ? 'loading' : ''}
    //           aria-label="Search contacts"
    //           placeholder="Search"
    //           type="search"
    //           name="q"
    //           defaultValue={q}
    //           // value={query}
    //           onChange={(e) => {
    //                             const isFirstSearch = q == null;
    //             submit(e.currentTarget.form, {
    //               replace: !isFirstSearch,
    //             });
    //             // setQuery(e.target.value)
    //           }}
    //         />
    //         <div
    //           id="search-spinner"
    //           aria-hidden
    //           hidden={!searching}
    //         />
    //         <div
    //           className="sr-only"
    //           aria-live="polite"
    //         ></div>
    //       </Form>
    //       <Form method="post">
    //         <button type="submit">New</button>
    //       </Form>
    //     </div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to={'contacts/1'}>Your Name</Link>
    //         </li>
    //         <li>
    //           <Link to={'contacts/2'}>Your Friend</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>


    //               <div className='lg:col-span-3'>
    //                 <div className='h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full'>
    //                   {/* <List plans={plans} selected={selected} setSelected={setSelected} jobs={jobs} /> */}
    //                         <div id="detail"         className={
    //       navigation.state === 'loading' ? 'loading' : ''
    //     }>
    //     <Outlet />
    //   </div>
    //                 </div>
    //                 {/* /End replace */}
    //               </div>
    //             </div>
    //           </section>
    //         </main>
    //       </div>
    //     </div>
    //   </main>
    // </Fragment>
    // </>
  );
}