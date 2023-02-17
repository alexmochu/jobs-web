import { Fragment, useEffect, useState } from 'react'

import axios from 'axios'

import './App.css'

import List from './components/list'
import Form from './components/form'
import MobileForm from './components/mobileForm'
import Header from './components/header'
import NavBar from './components/navBar'

import { plans, sortOptions, navigation, filters } from './constants'

function App() {
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
      console.log(modifiedData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // handleSubmit()
  },[])

  console.log(jobs)
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
      <NavBar navigation={navigation} />
      <main>
        <div className='bg-white'>
          <div>
            {/* Mobile filter dialog */}
            <MobileForm
              filters={filters}
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
            />
            <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
                  Discover Remote Jobs
                </h1>
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
      </main>
    </Fragment>
  )
}

export default App
