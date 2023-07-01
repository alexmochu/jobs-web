import { Fragment } from 'react'
import { PricingCard } from '../components/pricingCard'
import { pricing } from '../constants'

export default function Pricing() {
  return (
    <>
      <Fragment>
        <div className='flex flex-col min-h-screen items-center h-full p-4 m-0'>
          <div className='pt-36 pb-6'>
            <h1 className='text-6xl font-bold tracking-tight text-center text-gray-900'>
              Pricing Plans
            </h1>
            <h3 className='text-center text-lg mt-5'>
              Get 2 months for free by subscribing yearly!
            </h3>
            <div className='mb-4'>
              <ul className='flex flex-wrap text-lg mt-10 font-medium text-center' role='tablist'>
                <li className='mr-2' role='presentation'>
                  <button
                    className='inline-block p-4 border-b-2 rounded-t-lg bg-indigo-500 text-white w-[8rem]'
                    type='button'
                    role='tab'
                    aria-controls='monthly'
                    aria-selected='false'
                  >
                    Monthly
                  </button>
                </li>
                <li className='mr-2' role='presentation'>
                  <button
                    className='w-[8rem] inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                    type='button'
                    role='tab'
                    aria-controls='yearly'
                    aria-selected='false'
                  >
                    Yearly<span>-12%</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-8 pl-10 pt-10 pr-10 pb-5 mx-auto xl:flex-row'>
            {pricing.map((price) => (
              <PricingCard key={price.id} price={price} />
            ))}
          </div>
        </div>
      </Fragment>
    </>
  )
}
