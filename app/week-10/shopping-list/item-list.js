// item-list.js

"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState('name'); // Initial sorting by name

  // Sorting items based on sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/* Sort buttons */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-blue-500' : 'bg-gray-200'} text-black`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500' : 'bg-gray-200'} text-black`}
        >
          Sort by Category
        </button>
      </div>

      {/* Render sorted items */}
      <ul className="max-w-md mx-auto bg-white rounded-lg shadow-md">
        {sortedItems.map(item => (
          <Item
            key={item.id}
            item={item} // Pass the entire item object to Item
            onSelect={() => onItemSelect(item)} // Trigger onItemSelect when clicked
          />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
