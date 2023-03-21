import { Fragment } from 'react'
import { Navigate } from 'react-router-dom';

const App = () => {

  // eslint-disable-next-line no-constant-condition
  if (!true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Fragment>
      <main>
        <div className='bg-white'>
          <div>
            <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
                  Landing Page
                </h1>
              </div>
            </main>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default App

