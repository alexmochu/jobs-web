import Resume from '../resume/resume'

export default function Profile() {
  return (
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800">
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Personal Information</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Job Title</p>
               <input className='border-2 border-black rounded-lg w-full p-2' placeholder='Job Title'/>
               </div>
               <div></div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>First Name</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='First Name'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Last Name</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Last Name'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Email</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Email'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Phone Number</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Phone'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Country</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Country'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>City</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='City'/>
               </div>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Professional Summary</h3>
               <div>
               <p>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skill</p>
               <input className='border-2 border-black rounded-lg w-full h-56 p-2' placeholder='Job Title'/>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Work Experience</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Job Title</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Job Title'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Employer</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Employer'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Start Date</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Start Date'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>End Date</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='End Date'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>   
               <p className='font-bold text-lg text-gray-600'>City</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='City'/>
               </div>
               <div></div>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Description</p>
               <input className='border-2 border-black rounded-lg w-full h-56 p-2' placeholder='Description'/>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Education Background</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>   
               <p className='font-bold text-lg text-gray-600'>School</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='School'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Degree</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Degree'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Start Date</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Start Date'/>
               </div>
               <div>
               <p>End Date</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='End Date'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>City</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='City'/>
               </div>
               <div></div>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Description</p>
               <input className='border-2 border-black rounded-lg w-full h-56 p-2' placeholder='Description'/>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Websites & Social Links</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>   
               <p className='font-bold text-lg text-gray-600'>Label</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Label'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Link</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Link'/>
               </div>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Skills</h3>
               <div>
               <p className='font-bold text-lg text-gray-600'>Skill</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='skill'/>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-center rounded border border-gray-200 h-fit dark:bg-gray-800">
            <Resume />
         </div>
      </div>
  );
}