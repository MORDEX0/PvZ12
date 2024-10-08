import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Импортируем стили

function Header() {
  return (
    <header>
      <h1>Plants vs Zombies Shop</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Catalog">Catalog</Link>
        <Link to="/Favorites">Favorites</Link>
        <Link to="/Cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
