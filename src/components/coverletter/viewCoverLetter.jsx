import { useState } from 'react'
// import Queries from '../../../api/queries'
import { userState } from '../../main'
import Cover from '../../coverletter/coverletter'

const jobDetails = {
  jobUrl: '',
  jobDescription: '',
  jobTitle: '',
  jobCompany: '',
  jobLocation: '',
  jobType: '',
  applicationState: '',
}

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

function ViewCoverLetter({closeJobModal, applicationState}) {
  const { user, setUser } = userState()
  const [jobData, setJobData] = useState(jobDetails)

  const [error, setError] = useState(jobDetails)

  const [loading, setLoading] = useState(false)
  const [state, setState] = useState(initialState)


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
    <div className='w-[720px]'>
        {loading ? (
                <div className='flex justify-center items-center pt-[200px]'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
      <div className='flex'>
        <Cover state={state} />
      </div>)}
    </div>
  )
}

export default ViewCoverLetter