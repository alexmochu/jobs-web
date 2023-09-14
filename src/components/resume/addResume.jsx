import { useState } from 'react'
import Queries from '../../api/queries'
import { userState } from '../../main'
import ResumeTemplate from './resumeTemplate'

const resumeDetails = {
  resumeTitle: '',
  resumeDetails: {},
  resumeTemplate: 0
}

function CreateResume({closeJobModal, applicationState}) {
  const { user, setUser } = userState()
  const [resumeData, setResumeData] = useState(resumeDetails)
  const [viewTemplate, setViewTemplate] = useState(false)
  const [template, setTemplate] = useState(0)

  const [error, setError] = useState(resumeDetails)

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { resumeTitle } = resumeData
    if (resumeTitle.trim() === '') {
      setError({ ...error, resumeTitle: 'Resume name can\'t be blank' })
    } else {
      // Handle form submission here
      setLoading(true)
      const response = await Queries.createResume({...resumeData})
      await setUser({
        ...user,
        showToast: true,
        toastMessage: 'Your resume has been created successfully.',
        currentUserResumes: [
          response.resume,
          ...user.currentUserResumes]
      })
      closeJobModal()
      setLoading(false)

      // Reset form
      setResumeData(resumeDetails)
      setError(resumeDetails)
    }    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevState) => ({ ...prevState, [name]: value }));
  };

  const openViewTemplate = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setViewTemplate(true)
  }

  const closeViewTemplate = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setViewTemplate(false)
  }

  const selectTemplate = (e, no) => {
    e.preventDefault()
    e.stopPropagation()
    setTemplate(no)
    setResumeData({...resumeData, resumeTemplate: no})
  }

  return (
    <div className='h-[600px]'>
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Create Resume</h1>
    </div>
        {loading ? (
                <div className='flex justify-center items-center pt-[200px]'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
      <form 
      onSubmit={handleSubmit}
      >
        <h4>Resume Name</h4>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="resumeTitle"
            value={resumeData.resumeTitle}
            onChange={handleChange}
            placeholder="Enter resume name"
            className={`col-span-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500  ${
                              error ? 'border-red-500' : ''
                            }`}
          />
        </div>
        <h4 className='mb-2'>Select Template</h4>
        <div className='overflow-y-auto grid grid-cols-2 gap-4 h-[430px]'>
          <div className={`relative  opacity-100 ${template === 1 ? 'text-indigo-500 font-bold border rounded-md shadow-2xl border-indigo-500 opacity-50' : ''}`}>
            <img onClick={(e) => selectTemplate(e,1)}  className='border h-[200px] rounded-md shadow-md flex items-center justify-center opacity-100 hover:opacity-50' src="/images/resume/temp-1.png" alt="template-one" />
            <button
              className="absolute mt-5 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-2 bg-blue-500 text-white rounded cursor-pointer"
              onClick={(e) => openViewTemplate(e)}
            >
              View
            </button>
            <p className={`mt-4 flex items-center justify-center ${template === 1 ? 'text-indigo-500 font-bold' : ''}`}>Template 1</p>
          </div>
          <div className='border h-[200px] rounded-md shadow-md flex flex-col items-center justify-center'>
            <p className='mt-4 text-center'>Template 2</p>
            <p className='font-bold text-center'>Coming soon</p>
          </div>

          <div className='border h-[200px] rounded-md shadow-md flex flex-col items-center justify-center'>
            <p className='mt-4 text-center'>Template 3</p>
            <p className='font-bold text-center'>Coming soon</p>
          </div>

          <div className='border h-[200px] rounded-md shadow-md flex flex-col items-center justify-center'>
            <p className='mt-4 text-center'>Template 4</p>
            <p className='font-bold text-center'>Coming soon</p>
          </div>

          <div className='border h-[200px] rounded-md shadow-md flex flex-col items-center justify-center'>
            <p className='mt-4 text-center'>Template 5</p>
            <p className='font-bold text-center'>Coming soon</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
        <button 
          type="submit"
          className='col-span-2 bg-indigo-500 text-gray-100 pt-2 pb-2 w-[100px] rounded-full tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                      shadow-lg'          
        >Create</button>
        </div>
      </form>)}
      {viewTemplate && (
        <div className='fixed inset-0 flex items-center justify-center z-auto'>
          <div onClick={(e) => closeViewTemplate(e)} className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className='relative bg-white rounded-lg shadow-md'>
            <button className='absolute right-2 text-gray-500' onClick={closeJobModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Add your modal content here */}
            <ResumeTemplate />
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateResume