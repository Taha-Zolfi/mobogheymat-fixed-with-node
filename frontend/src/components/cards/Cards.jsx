import React, { useState, useEffect } from 'react';
import './cards.css'


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

<div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product">
            <img src={product.image_url} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
</div> 
</div>
  );
}

export default Cards;
