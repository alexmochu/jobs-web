import { useState } from 'react'
// import Queries from '../../../api/queries'
import { userState } from '../../main'
import Resume from '../../resume/resume'

const jobDetails = {
  jobUrl: '',
  jobDescription: '',
  jobTitle: '',
  jobCompany: '',
  jobLocation: '',
  jobType: '',
  applicationState: '',
}

const personalInfo = {
  title: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  country: '',
  city: '',
  summary: '',
}

const workInfo = [
  {
    id: 0,
    title: '',
    employer: '',
    startDate: '',
    endDate: '',
    city: '',
    description: '',
  },
]

const educationInfo = [
  {
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    city: '',
    description: '',
  },
]

const linksInfo = [
  {
    label: '',
    link: '',
  },
]

const skillsInfo = []

function ViewResume({closeJobModal, applicationState}) {
  const { user, setUser } = userState()
  const [jobData, setJobData] = useState(jobDetails)

  const [error, setError] = useState(jobDetails)

  const [loading, setLoading] = useState(false)
  const [personalState, setPersonalState] = useState(personalInfo)
  const [workState, setWorkState] = useState(workInfo)
  const [educationState, setEducationState] = useState(educationInfo)
  const [linksState, setLinksState] = useState(linksInfo)
  const [skillsState, setSkillsState] = useState(skillsInfo)

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
        <Resume
          personal={personalState}
          work={workState}
          education={educationState}
          links={linksState}
          skills={skillsState}
        />
      </div>)}
    </div>
  )
}

export default ViewResume