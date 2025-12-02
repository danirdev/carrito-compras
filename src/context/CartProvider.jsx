import React, {useReducer} from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {

    const initialState = []

    const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case '[CART] Add Product':
            return [...state, { ...action.payload, quantity: 1 }];
        case '[CART] Remove Product':
            return state.filter(product => product.id !== action.payload);
        case '[CART] Increment Quantity':
            return state.map(product => 
                product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );
        case '[CART] Decrement Quantity':
            return state.map(product => 
                product.id === action.payload && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );
        default:
            return state;
    }
    };

    const [shoppingList, dispatch] = useReducer(cartReducer, initialState);

    const addProduct = (product) => {
        product.quantity = 1;
        const action = {
            type: '[CART] Add Product',
            payload: product
        };
        dispatch(action);
    }

    const removeProduct = (id) => {
        const action = {
            type: '[CART] Remove Product',
            payload: id
        };
        dispatch(action);
    }

    const incrementQuantity = (id) => {
        const action = {
            type: '[CART] Increment Quantity',
            payload: id
        };
        dispatch(action);
    }

    const decrementQuantity = (id) => {
        const action = {
            type: '[CART] Decrement Quantity',
            payload: id
        };
        dispatch(action);
    }

    return (
        <CartContext.Provider value={{ shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;