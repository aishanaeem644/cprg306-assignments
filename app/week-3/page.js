import React from 'react';
import ItemList from './item-list'; 

const Page = () => {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Shopping List
        </h1>
        <ItemList />
      </div>
    </main>
  );
};

export default Page;
