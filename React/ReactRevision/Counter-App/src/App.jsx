import { useState } from 'react'
import './App.css'
import Input from './Input'
const App=()=>{
  const [count,setCount]=useState(0)
  

  const message=()=>{

  }

  const handleIncrease=()=>{
    setCount( count + 1)
  }
  
  const handlDecrease=()=>{
    setCount(count - 1)
  }

  return(
    <div className='container'>
    
    <Input/>
      <h1 className='heading'>Count is {count}</h1>
      <button className='btn' onClick={handleIncrease}>+</button>
      <button className='btn' onClick={handlDecrease}>-</button>
    </div>
  )
}

export default App
