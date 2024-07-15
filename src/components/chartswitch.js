import React, { useState } from 'react';
import Livechart from './livechart'; 
import Livechart2 from './livechart2'; 

const ChartSwitcher = ({ symbol }) => {
  const [showCandlestick, setShowCandlestick] = useState(false);
  const [dateRange, setDateRange] = useState('6M'); // Default to 6 months

  const toggleChart = () => {
    setShowCandlestick(!showCandlestick);
  };

  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };

  return (
    <div>
      <div>
        <button className='pr-4 pl-10 font-bold text-lg' onClick={() => handleDateRangeChange('5D')}>5D</button>
        <button className='pr-3 font-bold text-lg' onClick={() => handleDateRangeChange('1M')}>1M</button>
        <button className='pr-3 font-bold text-lg' onClick={() => handleDateRangeChange('6M')}>6M</button>
        <button className='pr-3 font-bold text-lg' onClick={() => handleDateRangeChange('YTD')}>YTD</button>
        <button className='pr-3 font-bold text-lg' onClick={() => handleDateRangeChange('1Y')}>1Y</button>
        
        <button  className='pr-3 font-bold text-lg' onClick={() => handleDateRangeChange('5Y')}>5Y</button>
        <button className='pr-3 font-bold text-lg' onClick={() => handleDateRangeChange('MAX')}>Max</button>
      </div>
      <div className="flex justify-end">
  <button 
    className="pl-2 pr-2 py-1 mb-4 font-bold text-lg bg-gray-200 hover:bg-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    onClick={toggleChart}
  >
    {showCandlestick ? 'Normal Chart' : 'Switch to Candlestick Chart'}
  </button>
</div>

      <div className="col-span-2 md:col-span-1 xl:col-span-2 row-span-1">
        {showCandlestick ? (
          <Livechart symbol={symbol} dateRange={dateRange} />
        ) : (
          <Livechart2 symbol={symbol} dateRange={dateRange} />
        )}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default ChartSwitcher;
