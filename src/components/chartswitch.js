import React, { useState } from 'react';
import Livechart from './livechart'; // Assuming Livechart is the candlestick chart component
import Livechart2 from './livechart2'; // Assuming Livechart2 is the normal chart component

const ChartSwitcher = ({ symbol }) => {
  const [showCandlestick, setShowCandlestick] = useState(false); // State to manage which chart to display

  // Function to toggle between candlestick and normal chart
  const toggleChart = () => {
    setShowCandlestick(!showCandlestick);
  };

  return (
    <div>
      <div className="col-span-2 md:col-span-1 xl:col-span-2 row-span-1">
        {showCandlestick ? (
          <Livechart symbol={symbol} />
        ) : (
          <Livechart2 symbol={symbol} />
        )}
      </div>
      <div>
        <button onClick={toggleChart}>
          {showCandlestick ? 'Switch to Normal Chart' : 'Switch to Candlestick Chart'}
        </button>
      </div>
    </div>
  );
};

export default ChartSwitcher;
