import React from 'react';

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-10 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
      {results.map((result, index) => (
        <div key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          {result.name}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
