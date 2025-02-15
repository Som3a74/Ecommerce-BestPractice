import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { TProduct } from '@customTypes/products.types';
import { RootState } from '@store/index';
import axiosErrorHandler from '@util/axiosErrorHandler';
type TResponse = TProduct[];

const fetchProductsByItems = createAsyncThunk('cart/fetChart', async (_, thunkApi) => {
    const { rejectWithValue, fulfillWithValue, getState, signal } = thunkApi;
    const { cartSlice } = getState() as RootState;

    const itemsId = Object.keys(cartSlice.itemsId);
    if (!itemsId.length) { return fulfillWithValue([]) }

    try {
        const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join("&");
        const response = await axios.get<TResponse>(`/products?${concatenatedItemsId}`, { signal });
        return response.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
},)

export default fetchProductsByItems;