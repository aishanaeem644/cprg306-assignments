"use client"; // Add this directive to indicate it's a client-side component

import React from 'react';

const NewItem = ({ name, setName, category, setCategory, handleSubmit }) => {
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
    </form>
  );
};

export default NewItem;
