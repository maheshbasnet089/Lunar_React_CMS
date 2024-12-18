import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchSingleBlog } from "../store/blogSlice"

function Single(){
    const dispatch = useDispatch()
    const data = useParams()
    const navigate = useNavigate()
    const {singleBlog:blog}= useSelector((store)=>store.blog)
    console.log(singleBlog)
    useEffect(()=>{
        dispatch(fetchSingleBlog(data.id))
    },[])
    const deleteBlog =  async()=>{
        // api --> axios.delete garnu parxa 
        const response = await axios.delete("https://67512d3169dc1669ec1d4e68.mockapi.io/blogs/" + data.id)
        navigate("/") 
    }
return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg" alt="Product Image"/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <button onClick={deleteBlog} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Delete Me</button>
                    </div>
                    <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{blog?.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {blog?.description}
                </p>
          
           
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {blog?.subtitle}
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

)

}

export default Single