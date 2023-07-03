import { Fragment } from 'react'

export default function Settings() {
  return (
    <Fragment>
      <main>
        <div className='bg-white'>
          <div>
            <main className='mx-auto px-4 sm:px-6 lg:px-8'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-6'>
                Settings
              </h1>
              <div className='border rounded-lg border-gray-200 p-6'>
                <p className='mb-2'>Change your password at anytime</p>
                <button className='border rounded-lg px-4 py-2 bg-gray-50 text-lg font-bold tracking-tight text-gray-900'>
                  Change password
                </button>
              </div>
            </main>
          </div>
        </div>
      </main>
    </Fragment>
  )
}
