
import { useState } from "react";
import Timer from "./Timer";
import './App.css'
const App=()=>{
  const [flag,setFlag]=useState(true)
  return(
    <div className="container">
    <h1>TIMER - III - GARBAGE COLLECTION</h1>
    
     <button onClick={()=>setFlag(!flag)}>{flag ? ('hide'):(` Show The Timer`)}</button>
     {flag && <Timer/>}
    </div>
  )
}

export default App