"use client"; // Add this directive to indicate it's a client-side component

import React, { useState } from 'react';

// Utility function to generate a random string for the id
const generateRandomId = () => Math.random().toString(36).substring(2, 15);

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1); // Default quantity set to 1
  const [category, setCategory] = useState('Produce'); // Default category

  // Function to decrement quantity, ensuring it doesn't go below 1
  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  // Function to increment quantity
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // No upper limit; can be changed as needed
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create a new item object
    const newItem = {
      id: generateRandomId(), // Generate a random id
      name,
      category,
      quantity,
    };

    // Invoke the onAddItem prop with the new item object
    onAddItem(newItem);
    
    // Reset the form fields after submission
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
          placeholder="Enter the item name"
        />
      </div>

      {/* Category Field */}
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-medium text-black">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Quantity Field */}  
      <div className="mb-4">
        <label className="block text-sm font-medium text-black">Quantity</label>
        <div className="flex space-x-3">
          {/* Decrement Button */}
          <button
            type="button"
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            disabled={quantity === 1}
          >
            -
          </button>

          {/* Quantity Display */}
          <span className="px-4 py-2 border rounded text-black">{quantity}</span>

          {/* Increment Button */}
          <button
            type="button"
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
};

export default NewItem;

