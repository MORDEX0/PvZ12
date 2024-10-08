// src/pages/Order.js

import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext'; // Импортируем контекст корзины
import { useForm } from 'react-hook-form'; // Импортируем библиотеку для работы с формами
import ReCAPTCHA from 'react-google-recaptcha'; // Импортируем компонент reCAPTCHA
import './Order.css'; // Импортируем стили

const Order = () => {
    const { cartItems } = useContext(CartContext); // Получаем товары из корзины
    const [captchaValue, setCaptchaValue] = useState(null); // Состояние для значения reCAPTCHA
    const [isSubmitting, setIsSubmitting] = useState(false); // Состояние для отслеживания отправки формы
    const [message, setMessage] = useState(''); // Состояние для сообщения об успехе/ошибке

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (!captchaValue) {
            setMessage('Пожалуйста, подтвердите, что вы не робот.');
            return;
        }

        setIsSubmitting(true);
        setMessage(''); // Очищаем предыдущее сообщение

        try {
            // Здесь вы можете отправить данные на сервер
            // Например, используя fetch или axios
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...data, cartItems, captchaValue }),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке заказа.'); // Обрабатываем ошибку
            }

            setMessage('Заказ успешно оформлен!'); // Сообщение об успехе
        } catch (error) {
            setMessage(error.message); // Сообщение об ошибке
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="order">
            <h1>Оформление заказа</h1>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста. Добавьте товары, чтобы оформить заказ.</p>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="fullName">ФИО:</label>
                        <input
                            id="fullName"
                            type="text"
                            {...register('fullName', { required: 'Это поле обязательно.' })}
                        />
                        {errors.fullName && <p className="error">{errors.fullName.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="address">Адрес:</label>
                        <input
                            id="address"
                            type="text"
                            {...register('address', { required: 'Это поле обязательно.' })}
                        />
                        {errors.address && <p className="error">{errors.address.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="paymentMethod">Способ оплаты:</label>
                        <select id="paymentMethod" {...register('paymentMethod', { required: 'Это поле обязательно.' })}>
                            <option value="">Выберите способ оплаты</option>
                            <option value="card">Кредитная карта</option>
                            <option value="paypal">PayPal</option>
                        </select>
                        {errors.paymentMethod && <p className="error">{errors.paymentMethod.message}</p>}
                    </div>

                    <div className="captcha">
                        <ReCAPTCHA
                            sitekey="ВАШ_КЛЮЧ_RECAPTCHA" // Замените на свой ключ reCAPTCHA
                            onChange={(value) => setCaptchaValue(value)}
                        />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Отправка...' : 'Оформить заказ'}
                    </button>
                    {message && <p className={message.includes('успешно') ? 'success' : 'error'}>{message}</p>}
                </form>
            )}
        </div>
    );
};

export default Order;
