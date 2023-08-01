import { Fragment } from 'react'

export default function ConfirmEmail() {
  return (
    <Fragment>
      <div className='relative' id='home'>
        <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
          <div className='relative mt-60 ml-auto'>
            <div className='lg:w-2/3 text-center mx-auto'>
              <label className='block'>
                <h1 className='text-4xl font-bold tracking-tight mb-2 text-gray-900'>
                  Account Verified! 🎉
                </h1>
              </label>
              <div className='mt-10 flex flex-wrap justify-center gap-y-4 gap-x-6'>
                  <label className='block'>
                    <span className='block text-2xl text-slate-700'>
                      Welcome back! Your account is now verified and ready to go! 😃{' '}
                    </span>
                  </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
