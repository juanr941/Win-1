// src/components/InfoCard.js

import React from 'react';

const InfoCardWarren = ({ title, value, change, isPositive }) => {
  return (
    <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
      <span className="text-xs font-medium text-gray-500 uppercase">{title}</span>
      <div className="py-4 flex items-center justify-center text-center">
        <span className="mr-4 text-3xl">{value}</span>
        <span className={`inline-flex items-center h-6 px-2 rounded text-white text-xs ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}>
          {isPositive ? `+${change}%` : `${change}`}
        </span>
      </div>
    </div>
  );
};

export default InfoCardWarren;
