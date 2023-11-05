
import React from "react";

const App=()=>{

const [text,setText]=React.useState('')
const [todoList,setTodoList]=React.useState([])

const handleChange=(event)=>{
  setText(event.target.value)
}

const addTask=()=>{

  const newTask={
    id:Math.random(),
    text:text
  }
  const updatedTaskList=[...todoList,newTask]
  setTodoList(updatedTaskList)

  setText('')
}

  return(
    <>
<h1>Todo List</h1>
<div>
  <input 
  placeholder='Add to do here' 
  value={text} 
  onChange={handleChange}

  />
  <button onClick={addTask}>Add TO-Do</button>

</div>
<ul>
  { todoList.map((todo)=>(
    <li key={todo.id}>{todo.text}</li>
  ))}
</ul>

    </>
  )
}

export default App