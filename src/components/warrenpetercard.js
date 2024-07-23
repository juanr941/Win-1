import React from 'react';

const InfoCardWarren = ({ title, conditionsMet, totalConditions, percentage }) => {
  const isPositive = percentage >= 50;

  return (
    <div className="p-4 w-full sm:w-1/2 lg:w-1/4 border-b border-solid border-gray-300 md:border-b-0 sm:border-r">
      <span className="text-xs font-medium text-gray-500 uppercase">{title}</span>
      <div className="py-4 flex items-center justify-center text-center">
        <span className="mr-4 text-3xl">{conditionsMet}/{totalConditions}</span>
        <span className={`inline-flex items-center h-6 px-2 rounded text-white text-xs ${isPositive ? 'bg-green-500' : 'bg-red-500'}`}>
          {percentage.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default InfoCardWarren;

