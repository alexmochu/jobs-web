import { useState } from 'react'
import { countries } from './../../../countries'
import { jobTypes } from './../../../jobTypes'
import Queries from '../../../api/queries'

const jobDetails = {
  jobUrl: '',
  jobDescription: '',
  jobTitle: '',
  jobCompany: '',
  jobLocation: '',
  jobType: '',
  applicationState: 'bookmarked',
}

function TrackJobModal() {
  const [jobData, setJobData] = useState(jobDetails)

  const [error, setError] = useState(jobDetails)

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { jobTitle, jobCompany } = jobData
    if (jobTitle.trim() === '') {
      setError({ ...error, jobTitle: 'Job title can\'t be blank' })
    } else if (jobCompany.trim() === '') {
      setError({ ...error, jobCompany: 'Job company can\'t be blank' })
    } else {
      // Handle form submission here
      setLoading(true)
      await Queries.createJob(jobData)
      setLoading(false)

      // Reset form
      setJobData(jobDetails)
      setError(jobDetails)
    }    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Track Job</h1>
    </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="jobUrl"
            value={jobData.jobUrl}
            onChange={handleChange}
            placeholder="Enter job posting url"
            className={`col-span-4 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500  ${
                              error ? 'border-red-500' : ''
                            }`}
          />
        </div>
        <div>
          <input
            name="jobTitle"
            value={jobData.jobTitle}
            onChange={handleChange}
            placeholder="Enter job title"
            className={`mt-1 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
          />
        </div>
        <div>
          <input
            name="jobCompany"
            value={jobData.jobCompany}
            onChange={handleChange}
            placeholder="Enter job company"
            className={`mt-1 mb-4 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
        <select
          className='col-span-2 appearance-none bg-transparent border border-slate-300 rounded-md focus:outline-none select-no-outline'
          name='jobLocation'
          id='locations'
          value={jobData.jobLocation}
          onChange={handleChange}
        >
          {countries.map((item) => (
            <option key={item.country_code} value={item.en_short_name}>
              {item.en_short_name}
            </option>
          ))}
        </select>
                <select
          className='col-span-2 appearance-none bg-transparent border border-slate-300 rounded-md focus:outline-none select-no-outline'
          name='jobType'
          id='type'
          value={jobData.jobType}
          onChange={handleChange}
        >
          {jobTypes.map((item) => (
            <option key={item.type} value={item.type}>
              {item.type}
            </option>
          ))}
        </select>
        </div>
        <div>
          <textarea
            name="jobDescription"
            value={jobData.jobDescription}
            onChange={handleChange}
            placeholder="Enter job description"
            className={`mt-1 mb-4 h-48 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
        <button 
          type="submit"
          className='col-span-2 bg-indigo-500 text-gray-100 pt-2 pb-2 w-full rounded-full tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                      shadow-lg'          
        >Submit</button>
        </div>
      </form>
    </>
  )
}

export default TrackJobModal