import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { normalChart } from '../constants/example';
import { fetchCustomStockData3 } from './services';
import { formatCustomStockData3 } from './Utils2';

const Livechart2 = ({ symbol, dateRange }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const data = await fetchCustomStockData3(symbol, dateRange);
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

  return (
    <ReactApexChart
      series={[{ data: seriesData }]}
      options={normalChart}
      type="line" // Change the chart type to 'line'
    />
  );
};

export default Livechart2;
