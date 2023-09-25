import { useState, useEffect } from 'react'
import { Link, } from 'react-router-dom'

const data = [
    {
        id: 1,
        course: 'Javascript',
    },
    {
        id: 2,
        course: 'Python'
    },
    {
        id: 3,
        course: 'Node.js'
    },
    {
        id: 4,
        course: 'React.js'
    },
    {
        id: 5,
        course: 'Flask'
    },
    {
        id: 6,
        course: 'SQL'
    },
    {
        id: 7,
        course: 'NoSQL'
    },
    {
        id: 8,
        course: 'PostgreSQL'
    },
    {
        id: 9,
        course: 'MySQL'
    },
    {
        id: 10,
        course: 'MongoDB'
    }
]

export default function Assistant() {
  return (
    <div className='mb-4'>
      <div className='pl-5 pr-5 h-fit dark:bg-gray-800'>
        <div className="flex justify-between pb-6">
          <div className="flex justify-start">
            <h1 className='text-4xl dark:text-white font-bold tracking-tight text-gray-900 mb-6'>
              Job Interview Mastery Assistant
            </h1>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {data.map((item, index) => (
            <div key={index}  className="border border-gray-300 rounded-lg mb-5">
            <h3 className='px-[20px] py-[10px] text-2xl font-bold'>{item.course}</h3>
            <hr/>
            <p className='px-[20px] py-[10px] text-lg text-left'>
                {`Simulate real `}
                <span className='font-bold' >{item.course }</span>
                {` interview scenarios, ask questions, refine responses, and enhance your interview skills.`}
            </p>
          <div className="grid grid-cols-4">
          <button 
            type="submit"
            className='col-span-2 bg-indigo-500 text-gray-100 pt-2 pb-2 w-fill tracking-wide text-lg
                                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                        shadow-lg'          
          >Ask Questions</button>
          <button 
            type="submit"
            className='col-span-2 text-lg bg-gray-900 text-white pt-2 pb-2 w-fill tracking-wide
                                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                        shadow-lg'          
          >Simulate Interview</button>
          </div>
            </div>
            ))}
          </div>
      </div>
    </div>
  )
}
