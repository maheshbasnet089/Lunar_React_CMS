import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddBlog(){
    const navigate = useNavigate()   
    const [data,setData] = useState({
        title : "",   
        subtitle : "", 
        description : "", 
        image : ""
    })
    const handleChange = (e)=>{
        const value = e.target.value 
        const name = e.target.name 
        // const {value,name} = e.target 
       setData({
        ...data, // agadi j xa tehi persist garyo 
        [name] : value // respective name ma store garyo 
       })
    }
    console.log(data)
    const createBlog = async ()=>{
       const response =  await axios.post("https://67512d3169dc1669ec1d4e68.mockapi.io/blogs",data)
        if(response.status === 201){
            navigate("/")
        }else{
            alert("Something went wrong")
        }
        
    }
    return ( 
<div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div className="mt-10 text-center font-bold">Create Blog</div>
  <div className="mt-3 text-center text-4xl font-bold">create blog</div>
  <div className="p-8">
    <div className="flex gap-4">
      <input type="Name" name="title" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="enter title" onChange={handleChange} />
      <div className="flex gap-4">
      <input type="Name" name="subtitle" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="enter subtitle" onChange={handleChange}  />
    
    </div>
    <div className="flex gap-4">
      <input type="Name" name="image" className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="enter image" onChange={handleChange} />


    
    </div>
    </div>

    <div className="">
      <textarea name="description" id="text" cols="30" rows="10" className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" onChange={handleChange}>Description</textarea>
    </div>
    <div className="text-center">
      <button className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white" onClick={createBlog}>Create blog</button>
    </div>
  </div>
</div>
    )
}

export default AddBlog