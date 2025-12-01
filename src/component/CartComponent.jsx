import React, {useState} from 'react'

const CartComponent = ({title, image, price, description}) => {

      const [added, setAdded] = useState(false)

      const addProduct = () => {
          setAdded(true)
      }

      const removeProduct = () => {
          setAdded(false)
      }

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
