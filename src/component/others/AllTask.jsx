import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)

    return (
        <div className='bg-[#1C1C1C] p-5 mt-5 rounded h-80'>
            <div className='bg-red-400 mt-3 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/2 rounded'>Employee Name</h2>
                <h2 className='w-1/2 rounded'>New Task</h2>
                <h2 className='w-1/2 rounded'>Active Task</h2>
                <h2 className='w-1/2 rounded'>Completed Task</h2>
                <h2 className='w-1/2 rounded'>Failed Task</h2>
            </div>
            <div className='h-[80%] overflow-auto'>
                {userData.map(function (elem,idx){
                    return (
                        <div key = {idx} className=' border-2 border-emerald-500 mt-3 py-2 px-4 flex justify-between rounded'>
                            <h2 className='w-1/2 rounded'>{elem.firstName}</h2>
                            <h2 className='w-1/2 text-blue-600 rounded'>{elem.taskCount.newtask}</h2>
                            <h2 className='w-1/2 text-yellow-400 rounded'>{elem.taskCount.active}</h2>
                            <h2 className='w-1/2 text-green-8 00 rounded'>{elem.taskCount.completed}</h2>
                            <h2 className='w-1/2  text-red-600 rounded'>{elem.taskCount.failed}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllTask
