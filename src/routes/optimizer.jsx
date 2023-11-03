import { useState, useEffect } from 'react'
import { Link, } from 'react-router-dom'
import CreateCoverLetter from '../components/coverletter/addCoverLetter';
import ViewCoverLetter from '../components/coverletter/viewCoverLetter';
import DeleteCoverLetter from '../components/coverletter/deleteCoverLetter';
import Queries from '../api/queries';
import { userState } from '../main';

export default function Optimizer() {
  const [createCoverLetter, setCreateCoverLetter] = useState(false)
  const [viewCoverLetter, setViewCoverLetter] = useState(false)
  const [deleteCoverLetter, setDeleteCoverLetter] = useState(false)
  const [applicationState, setApplicationState] = useState({'letter_description': '','title': '', 'id': ''})

  const [loading, setLoading] = useState(true)
  const [loadingList, setLoadingList] = useState(false)
  // const [data, setData] = useState({})
  const [error, setError] = useState(null)

  const { user, setUser } = userState()
  const {currentUserLetters, id} = user

  async function loader() {
    const response = await Queries.getCurrentUserLetters(id)
    return response
  }

    useEffect(() => {
    const storeState = localStorage.getItem('store')
      if (storeState) {
        setUser(JSON.parse(storeState))
    }
    const fetchData = async () => {
      try {
        const response = await loader()
        setUser((prevState) => ({ ...prevState, currentUserLetters: response.letters  }));
        console.log(response)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    setTimeout(() => {
      fetchData()
    }, 3000)
  }, [])

  const openJobModal = () => {
    setCreateCoverLetter(true);
  };

  const closeJobModal = () => {
    setCreateCoverLetter(false);
  };

  const openViewModal = (description, title, id) => {
    setApplicationState({...applicationState, letter_description: description, title: title, id: id})
    setViewCoverLetter(true);
  };

  const closeViewModal = () => {
    setViewCoverLetter(false);
  };

  const openDeleteModal = (title, id) => {
  setApplicationState({...applicationState, title: title, id: id})
    setDeleteCoverLetter(true);
  };

  const closeDeleteModal = () => {
    setDeleteCoverLetter(false);
  }
    
  return (
    <div className='mb-4'>
      <div className='pl-5 pr-5 h-fit dark:bg-gray-800'>
        <div className="flex justify-between pb-6">
          <div className="flex justify-start">
            <h1 className='text-4xl dark:text-white font-bold tracking-tight text-gray-900 mb-6'>
              Job Application Response Optimizer
            </h1>
            </div>
            <div className='flex justify-end'>
              <button onClick={openJobModal}  className={`flex bg-indigo-500 text-white items-center space-x-2 border rounded-md px-5 py-2`}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
                <span>Create Cover Letter</span>
              </button>
            </div>
          </div>
      </div>
      {currentUserLetters.length > 0 ? 
      <div className='rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800'>
        <div className="flex justify-between pb-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="flex justify-end px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentUserLetters.map((item, index) => (
                <tr key={item.letter_id}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.letter_title}</td>
                  <td className="flex justify-end px-6 py-4 whitespace-nowrap">
              <Link
                key={'edit'}
                to={`/dashboard/cover-letter-builder/${item.letter_id}`}
                aria-current={'page'}
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white'
              >
                    <button className='flex bg-indigo-500 border rounded-md text-white px-6 py-2'>
                      <span>Edit</span>
                    </button>
                    </Link>
              <Link
                key={'view'}
                to='#'
                aria-current={'page'}
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white'
              >
                    <button onClick={() => openViewModal(item.letter_description, item.letter_title, item.letter_id)} className='flex bg-gray-900 border rounded-md text-white px-6 py-2'>
                      <span>View</span>
                    </button>
                    </Link>
              <div
                key={'qa'}
                to="#"
                aria-current={'page'}
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white'
              >
                    <button onClick={() => openDeleteModal(item.letter_title, item.letter_id)} className='flex bg-red-600 border rounded-md text-white px-6 py-2'>
                      <span>Delete</span>
                    </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      </div> : <h1>You have not created any cover letters</h1> }
        {createCoverLetter && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className='relative bg-white p-8 rounded-lg shadow-md w-[400px]'>
            <button className='absolute top-2 right-2 text-gray-500' onClick={closeJobModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <CreateCoverLetter closeJobModal={closeJobModal} />
          </div>
        </div>
      )}
      {viewCoverLetter && (
        <div className='fixed inset-0 flex justify-center z-50'>
          <div className='absolute inset-0 bg-gray-500 opacity-75' onClick={closeViewModal}></div>
          <div className='relative mt-10  w-[760px]'>
            {/* <button className='absolute top-2 right-2 text-gray-500' onClick={closeViewModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button> */}
            {/* Add your modal content here */}
            <ViewCoverLetter closeJobModal={closeViewModal} applicationState={applicationState}/>
          </div>
        </div>
      )}
      {deleteCoverLetter && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className='relative bg-white p-8 rounded-lg shadow-md w-[400px]'>
            <button className='absolute top-2 right-2 text-gray-500' onClick={closeDeleteModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <DeleteCoverLetter closeJobModal={closeDeleteModal} applicationState={applicationState}/>
          </div>
        </div>
      )} 
    </div>
  )
}
