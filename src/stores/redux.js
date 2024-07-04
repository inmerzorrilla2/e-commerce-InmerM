import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";
import cartSlices from "./slices/cart.slices";
import purchaesSlice from "./slices/purchaes.slice";

const store = configureStore({
    reducer: {
        products,
        cartSlices, 
        purchaesSlice,
    }
})

export default store;