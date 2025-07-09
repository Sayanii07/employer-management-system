import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const[userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const[taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')

    const[newtask, setNewTask]= useState({})

    const submitHandler = (e)=>{
        e.preventDefault()

        setNewTask({taskTitle, taskDescription, taskDate, category,active:false, newTask: true, failed:false, completed:false })
        const data = userData


        data.forEach(function(elem){
            if(assignTo == elem.firstName ){
                elem.tasks.push(newtask)
                elem.taskCount.newtask = elem.taskCount.newtask + 1
                
            }
        })
        setUserData(data)
        
        console.log(data);

        setTaskTitle('')
        setCategory('')
        setAssignTo('')
        setTaskDate('')
        setTaskDescription('')
}
  return (
    <div>
      <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>
            <form onSubmit = {(e)=>{
                submitHandler(e)
            }} className ='flex flex-wrap w-full  p-10 items-start justify-between '>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                        value = {taskTitle}
                        onChange= {(e) => {
                            setTaskTitle(e.target.value)
                        }} 
                        className='text-sm py-1 px-2 w-4/5 rounded mt-1 outline-none bg-transparent border-[1px]' type="text" placeholder='Make a UI design'></input>
                     </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 mt-3' >date</h3>
                        <input 
                        value = {taskDate}
                        onChange= {(e) => {
                            setTaskDate(e.target.value)
                        }}
                        className='text-sm py-1 px-2 w-4/5 rounded mt-1 outline-none bg-transparent border-[1px]' type ="date"></input>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Assign to</h3>
                        <input
                        value = {assignTo}
                        onChange= {(e) => {
                            setAssignTo(e.target.value)
                        }}
                          className='text-sm py-1 px-2 w-4/5 rounded mt-1 outline-none bg-transparent border-[1px]' type ='text' placeholder="employee name"></input>
                    </div> 

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5 mt-3'>Category</h3>
                        <input 
                        value = {category}
                        onChange= {(e) => {
                            setCategory(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 mt-1 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='design, dev,etc'></input>
                    </div>

                </div>

                <div className='w-1/2 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-1'>Description</h3>
                <textarea
                value = {taskDescription}
                onChange= {(e) => {
                    setTaskDescription(e.target.value)
                }}
                 className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" id="" name=""></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-5 w-full'>Create Task</button>

                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateTask
