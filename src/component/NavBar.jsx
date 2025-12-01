import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const NavBar = () => {
  return (
    <>
        <nav className="bg-blue-500 p-4 text-white">
            <div className="flex justify-between items-center">
                <Link to="/" className="hover:underline">
                    <h1 className="text-lg font-bold">Mi Tienda</h1>
                </Link>
                <div className="flex gap-4">
                    <Link to="/" className="hover:underline">
                        Productos
                    </Link>
                    <Link to="/carrito" className="hover:underline">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </Link>
                </div>
            </div>
        </nav>
    </>
  )
}

export default NavBar