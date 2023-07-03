import { Fragment, useState } from 'react'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import { featureFlag } from '../../config'
import { userState } from '../main'
import Queries from '../api/queries'
import Spinner from '../components/spinner'

export default function Dashboard() {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { resume, qa } = featureFlag

  const { user, setUser } = userState()

  const username = user.username

  const navigate = useNavigate()

  const onLogout = async () => {
    setLoading(true)
    await Queries.logout()
    setLoading(false)
    await setUser({
      ...user,
      username: '',
      isAuthenticated: false,
      showToast: true,
      toastMessage: 'You have logged out successfully.',
    })
    return navigate('/login')
  }
  return (
    <Fragment>
      {/* <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="#" className="flex ml-2 md:mr-24">
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Kejani Jobs</span>
        </a>
      </div>
      <div className="flex items-center">
          <div className="flex items-center ml-3">
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
              </button>
            </div>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav> */}

      <aside
        id='logo-sidebar'
        className={`fixed overflow-y top-0 left-0 z-40 ${
          isOpen ? 'w-16' : 'w-64'
        } h-screen pt-3 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label='Sidebar'
      >
        <div className='h-full px-3 pb-4 overflow-y bg-white dark:bg-gray-800'>
          <div className='relative z-19 w-full flex justify-between lg:w-max md:px-0 mb-10'>
            {isOpen ? (
              <div
                onClick={() => setIsOpen(false)}
                className='relative flex items-center lg:hidden max-h-10 mr-11 -ml-3'
              >
                <label
                  role='button'
                  htmlFor='toggle_nav'
                  aria-label='humburger'
                  id='hamburger'
                  className='relative  p-6 -mr-6'
                >
                  <div
                    aria-hidden='true'
                    id='line'
                    className='m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300'
                  ></div>
                  <div
                    aria-hidden='true'
                    id='line2'
                    className='m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300'
                  ></div>
                  <div
                    aria-hidden='true'
                    id='line2'
                    className='m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300'
                  ></div>
                </label>
              </div>
            ) : null}
            {!isOpen ? (
              <Link to='/' aria-label='logo' className='flex space-x-2 items-center ml-1'>
                <span className='text-4xl font-bold text-gray-900 dark:text-white'>Kg Jobs</span>
              </Link>
            ) : null}
          </div>

          <ul className='space-y-2 font-medium'>
            <Link
              key={'dashboard'}
              to={'/dashboard'}
              aria-current={'page'}
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              {/* <svg xmlns="http://www.w3.org/2000/svg"
             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" 
             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M3 12h2c.35 0 .677-.084.964-.23l1.722-1.151a1 1 0 0 1 1.282.15L11 12h2c.35 0 .677.084.964.23l1.722 1.151a1 1 0 0 1 1.282-.15L19 12h2"></path>
              <path d="M3 6h18M3 18h18"></path>
            </svg> */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
              >
                <path d='M3 3h18v4H3zm0 10h18v8H3zm6-7h6M9 9h6M9 15h6'></path>
              </svg>
              {!isOpen ? <span className='ml-3'>Dashboard</span> : null}
            </Link>
            <Link
              key={'jobs'}
              to={'/dashboard/jobs'}
              aria-current={'page'}
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
              >
                <path d='M13 3v8h8'></path>
                <path d='M21 3h-8v8'></path>
                <path d='M3 13h8v8'></path>
                <path d='M3 21v-8H3'></path>
              </svg>
              {!isOpen ? <span className='flex-1 ml-3 whitespace-nowrap'>Jobs</span> : null}
            </Link>
            <Link
              key={'cover'}
              to={'/dashboard/cover-letter'}
              aria-current={'page'}
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
              >
                <path d='M19 4h-2V2H7v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM7 10h10M7 14h4M12 2v4'></path>
              </svg>
              {!isOpen ? <span className='flex-1 ml-3 whitespace-nowrap'>Cover Letter</span> : null}
            </Link>
            {resume ? (
              <Link
                key={'resume-builder'}
                to={'/dashboard/resume'}
                aria-current={'page'}
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z'></path>
                  <path d='M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z'></path>
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Resume Builder</span>
              </Link>
            ) : null}
            {qa ? (
              <Link
                key={'qa'}
                to={'/dashboard/qa'}
                aria-current={'page'}
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              >
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
                </svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Q&A Room</span>
              </Link>
            ) : null}
            <hr className='pb-6' />
            <Link
              key={'profile'}
              to={'/dashboard/profile'}
              aria-current={'page'}
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
              >
                <path d='M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z'></path>
                <path d='M12 14c-4.97 0-9 4.03-9 9h18c0-4.97-4.03-9-9-9z'></path>
              </svg>
              {!isOpen ? <span className='flex-1 ml-3 whitespace-nowrap'>Profile</span> : null}
            </Link>
            <Link
              key={'settings'}
              to={'/dashboard/settings'}
              aria-current={'page'}
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
              >
                <path d='M12 20h9'></path>
                <path d='M19 10h2'></path>
                <path d='M19 6h2'></path>
                <path d='M19 14h2'></path>
                <path d='M5 20H3'></path>
                <path d='M5 6H3'></path>
                <path d='M5 14H3'></path>
                <path d='M12 4v16'></path>
              </svg>
              {!isOpen ? <span className='flex-1 ml-3 whitespace-nowrap'>Settings</span> : null}
            </Link>
            <div
              onClick={() => onLogout()}
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='w-6 h-6'
              >
                <path d='M12 2L2 12H10M22 12H12'></path>
                <path d='M15 22h6V2H15'></path>
                <path d='M8 8L4 12L8 16'></path>
              </svg>
              {!isOpen ? <span className='flex-1 ml-3 whitespace-nowrap'>Logout</span> : null}
            </div>
            <div
              // onClick={() => setIsOpen(true)}
              className={`fixed bottom-0 ${
                isOpen ? 'w-8 ml-0' : 'w-56 ml-1'
              }  pt-3 z-50 border-t border-gray-200 pb-4 flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
            >
              <span
                onClick={() => {isOpen && setIsOpen(false)}}
                className='h-8 w-8 pl-2 pt-1 rounded-full border border-black'
              >
                {/* <img
                  className='h-8 w-8 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                /> */}
                {username.charAt(0).toUpperCase()}
              </span>
              {!isOpen ? (
                <span className='flex-1 whitespace-nowrap w-6 ml-[10px]'>@{username}</span>
              ) : null}
              {!isOpen ? (
                <svg
                  aria-hidden='true'
                  className='flex-shrink-0 w-6 h-6 scale-x-[-1] text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  fill='currentColor'
                  onClick={() => setIsOpen(true)}
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              ) : null}
            </div>
          </ul>
        </div>
      </aside>

      <div className={`p-4 ${isOpen ? 'sm:ml-16' : 'sm:ml-64'}`}>
        {loading ? (
          <Spinner />
        ) : (
          <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-2'>
            <Outlet />
          </div>
        )}
      </div>
    </Fragment>
  )
}
