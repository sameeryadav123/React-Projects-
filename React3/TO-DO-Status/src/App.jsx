
import React,{useState} from "react"
import TodoList from "./TodoList"
import Todo from './Todo'
import TodoItem from "./TodoItem"
import './style.css'

const App=()=>{
    const [taskList,setTaskList]=useState([])

    const addItme=(newTask)=>{
        const updatedTaskList=[...taskList,newTask]
        setTaskList(updatedTaskList)
    }

    const deleteItem=(taskId)=>{
        const updatedTaskList=taskList.filter((task)=> task.id !== taskId)
        setTaskList(updatedTaskList)
    }

    const toggleItem=(taskId)=>{
        const updatedTaskList=taskList.filter((task)=>{
            if(task.id === taskId){
                task.status = ! task.status
            }
            return task
        })
        setTaskList(updatedTaskList)
    }
    return(
        <>
<div className="todo-container">

<div className="add-todo">

        <Todo addItme={addItme} />
</div>
        <div>

    
        <div className="todo-list">

        {taskList.map((task)=>(
            <div className="task-item">

            <TodoItem className='todoItems' key={task.id} {...task} deleteItem={deleteItem} toggleItem={toggleItem}/>

            </div>
        ))}
        </div>
        </div>
</div>
        </>
    )
}

export default App