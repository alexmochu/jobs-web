import { Link, useNavigate } from 'react-router-dom'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
import { userState } from '../main'
// import { classNames } from '../components/common'
// import Queries from '../api/queries'
import { featureFlag } from '../../config'

const AppHeader = () => {
  const { user } = userState()

  const navigate = useNavigate()

  const { isAuthenticated } = user
  const { pricing, publicJobs } = featureFlag
  return (
    <header>
      <nav className='fixed top-0 z-40 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        {/* <nav className="z-10 w-full relative"> */}
        <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
          <div className='flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative'>
            <input
              aria-hidden='true'
              type='checkbox'
              name='toggle_nav'
              id='toggle_nav'
              className='hidden peer'
            />
            <div className='relative z-19 w-full flex justify-between lg:w-max md:px-0'>
              <Link to='/' aria-label='logo' className='flex space-x-2 items-center'>
                <span className='text-2xl font-bold text-gray-900 dark:text-white'>Kg Jobs</span>
              </Link>
            </div>
            <div
              aria-hidden='true'
              className='fixed z-10 inset-0 h-screen w-screen backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70'
            ></div>
            <div
              className='flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none dark:bg-gray-800 dark:border-gray-700'
            >
              <div className='text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0'>
                <ul className='tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0'>
                  {publicJobs ? (
                    <li>
                      <Link to='/jobs' className='block md:px-4 transition hover:text-primary'>
                        <span>Jobs</span>
                      </Link>
                    </li>
                  ) : null}
                  {pricing ? (
                    <li>
                      <Link to='/pricing' className='block md:px-4 transition hover:text-primary'>
                        <span>Pricing</span>
                      </Link>
                    </li>
                  ) : null}
                  <li>
                    <Link to='/FAQs' className='block dark:text-white md:px-4 transition hover:text-primary'>
                      <span>FAQs</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='mt-12 lg:mt-0 bg-indigo-500 rounded-3xl border'>
                {!isAuthenticated ? (
                  <Link
                    to={'/login'}
                    className='relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
                  >
                    <span className='relative text-sm font-semibold text-white'>
                      {'Get Started'}
                    </span>
                  </Link>
                ) : (
                  <Link
                    to={'/dashboard'}
                    className='relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max'
                  >
                    <span className='relative text-sm font-semibold text-white'>{'Dashboard'}</span>
                  </Link>
                )}
              </div>
              {/* {isAuthenticated ?
                    <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-8 w-8 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                </Menu>: null} */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader
{
  /* <style>
    #toggle_nav:checked ~ div #hamburger #line
    {
        @apply rotate-45 translate-y-1.5 
    }

    #toggle_nav:checked ~ div #hamburger #line2
    {
        @apply -rotate-45 -translate-y-1
    }
</style> */
}
