// page.js

"use client";

import React, { useState } from 'react';
import { useUserAuth } from './_utils/auth-context'; // Import the authentication context
import { useNavigate } from 'react-router-dom';
import ItemList from './item-list'; 
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

const Page = () => {
  // Destructure user from useUserAuth to check login status
  const { user } = useUserAuth();
  const navigate = useNavigate();

  // Redirect to login page if user is not authenticated
  if (!user) {
    navigate("/login"); // Adjust the route as needed
    return null; // Prevent the component from rendering if the user is not logged in
  }

  // Initialize state variables
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

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
        <div className="flex flex-col items-center justify-center bg-white p-5 flex-1 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-900">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <div className="text-white">/break</div>

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        
        {/* Right side - MealIdeas component */}
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};

export default Page;
