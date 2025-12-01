import React from 'react'

const Cart = () => {

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
                       <tr>
                           <td className="border border-gray-300 px-4 py-2">Producto 1</td>
                           <td className="border border-gray-300 px-4 py-2">$100.00</td>
                           <td className="border border-gray-300 px-4 py-2">2</td>
                           <td className="border border-gray-300 px-4 py-2 text-center">
                               <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                   Eliminar
                               </button>
                           </td>
                       </tr>
                       <tr>
                           <td className="border border-gray-300 px-4 py-2">Producto 2</td>
                           <td className="border border-gray-300 px-4 py-2">$50.00</td>
                           <td className="border border-gray-300 px-4 py-2">1</td>
                           <td className="border border-gray-300 px-4 py-2 text-center">
                               <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                                   Eliminar
                               </button>
                           </td>
                       </tr>
                   </tbody>
               </table>
           </div>
           
           <div className="mt-6 flex justify-end">
               <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600">
                   Comprar
               </button>
           </div>
       </div>
   )
}

export default Cart