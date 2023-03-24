import { Fragment } from 'react'
import { Link, Form, redirect} from 'react-router-dom';
import api from '../api/api'

export async function action({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await api.user.signup(updates);
  return redirect('/login')
}

export default function SignUp() {
  return (
    <>
    <Fragment>
      <main>
        <div className='bg-white'>
          <div>
            <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
                 Signup
                </h1>
                <Form method='post' id='signup-form'>
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Email</span>
                    <input placeholder="Email" aria-label='Email Address' type="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Username</span>
                    <input placeholder="Username" aria-label='Username' type="username" name="username" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-slate-700">Password</span>
                    <input placeholder='Password' aria-label='Password' type="password" name="password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "/>
                  </label>
                  <label className="block">
                    <button type='submit' className="block text-sm font-medium text-slate-700">Signup</button>
                    <span className="block text-sm font-medium text-slate-700">Already have an account? <Link to='/login'>Login</Link></span>
                  </label>
                </Form>
              </div>
            </main>
          </div>
        </div>
      </main>
    </Fragment>
    </>
  );
}