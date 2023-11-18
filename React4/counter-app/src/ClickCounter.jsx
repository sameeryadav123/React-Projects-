
import { useState,useEffect } from "react";
export default function ClickCounter(){

    const[count,setCount]=useState(0)

    useEffect(()=>{
document.title=`Count is ${count}`
    },[count])
    

    return<div>
        <h1>Clicked {count} times</h1>
        <button onClick={()=>setCount(count + 1)}>INCREASE COUNT</button>
    </div>
}