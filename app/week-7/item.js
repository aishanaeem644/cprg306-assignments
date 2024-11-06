import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center p-4 border-b border-gray-200">
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">Buy {quantity} in {category}</p>
      </div>

    </li>
  );
};

export default Item;



