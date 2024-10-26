"use client";

import React, { useState, useEffect } from 'react';
import ItemList from './item-list'; 
import NewItem from './new-item'; // Make sure to adjust the path if necessary
import itemsData from './items.json'; // Adjust the path based on your file structure

const Page = () => {
  // Initialize state variable with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler to add a new item
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
      <div className="flex flex-col items-center justify-center  bg-white p-5">
        <h1 className="text-3xl font-bold text-center text-gray-900 ">
          Shopping List
        </h1>
        {/* Pass the handleAddItem to NewItem and items to ItemList */}
        <NewItem onAddItem={handleAddItem} />
        </div>
        /break
        <ItemList items={items} />
      </div>
    </main>
  );
};

export default Page;
