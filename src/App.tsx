import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition, RadioGroup } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon, ArrowDownTrayIcon, ArrowTopRightOnSquareIcon, CalendarIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon, StopIcon } from '@heroicons/react/24/outline'

import axios from 'axios'

import './App.css'

const sortOptions = [
  { name: 'Newest', href: '#', current: false },
  { name: 'Oldest', href: '#', current: false },
]

const navigation = [
  { name: 'Jobs', href: '#', current: true },
  { name: 'Employers', href: '#', current: false },
  // { name: 'Pricing', href: '#', current: false },
    { name: 'FAQs', href: '#', current: false },
]

const filters = [
  {
    id: 'boards',
    name: 'Job Boards',
    options: [
      { value: 'site:lever.co', label: 'Lever', checked: true },
      { value: 'site:greenhouse.io', label: 'Greenhouse', checked: true },
      { value: 'site:app.dover.io', label: 'Dover', checked: true },
      { value: 'site:jobs.ashbyhq.com', label: 'Ashbyhq', checked: true },
      { value: 'site:personio.de', label: 'Personio', checked: true },
    ],
  },
  {
    id: 'role',
    name: 'Role',
    options: [
      { value: 'engineer', label: 'Engineer', checked: false },
      { value: 'developer', label: 'Developer', checked: false },
    ],
  },
  {
    id: 'speciality',
    name: 'Speciality',
    options: [
      { value: 'react', label: 'React', checked: false },
      { value: 'python', label: 'Python', checked: false },
      { value: 'vue', label: 'Vue', checked: false },
      { value: 'javascript', label: 'Javascript', checked: false },
      { value: 'angular', label: 'Angular', checked: false },
      { value: 'go', label: 'Go', checked: true },
    ],
  },
    {
    id: 'filter',
    name: 'Filter Out',
    options: [
      { value: 'senior', label: 'Senior', checked: false },
      { value: 'junior', label: 'Junior', checked: false },
      { value: 'staff', label: 'Staff', checked: false },
      { value: 'principal', label: 'Principal', checked: false },
      { value: 'lead', label: 'Lead', checked: false },
    ],
  },
]

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
    {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {

  const [selected, setSelected] = useState(plans[0])

  const [modifiedData, setModifiedData] = useState({
    roles: '',
    speciality: 'react',
    filter_out: '',
    after_date: '2022-11-01',
    before_date: ''
  });

  const [jobs, setJobs] = useState([])

  const handleChange = ({ target: { name, value } }) => {
    setModifiedData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/v1/search', {
        ...modifiedData
      });
      setJobs(response.data)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const job = jobs.map(j => (
    <tr key={jobs[j]}>
      <td>{j.role}</td>
      <td>{j.summary}</td>
      <td>{j.job_date}</td>
      <td>
        <a href={j.url} target="_blank" rel="noreferrer"><button>Visit Job</button></a>
      </td>
    </tr>
  )) 

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <Fragment>
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center bg-white text-gray-800 px-2 rounded-full">
                  KG
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
<main>
  <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filter By</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
                                                              <Menu as="div" className="relative inline-block text-left">
                        <div className="shrink-0 text-gray-800">
                        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          View
                          <ArrowTopRightOnSquareIcon
                            className="ml-2 -mr-1 h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                        </div>
                        </Menu>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Discover Remote Jobs</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h2 className="text-lg font-medium text-gray-900">Filter By</h2>
                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                    <Menu as="div" className="relative text-left mt-4">
                        <div className="shrink-0 text-gray-800 text-center">
                        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          Search
                        </Menu.Button>
                        </div>
                        </Menu>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 lg:h-full">
                  {/* <table className="table-auto">
  <tbody>
    <tr>
      <td><input type="checkbox" className="appearance-none checked:bg-blue-500 ..." /></td>
      <td>Role</td>
      <td>Summary</td>
      <td>Job Date</td>
      <td><a><button>Visit</button></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" className="appearance-none checked:bg-blue-500 ..." /></td>
      <td>Role</td>
      <td>Summary</td>
      <td>Job Date</td>
      <td><a><button>Visit</button></a></td>
    </tr>
    <tr>
      <td><input type="checkbox" className="appearance-none checked:bg-blue-500 ..." /></td>
      <td>Role</td>
      <td>Summary</td>
      <td>Job date</td>
      <td><a><button>Visit</button></a></td>
    </tr>
  </tbody>
</table> */}

        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2 my-3">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ checked }) =>
                  `${
                    'bg-white bg-opacity-75 text-gray-800'
                  }
                  relative flex cursor-pointer rounded-lg mx-3 px-5 py-4 shadow-lg shadow-black-500/40 hover:shadow-gray-800/40`
                }
              >
                {() => (
                  <>
                    <div className="w-full items-center grid grid-cols-10">
                      
                      <div className="shrink-0 text-gray-800">
                        <StopIcon className="block h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="items-left col-span-7">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium flex ${
                              'text-gray-800'
                            }`}
                          >
                          <span><CalendarIcon className="mr-1 h-5 w-5 text-gray-800"
                           aria-hidden="true" /></span>
                            {' '}
                            <span>
                              {'Job Dates'}
                            </span>
                            {' '}
                            <span className='mr-1.5 ml-1.5' aria-hidden="true">&middot;</span>
                            {'Role'}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              'text-gray-800'
                            }`}
                          >
                            <span>
                              {'Summary'}
                            </span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                            <Menu as="div" className="relative inline-block text-left">
                        <div className="shrink-0 text-gray-800">
                        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                          View
                          <ArrowTopRightOnSquareIcon
                            className="ml-2 -mr-1 h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                        </div>
                        </Menu>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
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
