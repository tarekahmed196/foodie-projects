import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [items, setItems] = useState([]);
useEffect(() => {
  const getProducts = async () => {
    try {
      const response = await axios.get('https://foodie2.free.beeceptor.com/');
      console.log(response);
      setItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  getProducts();
}, []);
console.log(items);
    return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16">
  {items.map((item) => (
    <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
      <img src={item.picture} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-gray-600">{item.about}</p>
        <p className="text-green-600 font-semibold">${item.price}</p>
      </div>
    </div>
  ))}
</div>

    );
};

export default Products;