import React, { useState, useEffect } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products] = useState([
    { id: 1, title: 'Apple iPhone 13', description: 'Latest iPhone with A15 Bionic chip.' },
    { id: 2, title: 'Samsung Galaxy S21', description: 'Flagship Android phone with 5G support.' },
    { id: 3, title: 'Google Pixel 6', description: 'Google\'s flagship phone with Tensor chip.' },
    { id: 4, title: 'OnePlus 9 Pro', description: 'High-performance phone with Hasselblad camera.' },
    { id: 5, title: 'Xiaomi Mi 11', description: 'Affordable flagship with Snapdragon 888.' },
  ]);

  useEffect(() => {
  
    const debounceTimer = setTimeout(() => {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }, 500); 

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, products]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;