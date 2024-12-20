"use client";

import React, { useState } from 'react';
import ItemList from './item-list'; 
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
  // Initialize state variables
  const [items, setItems] = useState(itemsData);
  const [setSelectedItemName] = useState('');

  // Event handler to add a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // Event handler to handle item selection and clean up the name
  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(',')[0]  // Take only the part before a comma
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '') // Remove emojis
      .trim(); // Trim any extra whitespace
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        
        {/* Left side - NewItem and ItemList components */}
        <div className="flex flex-col items-center justify-center bg-white p-5 w-1/2 rounded-lg shadow-md"> {/* Adjust width to half */}
          <h1 className="text-3xl font-bold text-center text-gray-900">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <div className="text-white">/break</div>

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>
    </main>
  );
};

export default Page;
