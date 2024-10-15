"use client"; // Add this directive to indicate it's a client-side component

import React, { useState } from 'react';

const Page = () => {
  const [name, setName] = useState(''); // Initialize name with an empty string
  const [category, setCategory] = useState('Produce'); // Initialize category with "Produce"
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  // Function to increment quantity, ensuring it doesn't exceed 20
  const increment = () => {
    setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
  };

  // Function to decrement quantity, ensuring it doesn't go below 1
  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

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
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">

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
              disabled={quantity === 20}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
