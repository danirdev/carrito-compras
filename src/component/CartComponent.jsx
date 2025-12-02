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
    }, [shoppingList])

    return (
        <div className="border border-gray-300 rounded-lg p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow h-full">      
            <div className="h-48 w-full mb-4 flex items-center justify-center bg-gray-50">
                <img 
                    src={image} 
                    alt={title} 
                    className="max-h-full max-w-full object-contain" 
                />
            </div>
            <div className="grow flex flex-col">
                <h2 className="text-lg font-semibold mb-2 line-clamp-2 min-h-14">
                    {title}
                </h2>
                
                <p className="text-gray-900 text-xl font-bold mb-3">
                    ${price}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 grow">
                    {description}
                </p>
            </div>
            <div className="mt-auto">
                {added ? (
                    <button 
                        className="w-full text-white px-4 py-2 rounded hover:bg-red-600 bg-red-500 transition-colors font-semibold"
                        onClick={removeProduct}
                    >
                        Quitar del Carrito
                    </button>
                ) : (
                    <button 
                        className="w-full text-white px-4 py-2 rounded hover:bg-green-600 bg-green-500 transition-colors font-semibold"
                        onClick={addProduct}
                    >
                        Agregar al Carrito
                    </button>
                )}
            </div>
        </div>
    )
    
}

export default CartComponent
