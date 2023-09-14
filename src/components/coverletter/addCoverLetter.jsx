import { useState } from 'react'
import Queries from '../../api/queries'
import { userState } from '../../main'

const letterDetails = {
  letterTitle: '',
  letterDescription: ''
}

function CreateResume({closeJobModal}) {
  const { user, setUser } = userState()
  const [letterData, setLetterData] = useState(letterDetails)

  const [error, setError] = useState(letterDetails)

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { letterTitle } = letterData
    if (letterTitle.trim() === '') {
      setError({ ...error, coverTitle: 'Cover letter name can\'t be blank' })
    } else {
      // Handle form submission here
      setLoading(true)
      const response = await Queries.createLetter({...letterData})
      await setUser({
        ...user,
        showToast: true,
        toastMessage: 'Your letter has been added successfully.',
        currentUserLetters: [
          response.letter,
          ...user.currentUserLetters]
      })
      closeJobModal()
      setLoading(false)

      // Reset form
      setLetterData(letterDetails)
      setError(letterDetails)
    }    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLetterData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className='h-[180px]'>
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Create Cover Letter</h1>
    </div>
      {loading ? (
                <div className='flex justify-center items-center pt-[20px]'>
       <div className='animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600'></div>
                 </div>
        ) :
      <form 
      onSubmit={handleSubmit}
      >
        <h4>Cover Letter Name</h4>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              name="letterTitle"
              value={letterData.letterTitle}
              onChange={handleChange}
              placeholder="Enter cover leter name"
              className={`col-span-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                              invalid:border-pink-500 invalid:text-pink-600
                              focus:invalid:border-pink-500 focus:invalid:ring-pink-500  ${
                                error ? 'border-red-500' : ''
                              }`}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
          <button 
            type="submit"
            className='col-span-2 bg-indigo-500 text-gray-100 pt-2 pb-2 w-[100px] rounded-full tracking-wide
                                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                        shadow-lg'          
          >Create</button>
          </div>
      </form>}
    </div>
  )
}

export default CreateResume