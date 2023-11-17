
import { useState } from "react";
export default function ClickCounter(){

    const[count,setCount]=useState(0)

    const handleClick=()=>{
        setCount(count + 1)
    }

    return<div>
        <h1>Clicked {count} times</h1>
        <button onClick={handleClick}>click</button>
    </div>
}