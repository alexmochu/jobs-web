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
   summary: ''
}

const workInfo = [
   {
      id: 0,
      title: '',
      employer:'',
      startDate: '',
      endDate: '',
      city: '',
      description: ''
   }
]

const educationInfo = [
      {
         school: '',
         degree: '',
         startDate: '',
         endDate: '',
         city: '',
         description: ''
      }
]

const linksInfo = [
      {
         label: '',
         link: ''
      }
]

const skillsInfo = []

export default function Profile() {
   const [personalState, setPersonalState] = useState(personalInfo)
   const [workState, setWorkState] = useState(workInfo)
   const [educationState, setEducationState] = useState(educationInfo)
   const [linksState, setLinksState] = useState(linksInfo)
   const [skillsState, setSkillsState] = useState(skillsInfo)

   const [skillValue, setSkillValue] = useState('');
   
   const onChange = e =>
    setPersonalState(
      { ...personalState, [e.target.name]: e.target.value },
    );

   const updateWorkInfo = (field, value) => {
    setWorkState((prevWorkInfo) => {
      const updatedWorkInfo = [{ ...prevWorkInfo[0], [field]: value }];
      return updatedWorkInfo;
    });
  };

   const updateEducationInfo = (field, value) => {
    setEducationState((prevEducationInfo) => {
      const updatedEducationInfo = [{ ...prevEducationInfo[0], [field]: value }];
      return updatedEducationInfo;
    });
  };

   const updateLinksInfo = (field, value) => {
    setLinksState((prevLinksInfo) => {
      const updatedLinksInfo = [{ ...prevLinksInfo[0], [field]: value }];
      return updatedLinksInfo;
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const newSkill = event.target.value;
      setSkillsState((prevSkillsInfo) => [...prevSkillsInfo, newSkill]);
      event.target.value = ''; // Clear the input field
      setSkillValue('')
    }
  };

   const handleSkillChange = (event) => {
    setSkillValue(event.target.value);
  };

  return (
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800">
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Personal Information</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Job Title</p>
               <input className='border-2 border-black rounded-lg w-full p-2' name='title' value={personalState.title} onChange={onChange} placeholder='Job Title'/>
               </div>
               <div></div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>First Name</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='firstName' value={personalState.firstName} onChange={onChange} placeholder='First Name'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Last Name</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='lastName' value={personalState.lastName} onChange={onChange} placeholder='Last Name'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Email</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='email' value={personalState.email} onChange={onChange} placeholder='Email'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Phone Number</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='phoneNumber' value={personalState.phoneNumber} onChange={onChange} placeholder='Phone'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Country</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='country' value={personalState.country} onChange={onChange} placeholder='Country'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>City</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='city' value={personalState.city} onChange={onChange} placeholder='City'/>
               </div>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Professional Summary</h3>
               <div>
               <p>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skill</p>
               <input className='border-2 border-black rounded-lg w-full h-56 p-2' name='summary' value={personalState.summary} onChange={onChange} placeholder='Job Title'/>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Work Experience</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Job Title</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' value={workState[0].title} onChange={(e) => updateWorkInfo('title', e.target.value)} placeholder='Job Title'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Employer</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='employer' value={workState[0].employer} onChange={(e) => updateWorkInfo('employer', e.target.value)} placeholder='Employer'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Start Date</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='startDate' value={workState[0].startDate} onChange={(e) => updateWorkInfo('startDate', e.target.value)} placeholder='Start Date'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>End Date</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='endDate' value={workState[0].endDate} onChange={(e) => updateWorkInfo('endDate', e.target.value)} placeholder='End Date'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>   
               <p className='font-bold text-lg text-gray-600'>City</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='city' value={workState[0].city} onChange={(e) => updateWorkInfo('city', e.target.value)} placeholder='City'/>
               </div>
               <div></div>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Description</p>
               <input className='border-2 border-black rounded-lg w-full h-56 p-2' name='description' value={workState[0].description} onChange={(e) => updateWorkInfo('description', e.target.value)} placeholder='Description'/>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Education Background</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>   
               <p className='font-bold text-lg text-gray-600'>School</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='school' value={educationState[0].school} onChange={(e) => updateEducationInfo('school', e.target.value)} placeholder='School'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Degree</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='degree' value={educationState[0].degree} onChange={(e) => updateEducationInfo('degree', e.target.value)} placeholder='Degree'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Start Date</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='startDate' value={educationState[0].startDate} onChange={(e) => updateEducationInfo('startDate', e.target.value)} placeholder='Start Date'/>
               </div>
               <div>
               <p>End Date</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='endDate' value={educationState[0].endDate} onChange={(e) => updateEducationInfo('endDate', e.target.value)} placeholder='End Date'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>City</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='city' value={educationState[0].city} onChange={(e) => updateEducationInfo('city', e.target.value)} placeholder='City'/>
               </div>
               <div></div>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Description</p>
               <input className='border-2 border-black rounded-lg w-full h-56 p-2' name='description' value={educationState[0].description} onChange={(e) => updateEducationInfo('description', e.target.value)} placeholder='Description'/>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Websites & Social Links</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>   
               <p className='font-bold text-lg text-gray-600'>Label</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='label' value={linksState[0].label} onChange={(e) => updateLinksInfo('label', e.target.value)} placeholder='Label'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Link</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='link' value={linksState[0].link} onChange={(e) => updateLinksInfo('link', e.target.value)} placeholder='Link'/>
               </div>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Skills</h3>
               <div>
               <p className='font-bold text-lg text-gray-600'>Skill</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='skillsInfo' value={skillValue} onKeyDown={handleKeyPress} onChange={handleSkillChange} placeholder='skill'/>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-center rounded border border-gray-200 h-fit dark:bg-gray-800">
            <Resume personal={personalState} work={workState} education={educationState} links={linksState} skills={skillsState} />
         </div>
      </div>
  );
}