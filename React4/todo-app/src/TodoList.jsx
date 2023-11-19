
import axios from 'axios'
export default  function TodoList({todos,fetchTodo}){
    const deleteTodo=async(id)=>{
        try {
            await axios.delete( `http://localhost:5000/todos/${id}`)
            fetchTodo()
        } catch (error) {
            console.log(error.message)
        }
    }
 
    const toggelStatus=async(id,completed)=>{
 try {
    
    
    await axios.patch(`http://localhost:5000/todos/${id}`,{completed:!completed})
    fetchTodo()
 } catch (error) {
    console.log('error toggling status',error)
 }
    }

    return(
        <div>
{todos.map((todo)=>(
    <div key={todo.id}>
    <span>{todo.title}</span>
    <button onClick={()=>deleteTodo(todo.id)}>Delete Todo</button>
    <button onClick={()=>toggelStatus(todo.id,todo.completed)}>Toggel Status</button>

</div>
))}
        
        </div>
    )
}
