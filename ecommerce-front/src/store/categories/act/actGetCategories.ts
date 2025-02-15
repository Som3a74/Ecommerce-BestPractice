import { TCategory } from '@customTypes/categoryType';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosErrorHandler from '@util/axiosErrorHandler';
import axios from 'axios'

type TResponse = TCategory[];

const fetchCategories = createAsyncThunk('Categories/fetchCategories', async (_, thunkApi) => {
    const { rejectWithValue, signal } = thunkApi

    try {
        const response = await axios.get<TResponse>("/categories", { signal });
        return response.data;
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
},)

export default fetchCategories;