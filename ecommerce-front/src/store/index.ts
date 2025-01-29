import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categories/categoriesSlice'
import ProductsReducer from './products/productsSlice'

export const store = configureStore({
  reducer: {
    categoriesReducer, ProductsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch