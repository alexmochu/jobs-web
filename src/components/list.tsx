import { Menu, RadioGroup } from '@headlessui/react'
import { ArrowTopRightOnSquareIcon, CalendarIcon } from '@heroicons/react/20/solid'

const List = ({ plans, selected, setSelected }) => {
  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
      <div className='space-y-2 my-3'>
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={() =>
              `${'bg-white bg-opacity-75 text-gray-800'}
                  relative flex cursor-pointer rounded-lg mx-3 px-5 py-4 shadow-lg shadow-black-500/40 hover:shadow-gray-800/40`
            }
          >
            {() => (
              <div className='w-full grid grid-cols-10'>
                <div className='shrink-0 text-gray-800'>
                  {/* <StopIcon className='block h-6 w-6' aria-hidden='true' /> */}
                  <input
                    // id={`filter-${section.id}-${optionIdx}`}
                    // name={`${section.id}[]`}
                    id='new id'
                    name='checkbox'
                    // defaultValue={option.value}
                    type='checkbox'
                    // defaultChecked={option.checked}
                    className='h-4 w-4 rounded border-gray-400 text-indigo-600 focus:ring-indigo-500'
                  />
                </div>
                <div className='items-left col-span-7'>
                  <div className='text-sm'>
                    <RadioGroup.Label as='p' className={`font-medium flex ${'text-gray-800'}`}>
                      <span>
                        <CalendarIcon className='mr-1 h-5 w-5 text-gray-800' aria-hidden='true' />
                      </span>{' '}
                      <span>{'1st April 2023'}</span>{' '}
                      <span className='mr-1.5 ml-1.5' aria-hidden='true'>
                        &middot;
                      </span>
                      {'Senior Javascript Software Engineer'}
                    </RadioGroup.Label>
                    <RadioGroup.Description
                      as='span'
                      className={`flex mt-2 pr-3 ${'text-gray-800'}`}
                    >
                      <span>
                        {
                          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore tapasas cupiditate...'
                        }
                      </span>
                    </RadioGroup.Description>
                  </div>
                </div>
                <Menu as='div' className='relative inline-block text-left'>
                  <div className='shrink-0 grid text-gray-800'>
                    <Menu.Button className='inline-flex w-full justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                      View
                      <ArrowTopRightOnSquareIcon
                        className='ml-2 -mr-1 h-5 w-5 text-white'
                        aria-hidden='true'
                      />
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

export default List
