import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function Settings() {
  return (
    <Fragment>
      <div className='relative dark:bg-gray-900 min-h-screen'>
        <div className='bg-white dark:bg-gray-900'>
          <div>
            <main className='mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 className='text-4xl dark:text-white font-bold tracking-tight text-gray-900 mb-6'>
                Settings
              </h1>
              <div className='border rounded-lg border-gray-200 p-6'>
                <p className='mb-2 dark:text-white'>Change your password at anytime</p>
            <Link className='text-indigo-500' 
            key={'change-password'}
            to={'/dashboard/change-password'}
            aria-current={'page'}>
                <button className='border rounded-lg px-4 py-2 bg-indigo-500 text-lg font-bold tracking-tight text-white'>
                  Change password
                </button>
              </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
