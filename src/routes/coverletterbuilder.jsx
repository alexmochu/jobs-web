import { useState } from 'react'
import Queries from '../api/queries'
import Cover from '../coverletter/coverletter'
import { useParams } from 'react-router-dom'
import { userState } from '../main'

export default function CoverLetter() {
  const { id } = useParams();
  const { user, setUser } = userState()
  const { currentUserLetters } = user 
  let letter = currentUserLetters.filter((item) => item.letter_id === id)
  let letterIndex = currentUserLetters.findIndex((item) => item.letter_id === id);

  const [state, setState] = useState(currentUserLetters[letterIndex])
  const [coverLetter, setCoverLetterState] = useState(state)
  const onChange = (e) => setState({ ...state, [e.target.name]: e.target.value })

  const saveState = async () => {
    await Queries.updateLetter({...state})
    setCoverLetterState(state)
    const updatedCurrentUserLetters = [...currentUserLetters];
    updatedCurrentUserLetters[letterIndex] = state;

    await setUser({
        ...user,
        showToast: true,
        toastMessage: 'Your letter has been updated successfully.',
        currentUserLetters: updatedCurrentUserLetters
      })
  }

  const copyData = () => {
    // Convert the dataState to a plain text string
    const plainText = coverLetter.letterDetails.toString(); // Replace toString() with the appropriate method to convert your data to plain text

    // Create a temporary textarea element to copy the plain text to the clipboard
    const textarea = document.createElement('textarea');
    textarea.value = plainText;
    document.body.appendChild(textarea);
    textarea.select();

    // Copy plain text to the clipboard
    navigator.clipboard.writeText(plainText)
      .then(() => {
        console.log('Text data copied to clipboard:\n' + plainText);
      })
      .catch((err) => {
        console.error('Failed to copy text data: ', err);
      });

    // Remove the temporary textarea element
    document.body.removeChild(textarea);
  };

  return (
    <div className='grid grid-cols-2 gap-4 mb-4'>
      <div className='rounded border border-gray-200 pl-5 pr-5 h-fit dark:bg-gray-800'>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-4xl py-5 dark:text-white">{`${letter[0].letter_title} cover letter`}</h2>
            <button onClick={() => copyData()} className="flex text-white bg-gray-900 items-center space-x-2 border rounded-md px-5 py-2">
              <span>Copy</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5h6a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 3h6a2 2 0 012 2v12a2 2 0 01-2 2h-6a2 2 0 01-2-2V5a2 2 0 012-2z"
                  />
                </svg>
              </span>
            </button>
          </div>
        <div className='paper inline mx-auto p-3'>
          <h3 className='dark:text-white font-bold text-2xl'>Letter Details</h3>
          <hr className='my-4 border-t-4 border-gray-900'/>
          <div>
            <textarea
              className='border-2 border-black rounded-lg w-full h-[750px] p-2'
              name='letter_description'
              value={state.letter_description}
              onChange={onChange}
              placeholder='Letter Details'
            ></textarea>
          </div>
        </div>
        <div>
            <button onClick={() => saveState()}  className='border mb-5 bg-indigo-500 text-white rounded-md px-5 py-2 dark:text-white'>Save</button>
        </div>
      </div>
      <div className='flex items-center justify-center rounded border border-gray-200 h-fit dark:bg-gray-800'>
        <Cover state={coverLetter} />
      </div>
    </div>
  )
}
