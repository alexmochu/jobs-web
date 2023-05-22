import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-3 h-full mb-4 rounded dark:bg-gray-800">
      <div className="bg-gray-50 h-fit rounded-3xl border-2 px-10 py-10">
        <div className="flex items-center justify-center mb-5 text-3xl font-bold">Jobs Search & Tracker</div>
        <p className="text-lg">Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem</p>
        <div className="flex items-center justify-center">
          <Link
            key={'jobs'}
            to={'/dashboard/jobs'}
                  aria-current={'page'}
                className='flex flex-shrink-0 items-center bg-white text-gray-800 px-2'>
            <button className="bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg">View</button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-50 h-fit rounded-3xl border-2 px-10 py-10">
        <div className="flex items-center justify-center mb-5 text-3xl font-bold">Resume Builder</div>
        <p className="text-lg">Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem</p>
        <div className="flex items-center justify-center">
          <Link
            key={'jobs'}
            to={'/dashboard/resume'}
                  aria-current={'page'}
                className='flex flex-shrink-0 items-center bg-white text-gray-800 px-2'>
            <button className="bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg">View</button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-50 h-fit rounded-3xl border-2 px-10 py-10">
        <div className="flex items-center justify-center mb-5 text-3xl font-bold">Cover Letter Builder</div>
        <p className="text-lg">Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem</p>
        <div className="flex items-center justify-center">
          <Link
            key={'jobs'}
            to={'/dashboard/cover-letter'}
                  aria-current={'page'}
                className='flex flex-shrink-0 items-center bg-white text-gray-800 px-2'>
            <button className="bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg">View</button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-50 h-fit rounded-3xl border-2 px-10 py-10">
        <div className="flex items-center justify-center mb-5 text-3xl font-bold">Question & Answer AI Assistant</div>
        <p className="text-lg">Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. Vitae error, quaerat officia delectus voluptatibus explicabo quo pariatur impedit, at reprehenderit aliquam a ipsum quas voluptatem</p>
        <div className="flex items-center justify-center">
          <Link
            key={'jobs'}
            to={'/dashboard/qa'}
                  aria-current={'page'}
                className='flex flex-shrink-0 items-center bg-white text-gray-800 px-2'>
            <button className="bg-indigo-500 rounded-3xl px-10 py-3 mt-5 text-white text-lg">View</button>
          </Link>
        </div>
      </div>
      </div>
  );
}