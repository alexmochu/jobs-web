export default function JobsDashboard() {
  return (
    <div className="flex items-center mb-4 rounded h-full border border-gray-200 pl-5 pr-5 dark:bg-gray-800">
         {/* <h1>Jobs</h1> */}
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Jobs Search</button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Jobs Tracker</button>
                </li>
            </ul>
        </div>
        <div id="myTabContent">
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">Jobs search associated content</p>
            </div>
            <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                <p className="text-sm text-gray-500 dark:text-gray-400">Jobs tracker associated content</p>
            </div>
        </div>
      </div>
  );
}