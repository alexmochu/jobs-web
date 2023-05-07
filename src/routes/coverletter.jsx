import Cover from '../coverletter/coverletter'

export default function CoverLetter() {
  return (
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800">
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Personal Information</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Full Name</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Full Name'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Job Title</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Job Title'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div> 
               <p className='font-bold text-lg text-gray-600'>Address</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Address'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Email</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Email'/>
               </div>
               </div>
               <div className='grid grid-cols-2 gap-4'>
               <div>
               <p className='font-bold text-lg text-gray-600'>Phone Number</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Phone Number'/>
               </div>
               <div></div>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Employer Details</h3>
               <div className='grid grid-cols-2 gap-4 mb-5'>
               <div> 
               <p className='font-bold text-lg text-gray-600'>Company Name</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Company Name'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Hiring Manager</p>
               <input className='border-2 border-black rounded-lg p-2 w-full' placeholder='Hiring Manager'/>
               </div>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Letter Details</h3>
               <div>
               <p>3–4 paragraphs explaining why youre the perfect candidate for a specific job</p>
               <input className='border-2 border-black rounded-lg w-full h-56 p-2' placeholder='Letter Details'/>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-center rounded border border-gray-200 h-fit dark:bg-gray-800">
            <Cover />
         </div>
      </div>
  );
}