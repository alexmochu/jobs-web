import { useState } from 'react'
// import Queries from '../../../api/queries'
import { userState } from '../../main'

const jobDetails = {
  jobUrl: '',
  jobDescription: '',
  jobTitle: '',
  jobCompany: '',
  jobLocation: '',
  jobType: '',
  applicationState: '',
}

function CreateResume({closeJobModal, applicationState}) {
  const { user, setUser } = userState()
  const [jobData, setJobData] = useState(jobDetails)

  const [error, setError] = useState(jobDetails)

  const [loading, setLoading] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const { jobTitle, jobCompany } = jobData
//     if (jobTitle.trim() === '') {
//       setError({ ...error, jobTitle: 'Job title can\'t be blank' })
//     } else if (jobCompany.trim() === '') {
//       setError({ ...error, jobCompany: 'Job company can\'t be blank' })
//     } else {
//       // Handle form submission here
//       setLoading(true)
//       const response = await Queries.createJob({...jobData, applicationState: applicationState})
//       await setUser({
//         ...user,
//         showToast: true,
//         toastMessage: 'Your job has been added successfully.',
//         currentUserJobs: [
//           response.job,
//           ...user.currentUserJobs]
//       })
//       closeJobModal()
//       setLoading(false)

//       // Reset form
//       setJobData(jobDetails)
//       setError(jobDetails)
//     }    
//   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevState) => ({ ...prevState, [name]: value }));
  };

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
    //   onSubmit={handleSubmit}
      >
        <h4>Resume Name</h4>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="jobUrl"
            value={jobData.jobUrl}
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
          <div className='border h-[200px] rounded-md shadow-md flex items-center justify-center'>Template 1</div>
          <div className='border h-[200px] rounded-md shadow-md flex items-center justify-center'>Template 2</div>
          <div className='border h-[200px] rounded-md shadow-md flex items-center justify-center'>Template 3</div>
          <div className='border h-[200px] rounded-md shadow-md flex items-center justify-center'>Template 4</div>
          <div className='border h-[200px] rounded-md shadow-md flex items-center justify-center'>Template 5</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
        <button 
          type="submit"
          className='col-span-2 bg-indigo-500 text-gray-100 pt-2 pb-1 w-full rounded-full tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                      shadow-lg'          
        >Submit</button>
        </div>
      </form>)}
    </div>
  )
}

export default CreateResume