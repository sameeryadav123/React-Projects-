
import { useState,useEffect } from "react";

export default function Timer(){
    const[count,setCout]=useState(0)

    useEffect(()=>{
 
        const timer=setTimeout(()=>{
           setCout( (preCount)=>  preCount + 1)
        },1000)

         return ()=>{
            clearTimeout(timer)
         }
    },[count])

    return(
        <div>
            <h1>Count {count} seconds</h1>
        </div>
    )
}