// page.js

"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Next.js useRouter hook
import { useUserAuth } from './_utils/auth-context'; // Import the authentication context
import ItemList from './shopping-list/item-list'; 
import NewItem from './shopping-list/new-item';
import MealIdeas from './shopping-list/meal-ideas';
import itemsData from './shopping-list/items.json';

const Page = () => {
  // Destructure user from useUserAuth to check login status
  const { user } = useUserAuth();
  const router = useRouter();

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if (!user) {
      router.push('/login'); // Redirect to the login page
    }
  }, [user, router]);

  // If the user is not logged in, don't render the page
  if (!user) return null;

  // Initialize state variables
  const [items, setItems] = React.useState(itemsData);
  const [selectedItemName, setSelectedItemName] = React.useState('');

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
