import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const blogSlice = createSlice({
    name : 'blog', 
    initialState : {
       blogs : [],
       status : "success", 
       singleBlog : {}
    }, 
    reducers : {
    
        setBlog(state,action){
            state.blogs = action.payload 
        }, 
        setStatus(state,action){
            state.status = action.payload
        }, 
        setSingleBlog(state,action){
            state.singleBlog = action.payload
        }
    }
})

export const {setBlog,setStatus,setSingleBlog} = blogSlice.actions
export default blogSlice.reducer
export function fetchBlog(){
    return async function fetchBlogThunk(dispatch){
        try {
            const response = await axios.get("https://67512d3169dc1669ec1d4e68.mockapi.io/blogs")
            dispatch(setStatus("success"))
            dispatch(setBlog(response.data))
        } catch (error) {
            console.log(error)
            dispatch(setStatus("error"))
        }
        
    }
}

export function fetchSingleBlog(id){
    return async function fetchSingleBlogThunk(dispatch){
        try {
            const response = axios.get("https://67512d3169dc1669ec1d4e68.mockapi.io/blogs/" + id)
            dispatch(setStatus("success"))
            dispatch(setSingleBlog(response.data))
        } catch (error) {
            console.log(error)
            dispatch(setStatus("error"))
        }
    }
}

function deleteBlog(){
    return async function deleteBlogThunk(dispatch){
        try {
            
        } catch (error) {
            
        }
    }
}

function createBlog(data){
    return async function createBlogThunk(dispatch){
        try {
            await axios.post("https://67512d3169dc1669ec1d4e68.mockapi.io/blogs",data)
            dispatch(setStatus("success"))
        } catch (error) {
            dispatch(setStatus("error"))
        }
    }
}