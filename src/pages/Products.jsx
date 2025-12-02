import React, {useContext} from 'react'
import CartComponent from '../component/CartComponent';
import {ProductContext} from '../context/ProductContext';
import { CartContext } from '../context/CartContext';

const Products = () => {

    const {products} = useContext(ProductContext)
    const {addProduct, removeProduct} = useContext(CartContext)

    return (
        <>
        <div className="text-center my-8">
            <h1 className="text-3xl font-bold">Productos Disponibles</h1>
            <p className="text-gray-600 mt-2">Explora nuestra variedad de productos</p>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
                <CartComponent
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    description={product.description}
                    handlerAdd={() => addProduct(product)}
                    handlerRemove={() => removeProduct(product.id)}
                />
            ))}
        </div>      
        </>
    )
}

export default Products
