import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const localuser = JSON.parse(localStorage.getItem("user"))


const initialState = {
    user : localuser,
    loading : false,
    error : false,
}


export const registerUser = createAsyncThunk("user/register", async (userinfo)=> {
    return axios.post("http://localhost:8080/user/register", userinfo ).then((res) => res.data)
})
export const loginUser = createAsyncThunk("user/login", async (userinfo)=> {
    return axios.post("http://localhost:8080/user/login", userinfo ).then((res) => res.data)
})

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        logout : (state, action) => {
            state.user = null;
            localStorage.removeItem("user")
        }
    },
    extraReducers : {
        [registerUser.pending] : (state) => {
            state.loading = true;
        },
        [registerUser.fulfilled] : (state, action) => {
            state.loading = false;
            // state.user = action.payload;
        },
        [registerUser.rejected] : (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.payload
        },
        [loginUser.pending] : (state) => {
            state.loading = true;
        },
        [loginUser.fulfilled] : (state,action) => {
            state.loading = false;
            state.user = action.payload
            localStorage.setItem("user", JSON.stringify(action.payload))
        },
        [loginUser.rejected] : (state) => {
            state.loading = false;
            state.error = action.payload
        },


    }
})


export const {logout} = userSlice.actions
export default userSlice.reducer;