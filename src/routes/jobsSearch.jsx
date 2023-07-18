import Search from '../search/search'
import { Link } from 'react-router-dom'

export default function JobSearch() {
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
            <Link className='text-indigo-500' 
            key={'jobs-tracker'}
            to={'/dashboard/job-tracker'}
            aria-current={'page'}>
            <button
              className='text-2xl inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              id='dashboard-tab'
              data-tabs-target='#dashboard'
              type='button'
              aria-controls='dashboard'
            >
              Jobs Application Tracker
            </button>
            </Link>
          </li>
          <li className='mr-2' role='presentation'>
            <button
              className='inline-block p-4 border-b-2 rounded-t-lg text-2xl'
              id='profile-tab'
              data-tabs-target='#profile'
              type='button'
              aria-controls='profile'
            >
              Jobs Search
            </button>
          </li>
        </ul>
      </div>
      <div id='myTabContent'>
        <div
          className={'p-4 rounded-lg dark:bg-gray-800'}
          id='profile'
          role='tabpanel'
          aria-labelledby='profile-tab'
        >
          <Search />
        </div>
      </div>
    </div>
  )
}
