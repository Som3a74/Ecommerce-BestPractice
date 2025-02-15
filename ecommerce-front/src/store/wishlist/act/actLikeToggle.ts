import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosErrorHandler from '@util/axiosErrorHandler';
import axios from 'axios';

const actLikeToggle = createAsyncThunk('wishList/actLikeToggle', async (id: number, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
        const response = await axios.get(`/wishList?userId=1&productId=${id}`);
        if (response.data.length > 0) {
            console.log(response.data);
            await axios.delete(`/wishList/${response.data[0].id}`);
            console.log("remove")
            return { type: "remove", id };
        } else {
            await axios.post(`/wishList`, { userId: 1, productId: id });
            console.log("add")
            return { type: "add", id };
        }


    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error));
    }
},)


export default actLikeToggle;