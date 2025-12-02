import React from 'react'
import NavBar from './component/NavBar.jsx'
import {Navigate, Routes, Route} from 'react-router-dom'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'
import ProductProvider from './context/ProductProvider.jsx'
import CartProvider from './context/CartProvider.jsx'

const Carrito = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/carrito" element={<Cart />} /> 
            <Route path="/*" element={<Navigate to='/' />} />
          </Routes>
        </div> 
      </CartProvider>
    </ProductProvider>
  )
}

export default Carrito
