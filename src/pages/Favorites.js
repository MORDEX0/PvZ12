// src/pages/Favorites.js

import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext'; // Импортируем контекст избранного
import ProductCard from '../components/ProductCard'; // Импортируем компонент для отображения товара
import './Favorites.css'; // Импортируем стили

const Favorites = () => {
    const { favorites, removeFromFavorites } = useContext(FavoritesContext); // Извлекаем избранные товары и функцию удаления

    return (
        <div className="favorites">
            <h1>Избранное</h1>
            {favorites.length === 0 ? ( // Проверяем, есть ли избранные товары
                <p>У вас нет избранных товаров.</p>
            ) : (
                <div className="favorites-list">
                    {favorites.map((product) => ( // Перебираем избранные товары
                        <div key={product.id} className="favorites-item">
                            <ProductCard product={product} />
                            <button onClick={() => removeFromFavorites(product.id)}>
                                Убрать из избранного
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
