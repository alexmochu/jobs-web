import { useState } from 'react'
import Resume from '../resume/resume'

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

export default function ResumeBuilder() {
  const [personalState, setPersonalState] = useState(personalInfo)
  const [workState, setWorkState] = useState(workInfo)
  const [educationState, setEducationState] = useState(educationInfo)
  const [linksState, setLinksState] = useState(linksInfo)
  const [skillsState, setSkillsState] = useState(skillsInfo)

  const [skillValue, setSkillValue] = useState('')

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onChange = (e) => setPersonalState({ ...personalState, [e.target.name]: e.target.value })

  const updateWorkInfo = (field, value) => {
    setWorkState((prevWorkInfo) => {
      const updatedWorkInfo = [{ ...prevWorkInfo[0], [field]: value }]
      return updatedWorkInfo
    })
  }

  const updateEducationInfo = (field, value) => {
    setEducationState((prevEducationInfo) => {
      const updatedEducationInfo = [{ ...prevEducationInfo[0], [field]: value }]
      return updatedEducationInfo
    })
  }

  const updateLinksInfo = (field, value) => {
    setLinksState((prevLinksInfo) => {
      const updatedLinksInfo = [{ ...prevLinksInfo[0], [field]: value }]
      return updatedLinksInfo
    })
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const newSkill = event.target.value
      setSkillsState((prevSkillsInfo) => [...prevSkillsInfo, newSkill])
      event.target.value = '' // Clear the input field
      setSkillValue('')
    }
  }

  const handleSkillChange = (event) => {
    setSkillValue(event.target.value)
  }

  const expItem = <>
              <hr className='my-4 border-t-4 border-gray-900'/>
              <div className='grid grid-cols-2 gap-4 mb-5'>
              <div>
                <p className='font-bold text-lg text-gray-600'>Job Title</p>
                <input
                  className='border-2 border-black rounded-lg p-2 w-full'
                  value={workState[0].title}
                  onChange={(e) => updateWorkInfo('title', e.target.value)}
                  placeholder='Job Title'
                />
              </div>
              <div>
                <p className='font-bold text-lg text-gray-600'>Employer</p>
                <input
                  className='border-2 border-black rounded-lg p-2 w-full'
                  name='employer'
                  value={workState[0].employer}
                  onChange={(e) => updateWorkInfo('employer', e.target.value)}
                  placeholder='Employer'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mb-5'>
              <div>
                <p className='font-bold text-lg text-gray-600'>Start Date</p>
                <input
                  className='border-2 border-black rounded-lg p-2 w-full'
                  name='startDate'
                  value={workState[0].startDate}
                  onChange={(e) => updateWorkInfo('startDate', e.target.value)}
                  placeholder='Start Date'
                />
              </div>
              <div>
                <p className='font-bold text-lg text-gray-600'>End Date</p>
                <input
                  className='border-2 border-black rounded-lg p-2 w-full'
                  name='endDate'
                  value={workState[0].endDate}
                  onChange={(e) => updateWorkInfo('endDate', e.target.value)}
                  placeholder='End Date'
                />
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4 mb-5'>
              <div>
                <p className='font-bold text-lg text-gray-600'>City</p>
                <input
                  className='border-2 border-black rounded-lg p-2 w-full'
                  name='city'
                  value={workState[0].city}
                  onChange={(e) => updateWorkInfo('city', e.target.value)}
                  placeholder='City'
                />
              </div>
              <div></div>
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Description</p>
              <textarea
                className='border-2 border-black rounded-lg w-full h-56 p-2'
                name='description'
                value={workState[0].description}
                onChange={(e) => updateWorkInfo('description', e.target.value)}
                placeholder='Description'
              ></textarea>
    </div>
  </>

  const expArray = [expItem, expItem]

  const personal = 
        <>
        <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Personal Information</h3>
          </div>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>Job Title</p>
              <input
                className='border-2 border-black rounded-lg w-full p-2'
                name='title'
                value={personalState.title}
                onChange={onChange}
                placeholder='Job Title'
              />
            </div>
            <div></div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>First Name</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='firstName'
                value={personalState.firstName}
                onChange={onChange}
                placeholder='First Name'
              />
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Last Name</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='lastName'
                value={personalState.lastName}
                onChange={onChange}
                placeholder='Last Name'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>Email</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='email'
                value={personalState.email}
                onChange={onChange}
                placeholder='Email'
              />
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Phone Number</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='phoneNumber'
                value={personalState.phoneNumber}
                onChange={onChange}
                placeholder='Phone'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>Country</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='country'
                value={personalState.country}
                onChange={onChange}
                placeholder='Country'
              />
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>City</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='city'
                value={personalState.city}
                onChange={onChange}
                placeholder='City'
              />
            </div>
          </div>
        </div>
        <div className='paper inline mx-auto p-3'>
          <h3 className='font-bold text-2xl'>Professional Summary</h3>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div>
            <p>
              Write 2-4 short & energetic sentences to interest the reader! Mention your role,
              experience & most importantly - your biggest achievements, best qualities and skill
            </p>
            <textarea
              className='border-2 border-black rounded-lg w-full h-56 p-2'
              name='summary'
              value={personalState.summary}
              onChange={onChange}
              placeholder='Job Title'
            ></textarea>
          </div>
        </div></>
  const experience = 
      <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Work Experience</h3>
          </div>

        {expArray.length > 0 ? (
          expArray.map((item, index) => (
            <>
            {item}
            </>
          ))) : 'Opps report this bug'}
        </div>

  const education = 
          <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Education Background</h3>
          </div>
            <hr className='my-4 border-t-4 border-gray-900'/>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>School</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='school'
                value={educationState[0].school}
                onChange={(e) => updateEducationInfo('school', e.target.value)}
                placeholder='School'
              />
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Degree</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='degree'
                value={educationState[0].degree}
                onChange={(e) => updateEducationInfo('degree', e.target.value)}
                placeholder='Degree'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>Start Date</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='startDate'
                value={educationState[0].startDate}
                onChange={(e) => updateEducationInfo('startDate', e.target.value)}
                placeholder='Start Date'
              />
            </div>
            <div>
              <p>End Date</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='endDate'
                value={educationState[0].endDate}
                onChange={(e) => updateEducationInfo('endDate', e.target.value)}
                placeholder='End Date'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>City</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='city'
                value={educationState[0].city}
                onChange={(e) => updateEducationInfo('city', e.target.value)}
                placeholder='City'
              />
            </div>
            <div></div>
          </div>
          {/* <div>
               <p className='font-bold text-lg text-gray-600'>Description</p>
               <textarea className='border-2 border-black rounded-lg w-full h-56 p-2' name='description' value={educationState[0].description} onChange={(e) => updateEducationInfo('description', e.target.value)} placeholder='Description'></textarea>
               </div> */}
        </div>

  const websites =
        <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Websites & Social Links</h3>
          </div>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div className='grid grid-cols-2 gap-4 mb-5'>
            <div>
              <p className='font-bold text-lg text-gray-600'>Label</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='label'
                value={linksState[0].label}
                onChange={(e) => updateLinksInfo('label', e.target.value)}
                placeholder='Label'
              />
            </div>
            <div>
              <p className='font-bold text-lg text-gray-600'>Link</p>
              <input
                className='border-2 border-black rounded-lg p-2 w-full'
                name='link'
                value={linksState[0].link}
                onChange={(e) => updateLinksInfo('link', e.target.value)}
                placeholder='Link'
              />
            </div>
          </div>
        </div>

  const skills =
        <div className='paper inline mx-auto p-3'>
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl dark:text-white">Skills</h3>
          </div>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div>
            <p className='font-bold text-lg text-gray-600'>Skill</p>
            <input
              className='border-2 border-black rounded-lg p-2 w-full'
              name='skillsInfo'
              value={skillValue}
              onKeyDown={handleKeyPress}
              onChange={handleSkillChange}
              placeholder='skill'
            />
          </div>
        </div>

  const stepComponents = [
    personal,
    experience,
    education,
    websites,
    skills
  ];
        
  return (
    <div className='grid grid-cols-2 gap-4 mb-4'>
      <div className='rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800'>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl py-5 dark:text-white">Google Resume</h2>
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
        {stepComponents[currentStep - 1]}
        <div className="flex justify-between pb-20">
            <div className="flex justify-start">
              <button className="bg-indigo-500 px-5 py-2 border rounded text-white dark:text-white">Save</button>
            </div>
            {currentStep === 1 ? null:
            <div className='flex justify-end'>
            <div>
              <button  onClick={() => console.log('current', currentStep)}  className={`flex bg-gray-900 text-white items-center space-x-2 border rounded-md px-5 py-2`}>
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
                <span>Add {currentStep}</span>
              </button>
            </div>
            <div className='flex justify-end'>
              <button  className={`flex bg-red-900 text-white items-center space-x-2 border rounded-md px-5 py-2`}>
                <span>Remove</span>
              </button>
            </div>
            </div>}
          </div>
          <div className="fixed bottom-0 ml-[-150px] bg-white pt-6 border-t flex justify-center w-full pb-6">
            <div className='flex justify-end'>
              <button  onClick={handleBack} disabled={currentStep === 1}    className={`flex ${
    currentStep === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-900'
  } text-white items-center space-x-2 border rounded-md px-5 py-2`}>
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </span>
                <span>Back</span>
              </button>
              <div className="relative flex items-center h-4 mx-10 mt-4 w-96">
                <div className="absolute inset-0 h-full bg-gray-300 rounded-full">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(currentStep - 1) * 25}%` }}></div>
                </div>
              </div>
              <button onClick={handleNext} disabled={currentStep === 5}  className={`flex ${
    currentStep === 5 ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-500'
  } text-white items-center space-x-2 border rounded-md px-5 py-2`}>
                <span>Next</span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
      </div>
      <div className='flex items-center justify-center rounded border border-gray-200 h-fit dark:bg-gray-800'>
        <Resume
          personal={personalState}
          work={workState}
          education={educationState}
          links={linksState}
          skills={skillsState}
        />
      </div>
    </div>
  )
}
