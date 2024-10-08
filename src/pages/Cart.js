// src/pages/Cart.js

import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; // Импортируем контекст корзины
import ProductCard from '../components/ProductCard'; // Импортируем компонент для отображения товара
import './Cart.css'; // Импортируем стили

const Cart = () => {
    const { cartItems, updateItemQuantity, removeFromCart } = useContext(CartContext); // Извлекаем данные из контекста

    // Функция для подсчета общей стоимости
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart">
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста.</p>
            ) : (
                <div className="cart-list">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <ProductCard product={item} />
                            <div className="quantity-control">
                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                        </div>
                    ))}
                </div>
            )}
            {cartItems.length > 0 && (
                <div className="total">
                    <h2>Итого: {getTotalPrice()} руб.</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;
