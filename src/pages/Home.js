import React from 'react';
import ProductList from '../components/ProductList';
import ContactForm from '../components/ContactForm';
import './Home.css'; // Импорт стилей

function Home() {
  return (
    <div>
      <h2>Welcome to Plants vs Zombies Shop</h2>
      <p>Find the best merchandise from the world of Plants vs Zombies!</p>
      <ProductList />
      <ContactForm />
    </div>
  );
}

export default Home;
