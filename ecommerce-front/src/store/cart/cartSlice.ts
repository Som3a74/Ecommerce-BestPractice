import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../index";
import fetchProductsByItems from './act/actGetProductsByItems';
import { TProduct, TLoading, isString } from "@types";

type TCartState = {
    itemsId: { [key: number]: number };
    productsFullInfo: TProduct[];
    loading: TLoading;
    error: null | string;
}

const initialState: TCartState = {
    itemsId: {},
    productsFullInfo: [],
    loading: "idle",
    error: null,
}

const getCartTotalQuantitySelector = createSelector((state: RootState) => state.cartSlice.itemsId, (item) => {
    const totalQuantity = Object.values(item).reduce((acc: number, cur) => {
        return acc + cur
    }, 0)
    return totalQuantity;
})


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cleanCartProductsFullInfo: (state) => {
            state.productsFullInfo = []
        },
        addToCart: (state, action) => {
            const id = action.payload
            if (state.itemsId[id]) {
                console.log(state.itemsId[id])
                state.itemsId[id]++
            } else {
                state.itemsId[id] = 1
            }
        },
        cartItemChangeQuantity: (state, action) => {
            state.itemsId[action.payload.id] = action.payload.quantity;
        },
        cartItemRemove: (state, action) => {
            delete state.itemsId[action.payload];
            state.productsFullInfo = state.productsFullInfo.filter((ele) => {
                return ele.id !== action.payload
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProductsByItems.pending, (state) => {
            state.loading = "pending";
            state.error = null;
        });
        builder.addCase(fetchProductsByItems.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.productsFullInfo = action.payload;
        });
        builder.addCase(fetchProductsByItems.rejected, (state, action) => {
            state.loading = "failed";
            if (isString(action.payload)) { state.error = action.payload; }
        });
    },
});

export { getCartTotalQuantitySelector, fetchProductsByItems }
export const { addToCart, cartItemChangeQuantity, cartItemRemove, cleanCartProductsFullInfo } = cartSlice.actions
export default cartSlice.reducer