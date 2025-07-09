import React from 'react'

const AcceptTask = ({data}) => {
  console.log();
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
            <div className='flex justify-betweenmt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm mt-2 rounded '>Mark as completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm mt-2 rounded ml-2'>Mark as failed</button>
            </div>
    </div>
  )
}

export default AcceptTask
