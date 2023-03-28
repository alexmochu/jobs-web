import { Fragment } from 'react'
import { Link, Form } from 'react-router-dom';

export default function ForgotPassword() {
  return (
    <Fragment>
   <div className="relative" id="home">
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
<div className="blur-[106px] h-32 bg-gradient-to-br from-cyan-800 to-purple-800 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-800 to-sky-600 dark:to-indigo-600"></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
          <label className="block">
            <h1 className='text-4xl font-bold tracking-tight mb-2 text-gray-900'>Recover password</h1>
          </label>
                <div className="mt-10 flex flex-wrap justify-center gap-y-4 gap-x-6">
          <Form method="post" id="login-form">
            <label className="block">
              <span className="block text-left text-sm font-medium text-slate-700">Email</span>
              <input
                placeholder="Email"
                aria-label="Email Address"
                type="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                      invalid:border-pink-500 invalid:text-pink-600
                      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                    "
              />
            </label>
            <label className="block">
              <div className="mt-5 mb-4">
                <button type="submit" className="bg-indigo-500 text-gray-100 pt-2 pb-2 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg">
                                    Submit
                                </button>
                            </div>
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-slate-700">Rememeber password? <Link className='text-indigo-500' to='/login'>Login</Link></span>
            </label> 
          </Form>                  
                </div>
            </div>
        </div>
    </div>
</div>
    </Fragment>
  );
}