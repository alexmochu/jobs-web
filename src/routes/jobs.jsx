import { Fragment, useEffect, useState } from 'react'

import axios from 'axios'
import cors from 'cors'


import List from '../components/list'
import Form from '../components/form'
import MobileForm from '../components/mobileForm'
import Header from '../components/header'
import NavBar from '../components/navBar'

import { plans, sortOptions, navigation, filters } from '../constants'

function Jobs() {
  const [selected, setSelected] = useState(plans[0])

  const [modifiedData, setModifiedData] = useState({
    roles: '',
    speciality: 'react',
    filter_out: '',
    after_date: '2022-11-01',
    before_date: '',
  })

  const [jobs, setJobs] = useState([])


  const handleChange = ({ target: { name, value } }) => {
    setModifiedData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/search', {
        ...modifiedData,
      })
      setJobs(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // handleSubmit()
  },[])

  const job = jobs.map((j) => (
    <tr key={jobs[j]}>
      <td>{j.role}</td>
      <td>{j.summary}</td>
      <td>{j.job_date}</td>
      <td>
        <a href={j.url} target='_blank' rel='noreferrer'>
          <button>Visit Job</button>
        </a>
      </td>
    </tr>
  ))

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <Fragment>

 <div className="relative" id="home">
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
<div className="blur-[106px] h-32 bg-gradient-to-br from-cyan-800 to-purple-800 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-800 to-sky-600 dark:to-indigo-600"></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-20 ml-auto">
            <div className="text-center mx-auto">
          <label className="block">
            <h1 className='text-4xl font-bold tracking-tight text-gray-900'>Discover remote jobs</h1>
          </label>
                <div className="flex flex-wrap justify-center gap-y-4 gap-x-6">



            <MobileForm
              filters={filters}
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
            />
            <main className='mx-auto sm:px-6 lg:px-8'>
              <div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
                <Header sortOptions={sortOptions} setMobileFiltersOpen={setMobileFiltersOpen} />
              </div>
              <section aria-labelledby='products-heading' className='pt-6 pb-24'>
                <h2 id='products-heading' className='sr-only'>
                  Products
                </h2>
                <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4'>
                  {/* Filters */}
                  <Form filters={filters} />
                  {/* Product grid */}
                  <div className='lg:col-span-3'>
                    <div className='h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full'>
                      <List plans={plans} selected={selected} setSelected={setSelected} jobs={jobs} />
                    </div>
                    {/* /End replace */}
                  </div>
                </div>
              </section>
            </main>


                </div>
            </div>
        </div>
    </div>
</div>

    </Fragment>
  )
}

export default Jobs
