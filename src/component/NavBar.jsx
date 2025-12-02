import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import { CartContext } from '../context/CartContext';

const NavBar = () => {
    const { shoppingList } = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-blue-500 p-4 text-white">
                <div className="flex justify-between items-center">
                    <Link to="/" className="hover:underline">
                        <h1 className="text-lg font-bold">Mi Tienda</h1>
                    </Link>
                    
                    {/* Menú Desktop */}
                    <div className="hidden md:flex gap-4 items-center">
                        <Link to="/" className="hover:underline">
                            Productos
                        </Link>
                        <Link to="/carrito" className="hover:underline">
                            <Badge badgeContent={shoppingList.length} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </Link>
                    </div>

                    {/* Botón Hamburguesa (Mobile) */}
                    <button 
                        onClick={toggleMenu}
                        className="md:hidden"
                    >
                        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

                {/* Menú Mobile */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4">
                        <Link 
                            to="/" 
                            className="hover:underline"
                            onClick={toggleMenu}
                        >
                            Productos
                        </Link>
                        <Link 
                            to="/carrito" 
                            className="hover:underline flex items-center gap-2"
                            onClick={toggleMenu}
                        >
                            <Badge badgeContent={shoppingList.length} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                            <span>Carrito</span>
                        </Link>
                    </div>
                )}
            </nav>
        </>
    )
}

export default NavBar