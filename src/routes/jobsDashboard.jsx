import { useState } from 'react'
import Search from '../search/search';
import Tracker from '../tracker/tracker'

export default function JobsDashboard() {
  const [tabState, setTabState] = useState('search')
  return (
    <div className="mb-4 rounded h-full border border-gray-200 pl-5 pr-5 dark:bg-gray-800">
         {/* <h1>Jobs</h1> */}
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 rounded-t-lg text-2xl" id="profile-tab" onClick={() => setTabState('search')} data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Jobs Search</button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="text-2xl inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" onClick={() => setTabState('tracker')} data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Jobs Application Tracker</button>
                </li>
            </ul>
        </div>
        <div id="myTabContent">
            <div className={tabState === 'search' ? 'p-4 rounded-lg dark:bg-gray-800' : 'hidden'} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <Search />
            </div>
            <div className={tabState === 'tracker' ? 'pb-4 rounded-lg dark:bg-gray-800' : 'hidden'} id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
               <Tracker />
            </div>
        </div>
      </div>
  );
}