import React from "react";
import Products from "../pages/Products";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {

    return (
        <CartContext.Provider value={{ Products }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;