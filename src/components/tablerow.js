// TableRow.js

import React from 'react';

const TableRow = ({ name, value, index }) => {
  const isOdd = index % 2 === 0; // Check if index is odd or even for alternating styles

  return (
    <tr className={`py-4 ${isOdd ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'} border-b dark:border-gray-700`}>
      <th scope="row" className="px-4 py-3 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white">{name}</th>
      <td className="px-6 py-3">{value}</td>
    </tr>
  );
}

export default TableRow;
