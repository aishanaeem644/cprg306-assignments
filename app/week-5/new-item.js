"use client"; // Add this directive to indicate it's a client-side component

import React, { useState } from 'react';

const NewItem = () => {
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  // Function to increment quantity, ensuring it doesn't exceed 20
  const increment = () => {
    setQuantity((prevQuantity) => (prevQuantity < 20 ? prevQuantity + 1 : prevQuantity));
  };

  // Function to decrement quantity, ensuring it doesn't go below 1
  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
  };

  return (
    <div className>

      {/* Original Quantity Display and Increment/Decrement Buttons */}
      <p className="text-lg mb-3 text-black">
        Current Quantity: <span className="font-semibold">{quantity}</span>
      </p>

      <div className="flex space-x-3 mb-5">
        {/* Decrement button, disabled if quantity is 1 */}
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 bg-red-500 text-white rounded ${
            quantity === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-600'
          }`}
        >
          -
        </button>

        {/* Increment button, disabled if quantity is 20 */}
        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 bg-green-500 text-white rounded ${
            quantity === 20 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
          }`}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItem;


