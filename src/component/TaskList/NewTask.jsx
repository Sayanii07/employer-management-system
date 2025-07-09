import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-[87%] w-[300px] p-6 bg-red-400 rounded-xl'>
            <div className='flex justify-between'>
                <h3 className='bg-red-600 text-sm  px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='font-semibold text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-2'>
                {data.description}
            </p>
            <div className='mt-2'>
                <button className=' bg-blue-400 rounded w-full text-m'>Accept task</button>
            </div>
        </div>

  )
}

export default NewTask
