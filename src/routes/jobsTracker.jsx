import Tracker from '../tracker/tracker'
import { Link } from 'react-router-dom'
import { featureFlag } from '../../config'

export default function JobTracker() {
  const { search } = featureFlag
  return (
    <div className='pl-5 pr-5 dark:bg-gray-800'>
      {/* <h1>Jobs</h1> */}
      <div className='mb-4 border-b border-gray-200 dark:border-gray-700'>
        <ul
          className='flex flex-wrap -mb-px text-sm font-medium text-center'
          id='myTab'
          data-tabs-toggle='#myTabContent'
          role='tablist'
        >
          <li className='mr-2' role='presentation'>
            <button
              className='text-2xl dark:text-white inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              id='dashboard-tab'
              data-tabs-target='#dashboard'
              type='button'
              aria-controls='dashboard'
            >
              Jobs Application Tracker
            </button>
          </li>
         {search &&
          <li className='mr-2' role='presentation'>
        <Link className='text-indigo-500' 
            key={'jobs-search'}
            to={'/dashboard/job-search'}
            aria-current={'page'}>
            <button
              className='inline-block p-4 border-b-2 rounded-t-lg text-2xl'
              id='profile-tab'
              data-tabs-target='#profile'
              type='button'
              aria-controls='profile'
            >
              Jobs Search
            </button>
        </Link>
          </li>}
        </ul>
      </div>
      <div id='myTabContent'>
        <div
          className={'pb-4 rounded-lg dark:bg-gray-800'}
          id='dashboard'
          aria-labelledby='dashboard-tab'
        >
          <Tracker />
        </div>
      </div>
    </div>
  )
}
