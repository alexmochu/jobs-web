import { useState } from 'react'
import Queries from '../../api/queries'
import { userState } from '../../main'

function DeleteCoverLetter({closeJobModal, applicationState}) {
  const { user, setUser } = userState()

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
      // Handle form submission here
      setLoading(true)
      const response = await Queries.deleteLetter(applicationState.id)
      await setUser({
        ...user,
        showToast: true,
        toastMessage: 'Your cover letter has been deleted successfully.',
        currentUserLetters: user.currentUserLetters.filter(letter => letter.letter_id !== response.letter.letter_id)
      })
      closeJobModal()
      setLoading(false)

      // Reset form 
  };

  return (
    <div className='h-[280px]'>
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Delete Cover Letter</h1>
    </div>
        {loading ? (
                <div className='flex justify-center items-center pt-[80px]'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                </div>
              ) : (
      <form 
      onSubmit={handleSubmit}
      >
        <div className='flex flex-col items-center'>
          <h1
            name="jobSummary"
            className={`block w-full px-3 bg-white text-red-600 text-center`}
          >
          {'Are you sure you want to delete this cover letter: '} <span className='text-black'>{applicationState.title}</span>{'.'}</h1>
        <h1
            name="jobSummary"
            className={`mb-9 block w-full px-3 bg-white text-red-600 text-center`}
          >
          {'This action is irreversible and the item will be permanently removed from the system. Please confirm your decision.'}</h1>
        </div>
        <div className="grid grid-cols-4 gap-4">
        <button 
          type="submit"
          className='col-span-2 bg-red-600 text-gray-100 pt-2 pb-2 w-full rounded-full tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                      shadow-lg'          
        >Yes</button>
        <button 
          type="button"
          className='col-span-2 bg-gray-900 text-gray-100 pt-2 pb-2 w-full rounded-full tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                      shadow-lg'          
        >No</button>
        </div>
      </form>)}
    </div>
  )
}

export default DeleteCoverLetter