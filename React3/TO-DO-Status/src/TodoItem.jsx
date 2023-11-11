



import React from "react";
import './style.css'

const TodoItem=({id,title,status,deleteItem,toggleItem})=>{

    const handleDeleteButtonClick=()=>{
        deleteItem(id)
    }

    const handleToggleButtonClick=()=>{
        toggleItem(id)
    }

    return(
        <div className="todo-item">
            <p>{title}</p>
            <p>{status ? 'Completed':'Not completed'}</p>
            <button className="btn" onClick={handleDeleteButtonClick}>Delete</button>
            <button className="btn" onClick={handleToggleButtonClick}>Toggle</button>

        </div>
    )
}
export default TodoItem