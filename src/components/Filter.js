import React from 'react';

function Filter({ categories, onFilter }) {
  return (
    <div className="filter">
      {categories.map(category => (
        <button key={category} onClick={() => onFilter(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
