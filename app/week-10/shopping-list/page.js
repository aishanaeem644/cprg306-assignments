"use client";

import React, { useState, useEffect } from 'react';
import { getItems, addItem } from '../shopping-list-service';
import ItemList from './item-list'; 
import NewItem from './new-item';
import MealIdeas from './meal-ideas';

const Page = ({ user }) => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  // Load the shopping list items for the current user
  const loadItems = async () => {
    try {
      const userItems = await getItems(user.uid); // Replace user.uid with the actual user ID
      setItems(userItems);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  // Fetch items when the component is mounted
  useEffect(() => {
    if (user && user.uid) {
      loadItems();
    }
  }, [user]); // Re-run if the user changes

  // Event handler to add a new item
  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem); // Add the item to Firestore
      const itemWithId = { ...newItem, id: newItemId };
      setItems((prevItems) => [...prevItems, itemWithId]); // Update the state
    } catch (error) {
      console.error("Error adding item:", error);
    }
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
