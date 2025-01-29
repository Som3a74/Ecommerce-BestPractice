import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import fetchProducts from './act/actProducts';
import { TLoading } from '@customTypes/shared';
import { TProduct } from '@customTypes/products';

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
            if (action.payload && typeof action.payload === "string") { state.error = action.payload; }
        })
    },
})

export const { prodectsCleanUp } = ProductsSlice.actions

export default ProductsSlice.reducer