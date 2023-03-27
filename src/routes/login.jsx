import { useEffect, useState, Fragment } from 'react'
import { Form, redirect, useNavigate, Link, useLoaderData, Navigate } from 'react-router-dom';
import { getContacts } from '../contacts';
import Queries from '../api/queries'
import setAuthToken from '../utilities/setAuthToken';
import { userState } from '../main'

// export async function action({ request }) {
//   const formData = await request.formData();
//   const updates = Object.fromEntries(formData);
//   await Queries.login(updates)
//   return redirect('/dashboard')
// }

export default function Login() {
  const { value, setValue } = userState()
  const [state, setUserState] = useState({
      username: '',
      password: ''
  })
  const onChange = e =>
    setUserState(
      { ...state, [e.target.name]: e.target.value }
    );
   
  const navigate = useNavigate()
  const onLogin = async () => {
    const user = JSON.parse(localStorage.getItem('store'))
    await Queries.login(state)
    await setValue({...user, isAuthenticated: true})
    return navigate('/dashboard')
  }

  return (
    <Fragment>
      <div>
        {/* {token ? (
        <>
          <p>You are logged in.</p>
          <p>The message: {message}</p>
          <button onClick={handleLogout}>Login out</button>
        </>
        ) : ( */}
        <>
          <label className="block">
            <button type='submit' className="block text-sm font-medium text-slate-700">Login</button>
            <span className="block text-sm font-medium text-slate-700">Dont have an account? <Link to='/signup'>Register</Link></span>
          </label>
          <Form method="post" id="login-form">
            <p>
              <span>Username</span>
              <input
                placeholder="Username"
                aria-label="Username"
                type="username"
                name="username"
                value={userState.username}
                onChange={onChange}
              />
            </p>
            <p>
              <span>Password</span>
              <input
                placeholder="Password"
                aria-label="Password"
                type="password"
                name="password"
                value={userState.password}
                onChange={onChange}
              />
            </p>
            <p>
              <button type="button" onClick={onLogin}>Save</button>
              <button type="button">Cancel</button>
            </p>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">Cant rememeber password? <Link to='/forgot-password'>Recover it.</Link></span>
            </label> 
          </Form>
          {/* <LoginGithub
            clientId={clientId}
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            redirectUrl={'http://localhost:5173/login/github/authorized'}
          /> */}
          {/* {message && <p>{message}</p>} */}
        </>
        {/* )} */}
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