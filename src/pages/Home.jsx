import { useEffect, useState } from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"
import {  fetchBlog, setHaha } from "../store/blogSlice"
import { useDispatch, useSelector } from "react-redux"


function Home(){
    const dispatch = useDispatch()
    const {blogs} = useSelector((store)=>store.blog)
    useEffect(()=>{
        dispatch(fetchBlog())
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