import React from 'react';

const Item = ({ item, onSelect }) => {
  return (
    <li 
      onClick={() => onSelect(item)} 
      className="cursor-pointer hover:bg-gray-100 rounded flex justify-between items-center p-4 border-b border-gray-200"
    >
      <div className="flex-1">
        {/* Use item.name for the name, item.quantity for quantity, item.category for category */}
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">Buy {item.quantity} in {item.category}</p>
      </div>
    </li>
  );
};

export default Item;

