import { Fragment } from 'react'
import { userState } from '../main'

export default function Profile() {
  const { user } = userState()
  const { username, email } = user
  return (
    <>
      <Fragment>
        <div className='relative dark:bg-gray-900 min-h-screen'>
          <div className='bg-white dark:bg-gray-900'>
            <div>
              <main className='mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='text-4xl dark:text-white font-bold tracking-tight text-gray-900 mb-6'>
                  Profile
                </h1>
                <div className='border rounded-lg dark:text-white border-gray-200 p-6'>
                  <p className='mb-2'>Your username</p>
                  <h1 className='text-lg dark:text-white font-bold tracking-tight text-gray-900'>
                    @{username}
                  </h1>
                  <p className='mt-6 mb-2'>Your email</p>
                  <h1 className='text-lg dark:text-white font-bold tracking-tight text-gray-900'>
                    {email}
                  </h1>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  )
}
