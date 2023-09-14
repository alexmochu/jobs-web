import { useState } from 'react'
import { Link, } from 'react-router-dom'
import CreateResume from '../components/resume/addResume';
import ViewResume from '../components/resume/viewResume';
import DeleteResume from '../components/resume/deleteResume';
import { userState } from '../main'

export default function Resumes() {

  const [createResume, setCreateResume] = useState(false)
  const [viewResume, setViewResume] = useState(false)
  const [deleteResume, setDeleteResume] = useState(false)
  const [applicationState, setApplicationState] = useState('')
  const { user, setUser } = userState()
  const {currentUserResumes} = user
  console.log('curre', currentUserResumes)

    const data = [
    // { id: 1, name: 'AWS Resume', role: 'Admin' },
    // { id: 2, name: 'Google Resume', role: 'User' },
    // { id: 3, name: 'Facebook Resume', role: 'User' },
    // { id: 4, name: 'X Resume', role: 'User' },
  ];

  const openJobModal = () => {
    setCreateResume(true);
  };

  const closeJobModal = () => {
    setCreateResume(false);
  };

  const openViewModal = () => {
    setViewResume(true);
  };

  const closeViewModal = () => {
    setViewResume(false);
  };

  const openDeleteModal = () => {
    setDeleteResume(true);
  };

  const closeDeleteModal = () => {
    setDeleteResume(false);
  };
        
  return (
    <div className='mb-4'>
      <div className='pl-5 pr-5 h-fit dark:bg-gray-800'>
        <div className="flex justify-between pb-6">
          <div className="flex justify-start">
            <h1 className='text-4xl dark:text-white font-bold tracking-tight text-gray-900 mb-6'>
              Resumes
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
                <span>Create Resume</span>
              </button>
            </div>
          </div>
      </div>
      {currentUserResumes.length > 0 ? <div className='rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800'>
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
              {currentUserResumes.map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.resume_title}</td>
                  <td className="flex justify-end px-6 py-4 whitespace-nowrap">
              <Link
                key={'qa'}
                to={'/dashboard/resume-builder'}
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
                    <button onClick={openViewModal} className='flex bg-gray-900 border rounded-md text-white px-6 py-2'>
                      <span>View</span>
                    </button>
                    </Link>
            <Link
                key={'delete'}
                to='#'
                aria-current={'page'}
                className='flex items-center p-2 text-red-900 rounded-lg dark:text-white'
              >
                <button onClick={openDeleteModal} className='flex bg-red-600 border rounded-md text-white px-6 py-2'>
                      <span>Delete</span>
                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      </div> : <h1>You have not created any resumes/CVs</h1>}
        {createResume && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className='relative bg-white p-8 rounded-lg shadow-md w-[400px]'>
            <button className='absolute top-2 right-2 text-gray-500' onClick={closeJobModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Add your modal content here */}
            <CreateResume closeJobModal={closeJobModal} applicationState={applicationState}/>
          </div>
        </div>
      )}
      {viewResume && (
        <div className='fixed inset-0 flex justify-center z-50'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className='relative mt-10 bg-white w-[760px]'>
            <button className='absolute top-2 right-2 text-gray-500' onClick={closeViewModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Add your modal content here */}
            <ViewResume closeJobModal={closeViewModal} applicationState={applicationState}/>
          </div>
        </div>
      )}
      {deleteResume && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className='relative bg-white p-8 rounded-lg shadow-md w-[400px]'>
            <button className='absolute top-2 right-2 text-gray-500' onClick={closeDeleteModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Add your modal content here */}
            <DeleteResume closeJobModal={closeDeleteModal} applicationState={applicationState}/>
          </div>
        </div>
      )} 
    </div>
  )
}
