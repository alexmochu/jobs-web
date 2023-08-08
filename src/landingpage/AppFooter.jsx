import { Link } from 'react-router-dom'

const AppFooter = () => (
  <footer className='py-20 md:py-40'>
    <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
      <div className='m-auto md:w-10/12 lg:w-8/12 xl:w-6/12'>
        <div className='flex flex-wrap items-center justify-between md:flex-nowrap'>
          <div className='flex w-full justify-center space-x-12 text-gray-600 dark:text-gray-300 sm:w-7/12 md:justify-start'>
            <ul className='list-inside list-disc space-y-8'>
              <li>
                <Link to='/' className='transition hover:text-primary'>
                  Home
                </Link>
              </li>

              {/* <li><Link to='/jobs' className="transition hover:text-primary">Jobs</Link></li> */}
              <li>
                <Link to='/FAQs' className='transition hover:text-primary'>
                  FAQs
                </Link>
              </li>
            </ul>

            <ul role='list' className='space-y-8'>
              <li>
                <a
                  href='https://github.com/Kejani-Garage'
                  target='_blank'
                  className='flex items-center space-x-3 transition hover:text-primary'
                  rel='noreferrer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    className='w-5'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                  </svg>
                  <span>Github</span>
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/Kejanijobs'
                  target='_blank'
                  className='flex items-center space-x-3 transition hover:text-primary'
                  rel='noreferrer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    className='w-5'
                    viewBox='0 0 16 16'
                  >
                    <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                  </svg>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/company/kejani-garage/'
                  target='_blank'
                  className='flex items-center space-x-3 transition hover:text-primary'
                  rel='noreferrer'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='#000000'
                    width='24'
                    height='24'
                  >
                    <path d='M22,2H2A2,2,0,0,0,0,4V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V4A2,2,0,0,0,22,2ZM7.75,19H4V9h3.75ZM5.88,7.51A1.88,1.88,0,1,1,4,5.63,1.87,1.87,0,0,1,5.88,7.51ZM19,19h-3.75V14.35c0-1.72,0-3.35-2.52-3.35A2.92,2.92,0,0,0,13,14.23V19H9V9h3.5v1.22A3.46,3.46,0,0,1,16,9.85c2,0,3.5,1.31,3.5,4.1Z' />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='m-auto mt-16 w-10/12 space-y-6 text-center sm:mt-auto sm:w-5/12 sm:text-left'>
            <span className='block text-gray-500 dark:text-gray-400'>Bringing Ideas to Life</span>
            <span className='flex justify-between text-gray-600 dark:text-white'>
              <Link
                key={'terms'}
                to={'/terms-conditions'}
                aria-current={'page'}
                className='flex flex-shrink-0 items-center bg-white text-gray-800 px-2'
              >
                Terms of Use
              </Link>
              <Link
                key={'policy'}
                to={'/privacy-policy'}
                aria-current={'page'}
                className='flex flex-shrink-0 items-center bg-white text-gray-800 px-2'
              >
                Privacy Policy
              </Link>
            </span>

            <span className='block text-gray-500 dark:text-gray-400'>
              <Link
                key={'contacts'}
                to={'/contact-us'}
                aria-current={'page'}
                className='flex flex-shrink-0 items-center bg-white text-gray-800 px-2'
              >
                Contact Us
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default AppFooter
