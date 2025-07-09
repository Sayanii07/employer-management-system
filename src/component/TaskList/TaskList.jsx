import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id = 'taskList' className= 'overflow-auto flex items-center justify-start gap-5 h-[55%] w-full  mt-10 flex-nowrap'>
        {data.tasks.map((elem , idx)=>{
            if(elem.active){
                return<AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return<newTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return<CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return<FailedTask key={idx} data={elem}/>
            }
        })
    }
    
    </div>
  )
}

export default TaskList
