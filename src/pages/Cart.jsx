import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext);

    const calculateTotal = () => {
        return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0);
    }

    const handlerPurchase = () => {
        if (shoppingList.length === 0) {
            Swal.fire({
                title: 'Carrito vacío',
                text: 'No tienes productos en el carrito',
                icon: 'warning',
            });
            return;
        }

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

    if (shoppingList.length === 0) {
        return (
            <div className="p-4 md:p-6 max-w-6xl mx-auto text-center">
                <h1 className="text-2xl md:text-3xl font-bold mb-6">Carrito de Compras</h1>
                <p className="text-gray-600">Tu carrito está vacío</p>
                <Link to="/" className="inline-block mt-4 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                    Ver Productos
                </Link>
            </div>
        );
    }

    return (
        <div className="p-4 md:p-6 max-w-6xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Carrito de Compras</h1>
            
            {/* Vista Desktop (Tabla) */}
            <div className="hidden md:block overflow-x-auto">
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
                                <td className="border border-gray-300 px-4 py-2">{product.title}</td>
                                <td className="border border-gray-300 px-4 py-2">${product.price}</td>
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
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Vista Mobile (Tarjetas) */}
            <div className="md:hidden space-y-4">
                {shoppingList.map(product => (
                    <div key={product.id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-semibold text-sm flex-1 pr-2">{product.title}</h3>
                            <button 
                                onClick={() => removeProduct(product.id)}
                                className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                            >
                                Eliminar
                            </button>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-bold">${product.price}</span>
                            
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => decrementQuantity(product.id)}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded text-sm"
                                >
                                    -
                                </button>
                                <span className="px-3 font-semibold">{product.quantity}</span>
                                <button 
                                    onClick={() => incrementQuantity(product.id)}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded text-sm"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        
                        <div className="mt-2 text-right text-sm text-gray-600">
                            Subtotal: ${(product.price * product.quantity).toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Total y Botón de Compra */}
            <div className="mt-6 border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl md:text-2xl font-bold">Total:</span>
                    <span className="text-xl md:text-2xl font-bold">${calculateTotal().toFixed(2)}</span>
                </div>
                <button 
                    onClick={handlerPurchase}
                    className="w-full bg-blue-500 text-white py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-600"
                >
                    Comprar
                </button>
            </div>
        </div>
    )

}

export default Cart