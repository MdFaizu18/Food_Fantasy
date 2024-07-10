import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../features/carts/cartSlices";

const store = configureStore({
    reducer: {
        cartProducts: CartReducer,
    },
});

export default store;