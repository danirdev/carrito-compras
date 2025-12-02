import React, {useEffect, useState, useContext} from 'react'
import { CartContext } from '../context/CartContext';

const CartComponent = ({id, title, image, price, description, handlerAdd, handlerRemove}) => {

    const {shoppingList} = useContext(CartContext);

    const [added, setAdded] = useState(false)

    const addProduct = () => {
        handlerAdd()
        setAdded(true)
    }

    const removeProduct = () => {
        handlerRemove()
        setAdded(false)
    }

    const checkAdded = () => {
        const exists = shoppingList.find(item => item.id === id)
        setAdded(exists)
    }

    useEffect(() => {
        checkAdded()
    }, [])

    return (
        <div className="border rounded-lg p-4 flex flex-col">      
            <img src={image} alt={title} className="h-48 w-full object-contain mb-4" />
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-700 mb-4">${price}</p>
            <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
            {added ? (
                <button 
                    className="text-white px-4 py-2 rounded hover:bg-red-600 bg-red-500"
                    onClick={removeProduct}
                >
                    Quitar del Carrito
                </button>
                ) : (
                <button 
                    className="text-white px-4 py-2 rounded hover:bg-green-600 bg-green-500"
                    onClick={addProduct}
                >
                    Agregar al Carrito
                </button>
            )}
        </div>
    )
    
}

export default CartComponent
