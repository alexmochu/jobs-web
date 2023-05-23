import { countries } from './../../../countries'
export const SearchBar = () => {
  return (
      <div className='flex w-full bg-white h-16 pt-2 px-4 rounded-2xl border-2'>
        <div className='w-[30%] pr-5'>
            <input className='w-full h-11' placeholder='Job title ....' />
        </div>
        <div className='w-[30%] pr-5'>
            <select className='w-full border-none' name="locations" id="locations">
                {countries.map((item) => (
                    <option key={item.country_code} value="country">{item.en_short_name}</option>
                ))}
            </select>
        </div>
        <div className='w-[30%] pr-5'>
            <select className='w-full border-none' name="type" id="type">
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
                <option value="hybrid">Hybrid</option>
            </select>
        </div>
        <div className='w-[20%]'>
            <button className='bg-indigo-500 text-white w-full h-11 rounded'>Find Jobs</button>
        </div>
      </div>
  );
};