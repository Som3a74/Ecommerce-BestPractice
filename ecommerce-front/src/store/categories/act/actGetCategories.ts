import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchCategories = createAsyncThunk('Categories/fetchCategories', async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi

    try {
        const response = await axios.get(`http://localhost:5005/categories`)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error?.response?.data.message)
        } else {
            return rejectWithValue('An UnExpected Error')
        }
    }
},)

export default fetchCategories;