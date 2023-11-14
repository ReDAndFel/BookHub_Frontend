import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (book) => {
        setCartList((prevList) => [...prevList, book]);
    };

    const removeFromCart = (bookId) => {
        console.log(cartList);
        setCartList((prevList) => prevList.filter((book) => String(book.id) !== String(bookId)));
    };


    return (
        <CartContext.Provider value={{ cartList, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
