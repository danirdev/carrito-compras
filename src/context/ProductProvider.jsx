import React from 'react'
import { ProductContext } from './ProductContext.js'
import {useEffect, useState} from 'react'
import Swal from 'sweetalert2'

const ProductProvider = ({children}) => {

    const api = 'https://fakestoreapi.com/products';
    
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await fetch(api);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'Hubo un error al cargar los productos',
            });
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )

}

export default ProductProvider