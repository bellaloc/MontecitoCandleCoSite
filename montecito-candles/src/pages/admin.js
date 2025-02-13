import { useState, useEffect } from 'react';
import { fetchProducts } from '../lib/api';

const Admin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product._id} className="flex justify-between items-center border p-4 rounded-lg">
            <span>{product.name}</span>
            <span>${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
