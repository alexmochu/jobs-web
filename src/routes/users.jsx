import { Fragment, useEffect, useState } from 'react'
import Queries from '../api/queries'
import { userState } from '../main'

export default function Users() {

  const { user, setUser } = userState()
  const {users} = user

  async function loader() {
    const response = await Queries.getAllUsers()
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
        setUser((prevState) => ({ ...prevState, users: response.users  }));
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
        <div className='px-6 md:px-12 xl:px-6'>
          <div className='relative ml-auto'>
            <div>
              <label className='block'>
                <h1 className='text-4xl dark:text-white font-bold tracking-tight mb-2 text-gray-900'>
                  Users
                </h1>
              </label>
              <div className='mt-10 flex flex-wrap gap-y-4 gap-x-6'>
                 <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ID
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Username
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Role
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Verification Status
        </th>
      </tr>
    </thead>                
    <tbody className="bg-white divide-y divide-gray-200">
        {users.length > 0 ? (
          users.map((item, index) => (
        <tr key={index} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{index + 1}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{item.user_email}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.user_username}</div>
          </td>
                    <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.user_role}</div>
          </td>          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{item.user_verified}</div>
          </td>
    
        </tr>
            
         ))) : 'No users created'}
         </tbody>
         </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )}