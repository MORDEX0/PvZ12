import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import './Catalog.css'; // Импортируйте CSS

const categories = ['All', 'Figures', 'Clothes', 'Mugs', 'Accessories', 'Posters'];

function Catalog() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilter = (category) => setFilter(category);
  const handleSearch = (query) => setSearchQuery(query);

  return (
    <div className="catalog">
      <h2>Catalog</h2>
      <SearchBar onSearch={handleSearch} />
      <Filter categories={categories} onFilter={handleFilter} />
      <ProductList filter={filter} searchQuery={searchQuery} />
    </div>
  );
}

export default Catalog;
