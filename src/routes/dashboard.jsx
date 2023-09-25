import { Link } from 'react-router-dom'
import { featureFlag } from '../../config'

export default function Dashboard() {
  const { qa } = featureFlag
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
            className='flex flex-shrink-0 items-center text-gray-800 px-2'
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
            to={'/dashboard/resumes'}
            aria-current={'page'}
            className='flex flex-shrink-0 items-center text-gray-800 px-2'
          >
            <button
              className='bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg'
            >
              View
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-gray-50 dark:bg-gray-900 h-fit rounded-3xl border-2 px-10 py-10'>
        <div className='flex dark:text-white items-center justify-center mb-5 text-3xl font-bold'>
          Cover Letter Builder
        </div>
        <p className='text-lg dark:text-white'>
          Say goodbye to writer's block and welcome the ease of crafting compelling cover letters with our AI technology powered by OpenAI. Just share essential details like your desired role, job description, and resume/CV, and watch as our AI tools generate personalized, attention-grabbing cover letters. These letters effortlessly highlight your unique qualities and experiences, leaving a lasting impression on potential employers. Gain a competitive edge in the job application process with cover letters that captivate and showcase your best self.
        </p>
        <div className='flex items-center justify-center'>
          <Link
            key={'jobs'}
            to={'/dashboard/cover-letters'}
            aria-current={'page'}
            className='flex flex-shrink-0 items-center text-gray-800 px-2'
          >
            <button
             className='bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg'>
              View
            </button>
          </Link>
        </div>
      </div>
      <div className='bg-gray-50 dark:bg-gray-900 h-fit rounded-3xl border-2 px-10 py-10'>
        <div className='flex dark:text-white items-center justify-center mb-5 text-3xl font-bold'>
          Question & Answer AI Assistant
        </div>
        <p className='text-lg dark:text-white'>
          Our suite of Q&A AI-powered career tools offers comprehensive support for job seekers. 
          Tool 1 utilizes OpenAI assistants to simulate real interview scenarios, refine responses, 
          and enhance interview skills, ensuring users are well-prepared to impress employers and secure their dream jobs. 
          Complementing this, Tool 2 harnesses OpenAI GPT to provide tailored responses to job application questions, saving 
          time and enhancing communication skills. Together, these tools empower individuals to excel in interviews and applications, 
          standing out in today's competitive job market
        </p>
        <div className='flex items-center justify-center'>
          <Link
            key={'jobs'}
            to={'/dashboard/qa'}
            aria-current={'page'}
            className='flex flex-shrink-0 items-center text-gray-800 px-2'
          >
            <button
              disabled={!qa}
              className='bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg'
            >
              {qa ? 'View' : 'Coming Soon'}
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
