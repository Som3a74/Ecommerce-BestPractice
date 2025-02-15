import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import fetchProducts from './act/actProducts';
import { TProduct, TLoading, isString } from "@types";

export interface TProducts {
    records: TProduct[];
    loading: TLoading;
    error: string | null;
}

const initialState: TProducts = {
    records: [],
    loading: "idle",
    error: null
}

export const ProductsSlice = createSlice({
    name: 'ProductsSlice',
    initialState,
    reducers: {
        prodectsCleanUp: (state) => {
            state.records = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.records = action.payload
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload)) { state.error = action.payload; }
        })
    },
})

export const { prodectsCleanUp } = ProductsSlice.actions

export default ProductsSlice.reducer