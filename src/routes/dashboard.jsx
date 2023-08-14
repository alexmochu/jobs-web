import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='relative dark:bg-gray-900 min-h-screen'>
    <div className='grid grid-cols-1  sm:grid-cols-2 gap-3 mb-4 rounded'>
      <div className='bg-gray-50 dark:bg-gray-900 h-fit rounded-3xl border-2 px-10 py-10'>
        <div className='flex items-center dark:text-white justify-center mb-5 text-3xl font-bold'>
          Jobs Search & Tracker
        </div>
        <p className='text-lg dark:text-white'>
          Revolutionize your job search and effortlessly track applications with our comprehensive
          AI-powered toolkit. Utilizing advanced OpenAI(gpt) and Claude to not only turbocharge your
          job search but also provide a built-in application tracker. Stay organized, manage your
          applications, and gain valuable insights to maximize your chances of success. Experience
          the power of AI for faster results and streamlined job hunting.
        </p>
        <div className='flex items-center justify-center'>
          <Link
            key={'jobs'}
            to={'/dashboard/job-tracker'}
            aria-current={'page'}
            className='flex dark:bg-gray-900 flex-shrink-0 items-center bg-white text-gray-800 px-2'
          >
            <button className='bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg'>
              View
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-gray-50 dark:bg-gray-900 h-fit rounded-3xl border-2 px-10 py-10'>
        <div className='flex items-center dark:text-white justify-center mb-5 text-3xl font-bold'>
          Resume Builder
        </div>
        <p className='text-lg dark:text-white'>
          Elevate your resume to new heights with our AI-driven solution. Crafted by OpenAI(gpt) and
          Claude, our AI tools analyze industry trends, optimize keywords, and provide expert
          suggestions to ensure your resume stands out from the crowd. Impress employers with a
          professionally tailored resume that highlights your skills and achievements, increasing
          your chances of landing that coveted job interview.
        </p>
        <div className='flex items-center justify-center'>
          <Link
            key={'jobs'}
            to={'/dashboard/resume'}
            aria-current={'page'}
            className='flex dark:bg-gray-900 flex-shrink-0 items-center bg-white text-gray-800 px-2'
          >
            <button
              disabled
              className='bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg'
            >
              Coming Soon
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-gray-50 dark:bg-gray-900 h-fit rounded-3xl border-2 px-10 py-10'>
        <div className='flex dark:text-white items-center justify-center mb-5 text-3xl font-bold'>
          Cover Letter Builder
        </div>
        <p className='text-lg dark:text-white'>
          Leave behind the frustration of writer's block and let our AI technology (OpenAI(gpt) and
          Claude) generate compelling cover letters for you. Simply provide some basic information,
          and our AI tools will create personalized, attention-grabbing cover letters that captivate
          employers. Showcase your unique qualities and experiences effortlessly, giving you a
          competitive edge in the job application process.
        </p>
        <div className='flex items-center justify-center'>
          <Link
            key={'jobs'}
            to={'/dashboard/cover-letter'}
            aria-current={'page'}
            className='flex dark:bg-gray-900 flex-shrink-0 items-center bg-white text-gray-800 px-2'
          >
            <button
            disabled
             className='bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg'>
              Coming soon
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-gray-50 dark:bg-gray-900 h-fit rounded-3xl border-2 px-10 py-10'>
        <div className='flex dark:text-white items-center justify-center mb-5 text-3xl font-bold'>
          Question & Answer AI Assistant
        </div>
        <p className='text-lg dark:text-white'>
          Prepare to ace your interviews and land your dream job with our AI-powered interview
          tools. Our OpenAI(gpt) and Claude AI assistants offer interactive question and answer
          sessions, simulating real interview scenarios. Gain confidence, refine your responses, and
          enhance your interview skills. Be fully prepared to impress employers and secure the job
          you desire with our powerful AI interview tools.
        </p>
        <div className='flex items-center justify-center'>
          <Link
            key={'jobs'}
            to={'/dashboard/qa'}
            aria-current={'page'}
            className='flex flex-shrink-0 items-center dark:bg-gray-900 bg-white text-gray-800 px-2'
          >
            <button
              disabled
              className='bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg'
            >
              Coming Soon
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
