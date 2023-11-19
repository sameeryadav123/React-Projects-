import axios from "axios";
import { useState,useEffect } from "react";
import PostItme from "./PostItem";

const getData=async(url)=>{
    try {
        const res=await axios.get(url)
    
        const totalCount=+res.headers['x-total-count']
        const totalPages=Math.ceil(totalCount/10)
        const data=res.data

        return{
            data:data,
            totalPages:totalPages,
            headers:res.headers
        }
    } catch (error) {
        throw new error('failed to fetch')
    }
}


const Pagination=()=>{
    const[loading,setLoading]=useState(false)
    const[posts,setPosts]=useState([])
    const[error,setError]=useState(null)
    const[page,setPage]=useState(1)
    const[totalPages,setTotalPages]=useState(1)


    const fetchData=async(page)=>{
        setLoading(true)
        try {
            const details=await getData(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
           
            const{data,totalPages}=details
            setTotalPages(totalPages)
            setPosts(data)
            setLoading(false)
            
        } catch (error) {
            setError(true)
            setLoading(false)
        }
    }

    useEffect(()=>{
fetchData(page)
    },[page])


    if(loading){
        return<h1>Loading.............</h1>

    }

    if(error){
        return<h1>Error:{error.message}...Please refresh</h1>
    }

    return(
        <div>
         <button disabled={page === 1} onClick={()=>setPage(page - 1)}>Previous Page</button>
            <button disabled={page === totalPages} onClick={()=>setPage(page + 1)}>Next Page</button>
            {posts.map((post)=>(
                <PostItme key={post.id} id={post.id} title={post.title}/>
            ))}
           
        </div>
    )
}

export default Pagination