// TableRow.js

import React from 'react';

const TableRow = ({ name, value, index }) => {
  const isOdd = index % 2 === 0; // Check if index is odd or even for alternating styles

  return (
    <tr className={`py-2 ${isOdd ? 'bg-gray-50 dark:bg-white-800' : 'bg-white dark:bg-white-900'} border-b dark:border-gray-700`}>
      <th scope="row" className="px-4 py-2 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-black">{name}</th>
      <td className="px-6 py-2 text-black">{value}</td>
    </tr>
  );
}

export default TableRow;
