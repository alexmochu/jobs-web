import { Fragment } from 'react'

export default function FaqS() {
  return (
    <Fragment>
      <div className='relative' id='home'>
        {/* <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
<div className="blur-[106px] h-32 bg-gradient-to-br from-cyan-800 to-purple-800 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-800 to-sky-600 dark:to-indigo-600"></div>
    </div> */}
        <div className='max-w-7xl pt-20 mx-auto px-6 mt-10 md:px-12 xl:px-6'>
          <div className='relative ml-auto'>
            <div className='lg:w-2/3 mx-auto'>
              <label className='block text-center'>
                <h1 className='text-4xl font-bold tracking-tight mb-2 text-gray-900'>
                  Frequently Asked Questions
                </h1>
              </label>

              <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-7 lg:px-6 text-xl'>
                <div className='grid pt-8 text-left md:gap-16 dark:border-gray-700 md:grid-cols-2'>
                  <div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        What is KG Jobs?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        KG Jobs is a groundbreaking platform that leverages AI technology to streamline the job searching and interview process. We offer a range of AI-powered tools to make your job search more efficient and successful.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        How does KG Jobs work?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        KG Jobs utilizes AI tools powered by OpenAI (GPT-3) to enhance various aspects of your job search, including resume optimization, job searching, cover letter generation, and interview preparation.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        What is the benefit of using AI in the job search process?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        AI technology can help you stand out in a competitive job market by providing expert guidance on resumes, generating personalized cover letters, and offering interview preparation assistance.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        Are the AI-powered tools easy to use?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Yes, our platform is designed to be user-friendly. You don't need to be tech-savvy to make the most of our AI-powered solutions.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        Is my personal information safe with KG Jobs?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        We take data privacy seriously. Your personal information is securely stored and used only for the purpose of providing our services. Please review our privacy policy for more details.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        Is KG Jobs suitable for both job seekers and employers?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        KG Jobs primarily focuses on providing assistance to job seekers. However, we may offer services and features for employers in the future.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        How can I contact KG Jobs if I have questions or need support?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        You can reach out to our customer support team through the "Contact Us" section on our website for assistance with any questions or issues you may have.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        What is Langchain, and how does it relate to KG Jobs?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Langchain is an OpenAI Agent, and it is integrated into KG Jobs to power some of our AI tools, enhancing their capabilities and effectiveness.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        Can I access KG Jobs from anywhere?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Yes, KG Jobs is accessible online, making it available to users from any location with an internet connection.
                      </p>
                      <p className='text-gray-500 dark:text-gray-400'>
                        You can use this version for any purposes, because it is open-source under
                        the MIT license.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        Is KG Jobs a free service?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        KG Jobs offers a combination of free and premium services. Some features may require a subscription or payment.
                      </p>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Additionally, Windster is a project that is still in development, and later
                        it will include both the application, marketing, and e-commerce UI
                        interfaces.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        How do I get started with KG Jobs?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        To get started, simply create an account on our platform, and you'll have access to our suite of AI-powered job search tools.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        Does KG Jobs offer career counseling or job placement services?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        KG Jobs primarily offers AI-powered tools for job seekers. We do not provide one-on-one career counseling or job placement services.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        How often are the AI tools updated and improved?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        We are committed to continuous improvement. Our AI tools are regularly updated to provide the best possible user experience and results.
                      </p>
                    </div>
                    <div className='mb-10'>
                      <h3 className='flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                        <svg
                          className='flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fillRule='evenodd'
                            d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                        Can I cancel my subscription at any time?
                      </h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Yes, you can cancel your subscription at any time, and our customer support team can assist you with the process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
