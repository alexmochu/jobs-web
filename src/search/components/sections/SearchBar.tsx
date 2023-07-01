import { useState } from 'react'
import { countries } from './../../../countries'
import './index.css'

const jobInfo = {
  title: '',
  country: '',
  type: '',
}

export const SearchBar = () => {
  const [jobState, setJobState] = useState(jobInfo)

  const onChange = (e) => setJobState({ ...jobState, [e.target.name]: e.target.value })

  return (
    <div className='flex w-full bg-white h-16 pt-2 px-4 rounded-2xl border-2'>
      <div className='w-[30%] pr-5'>
        <input
          className='w-full h-11 focus:outline-none'
          name='title'
          value={jobState.title}
          onChange={onChange}
          placeholder='Job title ....'
        />
      </div>
      <div className='w-[30%] pr-5'>
        <select
          className='w-full appearance-none bg-transparent border-none focus:outline-none select-no-outline'
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
      </div>
      <div className='w-[30%] pr-5'>
        <select
          className='w-full appearance-none bg-transparent border-none focus:outline-none select-no-outline'
          name='type'
          id='type'
          value={jobState.type}
          onChange={onChange}
        >
          <option value='remote'>Remote</option>
          <option value='onsite'>Onsite</option>
          <option value='hybrid'>Hybrid</option>
        </select>
      </div>
      <div className='w-[20%]'>
        <button className='bg-indigo-500 text-white w-full h-11 rounded'>Find Jobs</button>
      </div>
    </div>
  )
}
