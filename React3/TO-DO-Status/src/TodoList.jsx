import React  from "react";
import TodoItem from "./TodoItem";
import './style.css'
const TodoList=({taskList,deleteItem,toggleItem})=>{

    return(
        <div className="container-list">
        <div className="todo-list">

            <h1>List of Task</h1>
            {taskList.map((task)=>(
                <div>
              
                
                 <TodoItem   key={task.id} {...task} deleteItem={deleteItem} toggleItem={toggleItem} />
                </div>
            ))}
        </div>
        </div>
    )
}

export default  TodoList