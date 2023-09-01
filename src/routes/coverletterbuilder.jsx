import { useState } from 'react'
import Cover from '../coverletter/coverletter'

const initialState = {
  fullName: '',
  title: '',
  address: '',
  email: '',
  phoneNumber: '',
  onlineLink: '',
  otherLinks: '',
  company: '',
  hiringManager: '',
  letterDetails: '',
}
export default function CoverLetter() {
  const [state, setState] = useState(initialState)
  const onChange = (e) => setState({ ...state, [e.target.name]: e.target.value })

  return (
    <div className='grid grid-cols-2 gap-4 mb-4'>
      <div className='rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800'>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl py-5 dark:text-white">Google cover letter</h2>
            <div className="flex text-white bg-gray-900 items-center space-x-2 border rounded-md px-5 py-2">
              <span>Copy</span>
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
                    d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 3h6a2 2 0 012 2v12a2 2 0 01-2 2h-6a2 2 0 01-2-2V5a2 2 0 012-2z"
                  />
                </svg>
              </span>
            </div>
          </div>
        <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Personal Information</h3>
          </div>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='dark:text-white font-bold text-lg text-gray-600'>Full Name</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='fullName'
                value={state.fullName}
                onChange={onChange}
                placeholder='Full Name'
              />
            </div>
            <div>
              <p className='dark:text-white font-bold text-lg text-gray-600'>Job Title</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='title'
                value={state.title}
                onChange={onChange}
                placeholder='Job Title'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='dark:text-white font-bold text-lg text-gray-600'>Address</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='address'
                value={state.address}
                onChange={onChange}
                placeholder='Address'
              />
            </div>
            <div>
              <p className='dark:text-white font-bold text-lg text-gray-600'>Email</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='email'
                value={state.email}
                onChange={onChange}
                placeholder='Email'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <p className='dark:text-white font-bold text-lg text-gray-600'>Phone Number</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='phoneNumber'
                value={state.phoneNumber}
                onChange={onChange}
                placeholder='Phone Number'
              />
            </div>
            <div>
              <p className='dark:text-white font-bold text-lg text-gray-600'>Social Media</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='onlineLink'
                value={state.onlineLink}
                onChange={onChange}
                placeholder='Social Media'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <p className='dark:text-white font-bold text-lg text-gray-600'>Website/Other Links</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='otherLinks'
                value={state.otherLinks}
                onChange={onChange}
                placeholder='Website/Other Links'
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className='paper inline mx-auto p-3'>
          <h3 className='dark:text-white font-bold text-2xl'>Employer Details</h3>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='dark:text-white font-bold text-lg text-gray-600'>Company Name</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='company'
                value={state.company}
                onChange={onChange}
                placeholder='Company Name'
              />
            </div>
            <div>
              <p className='dark:text-white font-bold text-lg text-gray-600'>Hiring Manager</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='hiringManager'
                value={state.hiringManager}
                onChange={onChange}
                placeholder='Hiring Manager'
              />
            </div>
          </div>
        </div>
        <div className='paper inline mx-auto p-3'>
          <h3 className='dark:text-white font-bold text-2xl'>Letter Details</h3>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div>
            <p className='dark:text-white'>3–4 paragraphs explaining why youre the perfect candidate for a specific job</p>
            <textarea
              className='border-2 border-black rounded-lg w-full h-56 p-2'
              name='letterDetails'
              value={state.letterDetails}
              onChange={onChange}
              placeholder='Letter Details'
            ></textarea>
          </div>
        </div>
        <div className='paper inline mx-auto p-3'>
          <div>
            <button className='border bg-indigo-500 text-white rounded-md px-5 py-2 dark:text-white'>Save</button>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center rounded border border-gray-200 h-fit dark:bg-gray-800'>
        <Cover state={state} />
      </div>
    </div>
  )
}
