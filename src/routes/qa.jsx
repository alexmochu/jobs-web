import QAnswer from '../qa/qa'

export default function QA() {
  return (
      <div className="grid grid-cols-2 gap-4 mb-4">
         <div className="rounded border border-gray-200 h-fit pl-5 pr-5 dark:bg-gray-800">
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>Job Application Question</h3>
               <div>
               <input className='border-2 border-black rounded-lg w-full h-28 pl-2' placeholder='Question'/>
               </div>
            </div>
            <div className="paper inline mx-auto p-3">
               <h3 className='font-bold text-2xl pb-5'>More Information</h3>
               <div>
               <p className='font-bold text-lg text-gray-600'>Job Description Link</p>
               <input className='border-2 border-black rounded-lg w-full mb-5 p-2' placeholder='Link'/>
               </div>
               <div>
               <p className='font-bold text-lg text-gray-600'>Company About Us/Profile Link</p>
               <input className='border-2 border-black rounded-lg w-full p-2' placeholder='Link'/>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-center rounded border border-gray-200 h-fit dark:bg-gray-800">
            <QAnswer />
         </div>
      </div>
  );
}