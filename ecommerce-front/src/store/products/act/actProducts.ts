import { TProduct } from '@customTypes/products.types';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosErrorHandler from '@util/axiosErrorHandler';
import axios from 'axios'
type TResponse = TProduct[];

const fetchProducts = createAsyncThunk('Products/fetchProducts', async (prefix: string, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi
    try {
        const response = await axios.get<TResponse>(`/products?cat_prefix=${prefix}`, { signal, })
        return response.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
},)

export default fetchProducts;