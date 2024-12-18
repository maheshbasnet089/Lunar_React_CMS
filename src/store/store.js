import { configureStore } from "@reduxjs/toolkit";
import blogSlice from './blogSlice'
import userSlice from './userSlice'

const store = configureStore({
    reducer : {
        blog : blogSlice, 
        user : userSlice, 
        // rating : ratingSlice
    }
})

export default store