import { useEffect, useState } from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import axios from "axios"


function Home(){
    const [blogs,setBlogs] = useState([])
    const fetchBlogs = async ()=>{
        const response = await axios.get("https://67512d3169dc1669ec1d4e68.mockapi.io/blogs") 
        setBlogs(response.data)
    }

    useEffect(()=>{
        fetchBlogs()
    },[])
    return ( 
        <>
        <Navbar />
        <div className="flex flex-wrap">
        {
            blogs.map(function(blog){
                return ( 
                 <Card blog={blog} />
                    
                )
            })
        }
        <Card />
    
        </div>
        </>
    )
}

export default Home 