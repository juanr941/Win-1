import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { normalChart } from '../constants/example';
import { fetchCustomStockData3 } from './services';
import { formatCustomStockData3 } from './Utils2';

const Livechart2 = ({ symbol }) => {
  const [stockData, setStockData] = useState([]);
  const [dateRange, setDateRange] = useState('6M'); // Default date range is 5 days

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const data = await fetchCustomStockData3(symbol, dateRange); // Fetch data based on selected date range
        setStockData(data);
      } catch (error) {
        console.error('Error fetching custom stock data:', error);
      }
    };

    if (symbol) {
      fetchStockData();
    }
  }, [symbol, dateRange]);

  const seriesData = useMemo(() => formatCustomStockData3(stockData), [stockData]);

  const handleDateRangeChange = (newRange) => {
    setDateRange(newRange);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleDateRangeChange('5D')}>5 Days</button>
        <button onClick={() => handleDateRangeChange('1M')}>1 Month</button>
        <button onClick={() => handleDateRangeChange('6M')}>6 Months</button>
        <button onClick={() => handleDateRangeChange('YTD')}>YTD</button>
        <button onClick={() => handleDateRangeChange('1Y')}>1 Year</button>
        <button onClick={() => handleDateRangeChange('5Y')}>5 Years</button>
        <button onClick={() => handleDateRangeChange('MAX')}>Max</button>
      </div>
      <ReactApexChart
        series={[{ data: seriesData }]}
        options={normalChart}
        type="line" // Change the chart type to 'line'
      />
    </div>
  );
};

export default Livechart2;
