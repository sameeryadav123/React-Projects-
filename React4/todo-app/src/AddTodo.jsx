import { useState } from "react";
import axios from 'axios'

export default function AddTodo({fetchTodo}){
    const [todo,setTodo]=useState('')

    const addTodo=async()=>{
        try {
            await axios.post( `http://localhost:5000/todos`,{
       title:todo,
       completed:false
            })
            fetchTodo()
            setTodo('')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
           
        </div>
    )
}