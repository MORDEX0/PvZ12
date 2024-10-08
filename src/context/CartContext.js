// src/context/CartContext.js

import React, { createContext, useState } from 'react';

// Создаем контекст для корзины
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]); // Начальное состояние корзины

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);
            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ); // Увеличиваем количество товара
            }
            return [...prevItems, { ...product, quantity: 1 }]; // Добавляем новый товар
        });
    };

    const updateItemQuantity = (productId, quantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(quantity, 1) } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId)); // Удаляем товар по id
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateItemQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
