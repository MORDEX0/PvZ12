import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'; // Импортируем стили

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price} ₽</p>
      <Link to={`/product/${product.id}`} className="product-link">More Details</Link>
    </div>
  );
}

export default ProductCard;