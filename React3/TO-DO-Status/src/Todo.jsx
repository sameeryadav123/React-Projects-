
import React,{useState} from "react"
import './style.css'
const Todo=({addItme})=>{
    const [text,setText]=useState('')

    const handleChange=(e)=>{
        setText(e.target.value)
    }

    const handleAddButtonClick=()=>{
        const newTask={
            id:Date.now()+Math.random()+text,
            title:text,
            status:false
        }
        addItme(newTask)
    }
    return(
        <div>

            <h1>Todo App</h1>
        <div className="add-to">
            <input  id='task-input'  value={text} placeholder="add TO do here" onChange={handleChange}/>
            <button  className="btn" onClick={handleAddButtonClick}>Add To</button>
        </div>
        </div>
    )
}
export default Todo