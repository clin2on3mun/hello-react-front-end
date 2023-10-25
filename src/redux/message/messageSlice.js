import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getMessage = createAsyncThunk('getMessage', async(thunkAPI)=>{
    try{
        const response = await axios.get('http://127.0.0.1:3000/api/random_greeting', {headers: {
            Accept: 'application/json',
          }}) 
          console.log(response.data)
         return response.data
    }
    catch(error){
        return thunkAPI.rejectWithValue('something went wrong');
    }
}) 

const initialState = {
    value: '',
    isLoading:false,
    error: ''
}

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
       .addCase(getMessage.fulfilled,(state,action)=>({...state, value: action.payload }))
       .addCase(getMessage.rejected, (state, action)=>({...state,isloading:false, error:action.error.message}));
    }
})
export default messageSlice.reducer