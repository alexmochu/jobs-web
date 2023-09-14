import { useState } from 'react'
import Cover from '../../coverletter/coverletter'

function ViewCoverLetter({closeJobModal, applicationState}) {
  const [loading, setLoading] = useState(false)

  return (
    <div className='w-[720px]'>
        {loading ? (
                <div className='flex justify-center items-center pt-[200px]'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
      <div className='flex'>
        <Cover state={applicationState} />
      </div>)}
    </div>
  )
}

export default ViewCoverLetter