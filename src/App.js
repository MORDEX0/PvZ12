import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Favorites from './pages/Favorites';
import Cart from './pages/Cart';
import Order from './pages/Order';
import './styles/styles.css';

const App = () => {
    return (
        <CartProvider>
            <FavoritesProvider>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog" element={<Catalog />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/order" element={<Order />} />
                    </Routes>
                    <Footer />
                </Router>
            </FavoritesProvider>
        </CartProvider>
    );
};

export default App;
