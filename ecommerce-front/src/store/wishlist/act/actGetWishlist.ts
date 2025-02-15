import { TProduct } from '@customTypes/products.types';
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosErrorHandler from '@util/axiosErrorHandler';
import axios from 'axios';
type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk('wishList/actGetWishlist', async (_, thunkApi) => {
    const { rejectWithValue, fulfillWithValue, signal } = thunkApi;

    try {
        const userWishlist = await axios.get<{ productId: number }[]>(`/wishList?userId=1`, { signal });
        if (!userWishlist.data.length) { return fulfillWithValue([]) }

        const concatenatedItemsId = userWishlist.data.map((el) => `id=${el.productId}`).join("&");
        const response = await axios.get<TResponse>(`/products?${concatenatedItemsId}`, { signal })
        return response.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
},)


export default actGetWishlist;