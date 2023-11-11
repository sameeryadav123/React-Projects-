import React,{useState} from "react";

const Input=()=>{
    const [message,setMessage]=useState('')
    const handleChange=(event)=>{
        setMessage(event.target.value)
}
return(
    <div>
    <h1>Message:{message}</h1>
        <input placeholder="add here" value={message} onChange={handleChange}/> 
        <button>Display button</button>
    </div>
)
}
export default Input