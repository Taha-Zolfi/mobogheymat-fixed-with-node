import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './cards.css';

const Cards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className='con'>
      <div className='cards'>
        <motion.div
          className="product-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="product"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={product.image_url} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Cards;
