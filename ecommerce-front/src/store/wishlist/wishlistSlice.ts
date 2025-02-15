import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from './act/actLikeToggle';
import actGetWishlist from './act/actGetWishlist';
import { TProduct, TLoading, isString } from "@types";

export interface TwishList {
    itemsId: number[],
    productsFullInfo: TProduct[],
    loading: TLoading;
    error: null | string;
}

const initialState: TwishList = {
    itemsId: [],
    productsFullInfo: [],
    loading: "idle",
    error: null
}

export const wishlistSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        cleanWishlistProductsFullInfo: (state) => {
            state.productsFullInfo = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actLikeToggle.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        });
        builder.addCase(actLikeToggle.fulfilled, (state, action) => {
            if (action.payload.type === "add") {
                state.itemsId.push(action.payload.id)
            } else {
                state.itemsId = state.itemsId.filter((ele) => ele !== action.payload.id)
                state.productsFullInfo = state.productsFullInfo.filter((ele) => ele.id !== action.payload.id)
            }
            state.loading = 'succeeded'
        });
        builder.addCase(actLikeToggle.rejected, (state, action) => {
            state.loading = 'failed'
            if (action.payload && typeof action.payload === "string") { state.error = action.payload; }
        });

        // actGetWishlist
        builder.addCase(actGetWishlist.pending, (state) => {
            state.loading = 'pending'
            state.error = null
        });
        builder.addCase(actGetWishlist.fulfilled, (state, action) => {
            state.productsFullInfo = action.payload as []
            state.loading = 'succeeded'
        });
        builder.addCase(actGetWishlist.rejected, (state, action) => {
            state.loading = 'failed'
            if (isString(action.payload)) { state.error = action.payload; }
        })
    },
})

export { actLikeToggle, actGetWishlist };
export const { cleanWishlistProductsFullInfo } = wishlistSlice.actions
export default wishlistSlice.reducer