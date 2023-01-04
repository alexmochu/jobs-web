import { Disclosure, Menu } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

const Form = ({ filters }) => {
  return (
    <form className='hidden lg:block'>
      <h2 className='text-lg font-medium text-gray-900'>Filter By</h2>
      {filters.map((section) => (
        <Disclosure as='div' key={section.id} className='border-b border-gray-200 py-6'>
          {({ open }) => (
            <>
              <h3 className='-my-3 flow-root'>
                <Disclosure.Button className='flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500'>
                  <span className='font-medium text-gray-900'>{section.name}</span>
                  <span className='ml-6 flex items-center'>
                    {open ? (
                      <MinusIcon className='h-5 w-5' aria-hidden='true' />
                    ) : (
                      <PlusIcon className='h-5 w-5' aria-hidden='true' />
                    )}
                  </span>
                </Disclosure.Button>
              </h3>
              <Disclosure.Panel className='pt-6'>
                <div className='space-y-4'>
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className='flex items-center'>
                      <input
                        id={`filter-${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type='checkbox'
                        defaultChecked={option.checked}
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                      />
                      <label
                        htmlFor={`filter-${section.id}-${optionIdx}`}
                        className='ml-3 text-sm text-gray-600'
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
      <Menu as='div' className='relative text-left mt-4'>
        <div className='shrink-0 text-gray-800 text-center'>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            Search
          </Menu.Button>
        </div>
      </Menu>
    </form>
  )
}

export default Form
