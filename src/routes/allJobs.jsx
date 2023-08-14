import { Fragment, useEffect, useState } from 'react'
import Queries from '../api/queries'
import { userState } from '../main'

export default function AllJobs() {
  const { user, setUser } = userState()
  const {allJobs} = user

  async function loader() {
    const response = await Queries.getAllJobs()
    return response
  }

  const [loading, setLoading] = useState(true)
  const [loadingList, setLoadingList] = useState(false)
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const storeState = localStorage.getItem('store')
      if (storeState) {
        setUser(JSON.parse(storeState))
    }
    const fetchData = async () => {
      try {
        const response = await loader()
        console.log('respo', response)
        setUser((prevState) => ({ ...prevState, allJobs: response.jobs  }));
        console.log(response)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    setTimeout(() => {
      fetchData()
    }, 2000);

    // fetchData()
  }, [])

  return (
    <Fragment>
      <div className='relative dark:bg-gray-900 min-h-screen' id='home'>
        <div>
          <div className='relative ml-auto'>
            <div>
              <label className='block'>
                <h1 className='text-4xl dark:text-white font-bold tracking-tight mb-2 text-gray-900'>
                  Jobs
                </h1>
              </label>
              <div className='mt-10 flex flex-wrap gap-y-4 gap-x-6'>
                  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Job Title
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Job Company
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Job Url
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Application State
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Job Description
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Job Type
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Job Location
        </th>
      </tr>
    </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {allJobs.length > 0 ? (
          allJobs.map((item, index) => (
        <tr key={index} className="hover:bg-gray-50">
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{item.job_title}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.job_company}</div>
          </td>
                    <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.job_url}</div>
          </td>          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.application_state}</div>
          </td>          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.job_description}</div>
          </td>          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.job_type}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.job_location}</div>
          </td>
        </tr>
            
         ))) : 'No jobs created'}
         </tbody>
           </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )}