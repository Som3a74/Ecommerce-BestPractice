import { TProduct } from '@customTypes/products';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
type TResponse = TProduct[];

const fetchProducts = createAsyncThunk('Products/fetchProducts', async (prefix: string, thunkApi) => {
    const { rejectWithValue } = thunkApi
    try {
        const response = await axios.get<TResponse>(`http://localhost:5005/products?cat_prefix=${prefix}`)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error?.response?.data.message)
        } else {
            return rejectWithValue('An UnExpected Error')
        }
    }
},)

export default fetchProducts;