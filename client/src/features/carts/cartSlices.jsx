import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    cart: [],
    items: [], // Assuming product is an array
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cartProducts",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            let find = state.cart.findIndex((item) => item._id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
            // Increment total quantity and update total price
            console.log(state.totalQuantity);
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
        },
        removeProduct: (state, action) => {
            const productIdToRemove = action.payload.id;

            // Find the product to be removed
            const removedProduct = state.cart.find(
                (product) => product._id === productIdToRemove
            );

            if (removedProduct) {
                // Decrement total quantity and update total price
                state.totalQuantity -= removedProduct.quantity;
                state.totalPrice -= removedProduct.price * removedProduct.quantity;

                // Create a new cart array excluding the product with the specified ID
                state.cart = state.cart.filter(
                    (product) => product._id !== productIdToRemove
                );
            }
        },
        incrementQuantity: (state, action) => {
            const productIdToIncrement = action.payload.id;

            // Find the product in the cart
            const productToIncrement = state.cart.find(
                (product) => product._id === productIdToIncrement
            );

            // Increment the quantity if the product is found
            if (productToIncrement) {
                productToIncrement.quantity += 1;
                state.totalQuantity += 1; // Increment total quantity
                state.totalPrice += productToIncrement.price; // Increment total price
            }
        },
        decrementQuantity: (state, action) => {
            const productIdToDecrement = action.payload.id;

            // Find the product in the cart
            const productToDecrement = state.cart.find(
                (product) => product._id === productIdToDecrement
            );

            // Decrement the quantity if the product is found and the quantity is greater than 0
            if (productToDecrement && productToDecrement.quantity > 0) {
                productToDecrement.quantity -= 1;
                state.totalQuantity -= 1; // Decrement total quantity
                state.totalPrice -= productToDecrement.price; // Decrement total price
            }
        },
    },
});

export const selectAllProducts = (state) => state.cartProducts;
export const {
    addProduct,
    removeProduct,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;