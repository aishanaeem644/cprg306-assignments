"use client"; // Add this directive to indicate it's a client-side component

import React, { useState } from 'react';
import NewItem from './new-item';

const Page = () => {
  const [name, setName] = useState(''); // Initialize name with an empty string
  const [category, setCategory] = useState('Produce'); // Initialize category with "Produce"
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create an item object with the current values
    const item = {
      name,
      quantity,
      category,
    };

    console.log(item); // Log the item object to the console
    alert(`Added item Name: ${name}, Quantity: ${quantity}, Category: ${category}`); // Display alert with current values

    // Reset the form fields
    setName('');
    setCategory('Produce');
    setQuantity(1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded shadow-md">
      <h1 className="text-3xl font-bold mb-5 text-black">Page with New Item</h1>
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
          <NewItem />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Page;

