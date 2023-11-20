
import { useState,useEffect } from "react";

export default function Timer(){

    const[count,setCount]=useState(0)

    useEffect(()=>{
 const timer=setInterval(()=>{
          setCount((preCount)=> preCount + 1)
 },1000)

return ()=>{
    clearInterval(timer)
}

    },[count])
   return(
    <div>
        <h1>Count {count} Seconds</h1>
        
    </div>
   )
}