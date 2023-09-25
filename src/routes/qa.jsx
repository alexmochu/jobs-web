import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialState = {
  question: '',
  linkOne: '',
  linkTwo: '',
}

export default function QA() {
  const [state, setState] = useState(initialState)
  const onChange = (e) => setState({ ...state, [e.target.name]: e.target.value })

  return (
<div className='grid grid-cols-2 h-screen gap-4 mb-4'>
  <div className='flex flex-col justify-center items-center rounded border border-gray-200 pl-5 pr-5 dark:bg-gray-800'>
    <h3 className='font-bold text-3xl pb-5 mt-[-200px]'>Job Interview Mastery Assistant</h3>
    <p className='text-lg'>Elevate Your Interview Skills with AI-Powered Simulations.</p>
    <p className='text-center mb-5 text-lg'>Simulate real interview scenarios, refine responses, and enhance interview skills, ensuring users are well-prepared to impress employers and secure their dream jobs.</p>
    <Link
      key={'jobs'}
            to={'/dashboard/qa/assistant'}
            aria-current={'page'}
            className='flex flex-shrink-0 items-center text-gray-800 px-2'
          >
    <button 
      className='col-span-2 bg-indigo-500 text-gray-100 pt-2 pb-2 w-[100px] rounded-full tracking-wide
                                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                        shadow-lg'
    >View</button>
    </Link>
  </div>
  <div className='flex flex-col justify-center items-center rounded border border-gray-200 pl-5 pr-5 dark:bg-gray-800'>
    <h3 className='font-bold text-3xl pb-5 mt-[-200px]'>Job Application Response Optimizer</h3>
    <p className='text-lg'>Craft Perfect Answers to Land Your Dream Job.</p>
    <p className='text-center mb-5 text-lg'>Harnesses OpenAI GPT to provide tailored responses to job application questions, saving time and enhancing communication skills.</p>
    <Link
            key={'jobs'}
            to={'/dashboard/qa/optimizer'}
            aria-current={'page'}
            className='flex flex-shrink-0 items-center text-gray-800 px-2'
          >
    <button
      className='col-span-2 bg-gray-900 text-white pt-2 pb-2 w-[100px] rounded-full tracking-wide
                                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                        shadow-lg'
    >View</button>
    </Link>
  </div>
</div>
  )
}
