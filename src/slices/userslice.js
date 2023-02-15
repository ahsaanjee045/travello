import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = {
    user : null,
    loading : false,
    error : false,
}


export const registerUser = createAsyncThunk("user/register", async (userinfo)=> {
    return axios.post("http://localhost:8080/user/register", userinfo ).then((res) => res.data)
})

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {

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

    }
})

export default userSlice.reducer;