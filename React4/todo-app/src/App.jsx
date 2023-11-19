



import { useState,useEffect } from "react";
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import axios from 'axios'
import './App.css'

const App=()=>{
const[loading,setLoading]=useState(false)
const[error,setError]=useState(null)
const[todos,setTodos]=useState([])
const[page,setPage]=useState(1)
const[totalPages,setTotalPages]=useState(1)


const fetchTodo= async(page)=>{
  setLoading(true)
  try {
    const res= await axios.get(` http://localhost:5000/todos?_limit=5&_page=${page}`)
   
    const totalCount=Number(res.headers['x-totol-count'])
    const totalPages=Math.ceil(totalCount/5)
 
    
   
    setTodos(res.data)
    setError(null)
    setTotalPages(totalPages)
  } catch (error) {
    setError(error.message)
  }
  finally{
    setLoading(false)
  }
}

useEffect(()=>{
  fetchTodo(page)
},[page])

return(
  <div className="container">
    {error && <div>Error:{error}</div>}
    {loading ? (<h1>Loading.....</h1>): (<TodoList fetchTodo={fetchTodo} todos={todos}/>)}
    <AddTodo fetchTodo={fetchTodo}/>
    <button  disabled={page === 1} onClick={()=>setPage( pre=>  Math.max(pre - 1,1))}>Previous Page</button>
    <button  disabled={page ===  totalPages} onClick={()=> setPage(pre=> pre + 1)}>Next Page</button>

  </div>
)

}

export default App