import { createSlice } from '@reduxjs/toolkit'
import fetchCategories from './act/actGetCategories';

import { TCategory, TLoading } from "@types";

export interface TCategories {
    records: TCategory[];
    loading: TLoading;
    error: string | null;
}

const initialState: TCategories = {
    records: [],
    loading: "idle",
    error: null
}

export const categoriesSlice = createSlice({
    name: 'categoriesSlice',
    initialState,
    reducers: {
        categoriesRecordsCleanUp: (state) => {
            state.records = [];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        });
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.records = action.payload
        });
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = 'failed'
            // if (action.payload && typeof action.payload === "string") { state.error = action.payload; }
            state.error = action.payload as string;
        })
    },
})
export const { categoriesRecordsCleanUp } = categoriesSlice.actions
export default categoriesSlice.reducer