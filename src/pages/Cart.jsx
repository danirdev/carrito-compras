import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

const Cart = () => {

    const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const calculateTotal = () => {
        return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    const handlerPurchase = () => {
        // Crear una lista HTML de los productos
        const productsList = shoppingList.map(product => 
            `<div style="text-align: left; margin: 10px 0; padding: 10px; border-bottom: 1px solid #ddd;">
                <strong>${product.title}</strong><br/>
                Cantidad: ${product.quantity} x $${product.price} = $${(product.quantity * product.price).toFixed(2)}
            </div>`
        ).join('');

        Swal.fire({
            title: '¿Deseas confirmar la compra?',
            html: `
                <div style="max-height: 300px; overflow-y: auto;">
                    ${productsList}
                </div>
                <div style="margin-top: 20px; font-size: 18px; font-weight: bold; text-align: right;">
                    Total: $${calculateTotal().toFixed(2)}
                </div>
            `,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, comprar',
            cancelButtonText: 'Cancelar',
            width: '600px'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Compra realizada!',
                    'Gracias por tu compra.',
                    'success'
                );
            }
        });
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Carrito de Compras</h1>
            
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2 text-left">Nombre</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Precio</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Cantidad</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoppingList.map(product => (
                            <tr key={product.id}>
                                <td className="border border-gray-300 px-4 py-2"> {product.title} </td>
                                <td className="border border-gray-300 px-4 py-2"> ${product.price} </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={() => decrementQuantity(product.id)}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                                        >
                                            -
                                        </button>
                                        <span className="px-4 font-semibold">{product.quantity}</span>
                                        <button 
                                            onClick={() => incrementQuantity(product.id)}
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-3 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="border border-gray-300 px-4 py-2 text-center">
                                    <button 
                                        onClick={() => removeProduct(product.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <tr className="font-bold">
                            <td className="border border-gray-300 px-4 py-2">Total</td>
                            <td></td>
                            <td></td>
                            <td className="border border-gray-300 px-4 py-2" colSpan="3">
                                ${calculateTotal().toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div className="mt-6 flex justify-end">
                <button 
                    onClick={handlerPurchase}
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600">
                    Comprar
                </button>
            </div>
        </div>
    )

}

export default Cart