import { createSlice } from "@reduxjs/toolkit"
import data from "../productData"


const initialState = {
    cart: [],
    items: data,
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1
            } else {

                state.cart.push(action.payload)
            }
        },
        getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("cartTotal" + cartTotal);
                    console.log("cartItem" + cartItem);
                    const { price, quantity } = cartItem
                    console.log(price, quantity);

                    const itemsTotal = price * quantity;
                    cartTotal.totalPrice += itemsTotal;
                    cartTotal.totalQuantity += quantity

                    return cartTotal
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0
                }
            )
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 }
                } else {
                    return item
                }
            })
        },
        decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity - 1 }
                } else {
                    return item
                }
            })
        },

    }
})
export const { addToCart, decreaseItemQuantity, getCartTotal, increaseItemQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer