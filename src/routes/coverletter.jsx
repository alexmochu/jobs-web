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
   letterDetails: ''
}
export default function CoverLetter() {
   const [state, setState] = useState(initialState)
   const onChange = e =>
    setState(
      { ...state, [e.target.name]: e.target.value },
    );

  return (
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800">
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Personal Information</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Full Name</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='fullName' value={state.fullName} onChange={onChange} placeholder='Full Name'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Job Title</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='title' value={state.title} onChange={onChange} placeholder='Job Title'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div> 
               <p className='font-bold text-lg text-gray-600'>Address</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='address' value={state.address} onChange={onChange} placeholder='Address'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Email</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='email' value={state.email} onChange={onChange} placeholder='Email'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-4'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Phone Number</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='phoneNumber' value={state.phoneNumber} onChange={onChange} placeholder='Phone Number'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Social Media</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='onlineLink' value={state.onlineLink} onChange={onChange} placeholder='Social Media'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Website/Other Links</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='otherLinks' value={state.otherLinks} onChange={onChange} placeholder='Website/Other Links'/>
               </div>
               <div>
               </div>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Employer Details</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div> 
               <p className='font-bold text-lg text-gray-600'>Company Name</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='company' value={state.company} onChange={onChange} placeholder='Company Name'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Hiring Manager</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' name='hiringManager' value={state.hiringManager} onChange={onChange} placeholder='Hiring Manager'/>
               </div>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Letter Details</h3>
               <div>
               <p>3–4 paragraphs explaining why youre the perfect candidate for a specific job</p>
               <input className='border-2 border-black rounded-lg w-full h-56 p-2' name='letterDetails' value={state.letterDetails} onChange={onChange} placeholder='Letter Details'/>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-center rounded border border-gray-200 h-fit dark:bg-gray-800">
            <Cover state={state}/>
         </div>
      </div>
  );
}