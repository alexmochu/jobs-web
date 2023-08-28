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

function DeleteCoverLetter({closeJobModal, applicationState}) {
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
    <div className='h-[280px]'>
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Delete Cover Letter</h1>
    </div>
        {loading ? (
                <div className='flex justify-center items-center pt-[200px]'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
      <form 
    //   onSubmit={handleSubmit}
      >
        <div className='flex flex-col items-center'>
          <h1
            name="jobSummary"
            className={`block w-full px-3 bg-white text-red-600 text-center`}
          >
          {'Are you sure you want to delete this cover letter: '} <span className='text-black'>{'Google cover letter'}</span>{'.'}</h1>
        <h1
            name="jobSummary"
            className={`mb-9 block w-full px-3 bg-white text-red-600 text-center`}
          >
          {'This action is irreversible and the item will be permanently removed from the system. Please confirm your decision.'}</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
        <button 
          type="submit"
          className='col-span-2 bg-red-600 text-gray-100 pt-2 pb-2 w-full rounded-full tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                      shadow-lg'          
        >Yes</button>
        <button 
          type="button"
          className='col-span-2 bg-gray-900 text-gray-100 pt-2 pb-2 w-full rounded-full tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                      shadow-lg'          
        >No</button>
        </div>
      </form>)}
    </div>
  )
}

export default DeleteCoverLetter