import { Fragment } from 'react'
import { PricingCard } from '../components/pricingCard'
import { pricing } from '../constants'

export default function Pricing() {
  return (
    <>
    <Fragment>
      {/* <main>
        <div className='bg-white'>
          <div>
            <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
              <div className='flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
                  Pricing
                </h1>
              </div>
            </main>
          </div>
        </div>
      </main> */}
          <div className='flex flex-col min-h-screen items-center h-full p-4 m-0'>
            <div className='pt-24 pb-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900'>
                  Pricing Plans
                </h1>
                <h3>Get 2 months for free by subscribing yearly!</h3>
                        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 rounded-t-lg" type="button" role="tab" aria-controls="monthly" aria-selected="false">Monthly</button>
                </li>
                <li className="mr-2" role="presentation">
                    <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" type="button" role="tab" aria-controls="yearly" aria-selected="false">Yearly</button>
                </li>
            </ul>
        </div>
              </div>
      <div className='flex flex-col gap-8 pl-10 pt-10 pr-10 pb-5 mx-auto xl:flex-row'>
        {pricing.map(price => (
          <PricingCard key={price.id} price={price}/>
        ))}
      </div>
    </div>
    </Fragment>
    </>
  );
}