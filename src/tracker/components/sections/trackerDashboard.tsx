export const TrackerDashboard = () => {
  return (
    <div className='grid grid-cols-6 gap-4 mt-10'>
      <div>
        <p className='text-xl mb-3'>Bookmarked</p>
        <button className='bg-gray-300 w-full py-2 text-lg'>+ Add Job</button>
        <div className='w-full'>
          <div className='rounded-2xl p-5 my-3 border bg-gray-50 h-30'>
            <h2 className='text-xl font-bold mb-2'>Google Inc</h2>
            <p className='mb-4 text-gray-500 text-lg'>Senior Software Engineer</p>
            <span className='bg-indigo-500 px-2 py-2 text-white rounded-3xl'>3 days</span>
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
        <p className='text-xl mb-3'>Didn't Work Out / Rejected</p>
        <button className='bg-gray-300 w-full py-2 text-lg'>+ Add Job</button>
      </div>
    </div>
  )
}
