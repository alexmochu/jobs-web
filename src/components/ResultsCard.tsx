export const ResultsCard = () => {
  return (
    <div className='bg-gray-50 rounded-lg border-2 px-10 py-12'>
      <div className='grid grid-cols-2 gap-4 mb-7'>
        <img
          className='w-20 h-20 rounded-full'
          src='/company.png'
          alt='user avatar'
          width='400'
          height='400'
          loading='lazy'
        />
        <div className='text-right'>
          <h6 className='text-lg font-medium text-gray-700 dark:text-white items-center'>
            11 July, 2023
          </h6>
        </div>
      </div>
      <h3 className='text-3xl font-extrabold'>UI Designer</h3>
      <div className='py-5'>
        <span className='rounded-3xl bg-indigo-500 text-white mr-5 px-3 py-1'>Full time</span>
        <span className='rounded-3xl bg-indigo-500 text-white mr-5 px-3 py-1'>Remote</span>
      </div>
      <p className='py-3 text-xl font-bold'>New York, United States</p>
      <p className='text-lg'>
        Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores
        nemo possimus nesciunt dicta veniam aspernatur quam mollitia. Vitae error, quaerat officia
        delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas
        voluptatem.
      </p>
      <div className='grid grid-cols-2 gap-4 mt-5'>
        <button className='bg-indigo-500 text-white rounded-lg py-5'>Apply</button>
        <button className='border rounded-lg py-5'>Save</button>
      </div>
    </div>
  )
}
