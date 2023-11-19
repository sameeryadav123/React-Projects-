// import { useState,useEffect } from "react";
// import axios from 'axios'
// import Pagination from "./Pagination";
// import PostItme from "./PostItem";
// const getData=async(url)=>{
//   try {
//     const res= await axios.get(url)
//     return res.data
//   } catch (error) {
//     throw new error('fail to fetch')
//   }
// }

// const App=()=>{
//   const[loading,setLoading]=useState(false)
//   const [posts,setPosts]=useState([])
//   const [error,setError]=useState(null)

//   const fetchData=async()=>{
//     setLoading(true)
//     try {
//       const data=await getData(`https://jsonplaceholder.typicode.com/posts`)
//       setPosts(data)
//       setLoading(false)

//     } catch (error) {
//       setError(true)
//       setLoading(false)
      
//     }
//   }

//   useEffect(()=>{
//  fetchData()
//   },[])

//   if(loading){
//     return<h1>Loading.......</h1>
//   }

//   if(error){
//     return<h1>Something wend wrong please refresh</h1>
//   }
//   return(
//     <div>
//       {posts.map((post)=>(
//         <PostItme key={post.id} id={post.id} title={post.title}/>
//       ))}

//       <Pagination/>
//     </div>
//   )
// }


import Pagination from "./Pagination"
import './App.css'
const App=()=>{

  return(
    <div className="container">
<Pagination/>
    </div>
  )
}
export default App