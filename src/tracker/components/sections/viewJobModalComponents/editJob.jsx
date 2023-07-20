import { useState } from 'react'
import { countries } from '../../../../countries'
import { jobTypes } from '../../../../jobTypes'

const jobDetails = {
  jobUrl: 'www.job.com',
  jobSummary: 'This is a job summary',
  jobTitle: 'Software Engineer',
  jobCompany: 'Job Company Ltd'
}

const jobInfo = {
  title: 'Kenya',
  country: 'Kenya',
  type: 'Kenya',
}

const jobTypeInfo = {
    type: 'Remote'
}

function EditJob({setViewState, job}) {
  const [jobData, setJobData] = useState(jobDetails)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', jobData);
    setJobData(jobDetails);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevState) => ({ ...prevState, [name]: value }));
  };

    const [jobState, setJobState] = useState(jobInfo)

    const onChange = (e) => setJobState({ ...jobState, [e.target.name]: e.target.value })

    const [jobType, setJobType] = useState(jobTypeInfo)

    const onJobType = (e) => setJobType({ ...jobType, [e.target.name]: e.target.value })

  const handleUpdate = (e) => {
    console.log('update job')
  };

  const handleExit = (e) => {
    setViewState((prevState) => ({ ...prevState, view: true, edit: false }));
  };


  return (
    <>
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">Edit Job</h1>
    </div>
      <form onSubmit={handleUpdate}>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="jobUrl"
            value={job.job_url}
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
            value={job.job_title}
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
            value={job.job_company}
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
          name='country'
          id='locations'
          value={jobState.country}
          onChange={onChange}
        >
          {countries.map((item) => (
            <option key={item.country_code} value={item.en_short_name}>
              {item.en_short_name}
            </option>
          ))}
        </select>
                <select
          className='col-span-2 appearance-none bg-transparent border border-slate-300 rounded-md focus:outline-none select-no-outline'
          name='type'
          id='type'
          value={jobType.type}
          onChange={onJobType}
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
            name="jobSummary"
            value={job.job_description}
            onChange={handleChange}
            placeholder="Enter job summary"
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
        >Update</button>
        <button 
          type="button"
          onClick={e => handleExit(e)}
          className='col-span-2 bg-gray-900 text-gray-100 pt-2 pb-2 w-full rounded-full tracking-wide
                                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                      shadow-lg'          
        >Exit</button>
        </div>
      </form>
    </>
  )
}

export default EditJob