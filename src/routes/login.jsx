import { useEffect, useState, Fragment } from 'react'
import { Form, redirect, useNavigate, Link, useLoaderData, Navigate } from 'react-router-dom';
import { getContacts } from '../contacts';
import Queries from '../api/queries'
import setAuthToken from '../utilities/setAuthToken';
import { userState } from '../main'
import Spinner from '../components/spinner';
// import jwt from 'jsonwebtoken';

// export async function action({ request }) {
//   const formData = await request.formData();
//   const updates = Object.fromEntries(formData);
//   await Queries.login(updates)
//   return redirect('/dashboard')
// }

export default function Login() {
  const { user, setUser } = userState()
  const [loading, setLoading] = useState(false);
  const [state, setUserState] = useState({
      username: '',
      password: '',
      // rememberPassword: false
  })
  const onChange = e =>
    setUserState(
      { ...state, [e.target.name]: e.target.value }
    );
  
  // const onCheckboxChange = e =>
  //   setUserState({ ...state, rememberPassword: !state.rememberPassword });

  //   useEffect(() => {
  //     if (state.rememberCredentials) {
  //       const storedCredentials = localStorage.getItem('rememberedCredentials');
  //       if (storedCredentials) {
  //         const { username, password } = JSON.parse(storedCredentials);
  //         setUserState(prevState => ({ ...prevState, username, password }));
  //       }
  //     }
  //   }, [state.rememberCredentials]);

  const navigate = useNavigate()
  const onLogin = async () => {
    setLoading(true)
    const user = JSON.parse(localStorage.getItem('store'))
    await Queries.login(state)
    setLoading(false)
    await setUser({...user, isAuthenticated: true, showToast: true, toastMessage: 'You have logged in successfully.'})

    // fix this remember password
    
    // if (state.rememberCredentials) {
    //   const { username, password } = state;
    //   const storedCredentials = JSON.stringify({ username, password });
    //   localStorage.setItem('rememberedCredentials', storedCredentials);
    // } else {
    //   localStorage.removeItem('rememberedCredentials');
    // }

    return navigate('/dashboard')
  }

  const isAuthenticated = user.isAuthenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Fragment>
          {/* <LoginGithub
            clientId={clientId}
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            redirectUrl={'http://localhost:5173/login/github/authorized'}
          /> */}
          <div className="relative">
    {/* <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
<div className="blur-[106px] h-32 bg-gradient-to-br from-cyan-800 to-purple-800 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-800 to-sky-600 dark:to-indigo-600"></div>
    </div> */}
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative mt-60 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
          <label className="block">
            <h1 className='text-4xl font-bold tracking-tight mb-2 text-gray-900'>Login</h1>
            <span className="block text-sm font-medium text-slate-700">Dont have an account? <Link className='text-indigo-500' to='/signup'>Register</Link></span>
          </label>
            {loading ?     <div className="flex justify-center items-center mt-10">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
            :
                <div className="mt-10 flex flex-wrap justify-center gap-y-4 gap-x-6">
          <Form method="post" id="login-form">
            <label className="block">
              <span className="block text-left text-sm font-medium text-slate-700">Username</span>
              <input
                placeholder="Username"
                aria-label="Username"
                type="username"
                name="username"
                value={userState.username}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "
              />
            </label>
            <label className="block mt-2">
              <span className="block text-left text-sm font-medium text-slate-700">Password</span>
              <input
                placeholder="Password"
                aria-label="Password"
                type="password"
                name="password"
                value={userState.password}
                onChange={onChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "
              />
              {/* <input
                type="text"
                tabIndex="-1"
                autoComplete="new-password"
                className="opacity-0 absolute h-0 w-0"
              /> */}

      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
        <label className="mt-3">
          <input
            type="checkbox"
            name="rememberPassword"
            checked={state.rememberPassword}
            onChange={onCheckboxChange}
            className='mr-2 text-indigo-500'
          />
          <span className='text-indigo-500 text-sm font-medium'>Remember Password</span>
        </label>
      </div> */}

            </label>
            <label className="block">
              <div className="mt-3 mb-4">
                <button type="button" onClick={onLogin} className="bg-indigo-500 text-gray-100 pt-2 pb-2 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                    Log In
                                </button>
                            </div>
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">Cant rememeber password? <Link className='text-indigo-500' to='/forgot-password'>Recover it.</Link></span>
            </label> 
          </Form>                  
                </div>}
            </div>
        </div>
    </div>
</div>
    </Fragment>
  );
}