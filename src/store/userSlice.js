import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name : "user", 
    initialState : {
        users : []
    }, 
    reducers : {
        setUser(){
            console.log("hello world")
        }
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer