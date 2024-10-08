
// src/context/FavoritesContext.js

import React, { createContext, useState } from 'react';

// Создаем контекст для избранного
export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]); // Начальное состояние избранных товаров

    const addToFavorites = (product) => {
        setFavorites((prevFavorites) => {
            if (!prevFavorites.some((item) => item.id === product.id)) {
                return [...prevFavorites, product]; // Добавляем товар, если его еще нет в избранном
            }
            return prevFavorites; // Возвращаем предыдущее состояние, если товар уже есть в избранном
        });
    };

    const removeFromFavorites = (productId) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((product) => product.id !== productId) // Удаляем товар по id
        );
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
