import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categories/categoriesSlice'
import ProductsReducer from './products/productsSlice'
import cartSlice from './cart/cartSlice';
import wishlist from './wishlist/wishlistSlice';

import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ["itemsId"]
}

const wishlistPersistConfig = {
  key: 'wishlist',
  storage,
  whitelist: ["itemsId"]
}

const rootReducer = combineReducers({
  categoriesReducer,
  ProductsReducer,
  wishlist: persistReducer(wishlistPersistConfig, wishlist),
  cartSlice: persistReducer(cartPersistConfig, cartSlice)
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
const persistor = persistStore(store)
export { store, persistor }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch