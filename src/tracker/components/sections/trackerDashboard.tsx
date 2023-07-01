import { useState } from "react";

export const TrackerDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='grid grid-cols-6 gap-4 mt-10'>
      <div>
        <p className='text-xl mb-3'>Bookmarked</p>
        <button className='bg-gray-300 w-full py-2 text-lg'>+ Add Job</button>
        <div className='w-full'>
          <div className='rounded-2xl p-5 my-3 border bg-gray-50 h-30'>
            <h2 className='text-xl font-bold mb-2'>Google Inc</h2>
            <p className='mb-4 text-gray-500 text-lg'>Senior Software Engineer</p>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <span className='bg-indigo-500 px-6 pl-8 py-2 w-24 text-white rounded-3xl' onClick={openModal}>View</span>
              <div className='text-right'>
                <h6 className='text-lg font-medium flex justify-end text-gray-700 dark:text-white items-center'>
                  <svg 
                     className={`mt-2 ${isOpen ? 'text-indigo-500' : 'text-gray-500'}`}
                     onClick={toggleDropdown}
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <circle cx="12" cy="4" r="2" />
                    <circle cx="12" cy="12" r="2" />
                    <circle cx="12" cy="20" r="2" />
                  </svg>
                </h6>
                {isOpen && (
                  <div className="absolute flex justify-start bg-gray-50 rounded-lg shadow-md mt-4 py-2">
                    <ul className="pl-2 pr-2">
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2">Applied</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2">First Calls</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2">Final Interview</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2">Offer</li>
                      <li className="hover:bg-white hover:text-gray-700 w-28 text-left h-8 border-b-2 mb-2">Rejected</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className='text-xl mb-3'>Applied</p>
        <button className='bg-gray-300 w-full py-2 text-lg'>+ Add Job</button>
      </div>
      <div>
        <p className='text-xl mb-3'>First Calls</p>
        <button className='bg-gray-300 w-full py-2 text-lg'>+ Add Job</button>
      </div>
      <div>
        <p className='text-xl mb-3'>Final Interview</p>
        <button className='bg-gray-300 w-full py-2 text-lg'>+ Add Job</button>
      </div>
      <div>
        <p className='text-xl mb-3'>Offer</p>
        <button className='bg-gray-300 w-full py-2 text-lg'>+ Add Job</button>
      </div>
      <div>
        <p className='text-xl mb-3'>Rejected</p>
        <button className='bg-gray-300 w-full py-2 text-lg'>+ Add Job</button>
      </div>
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
          <div className='relative bg-white p-8 rounded-lg shadow-md'>
            <h3 className='text-2xl font-bold mb-4'>Modal Content</h3>
            <button className='absolute top-2 right-2 text-gray-500' onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M18 6L6 18M6 6l12 12" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {/* Add your modal content here */}
          </div>
        </div>
      )}
    </div>
  )
}
