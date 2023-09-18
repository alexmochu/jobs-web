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
    startDate: null,
    endDate: null,
    city: '',
    description: '',
  },
]

const educationInfo = [
  {
    school: '',
    degree: '',
    startDate: null,
    endDate: null,
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

  return (
    <div className='w-[720px]'>
        {loading ? (
                <div className='flex justify-center items-center pt-[200px]'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
      <div className='flex'>
        <Resume
          personal={applicationState.resume_details[0].personalState}
          work={applicationState.resume_details[0].workExperiences}
          education={applicationState.resume_details[0].educations}
          links={applicationState.resume_details[0].links}
          skills={applicationState.resume_details[0].skills}
        />
      </div>)}
    </div>
  )
}

export default ViewResume