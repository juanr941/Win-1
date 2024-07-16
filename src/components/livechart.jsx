import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { candleStickChart } from '../constants/example';
import { fetchCustomStockData2 } from './services'; 
import { formatCustomStockData } from './Utils2'; 

const Livechart = ({ symbol, dateRange }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const data = await fetchCustomStockData2(symbol, dateRange);
        console.log('Fetched Stock Data:', data);
        setStockData(data);
      } catch (error) {
        console.error('Error fetching custom stock data:', error);
      }
    };

    if (symbol) {
      fetchStockData();
    }
  }, [symbol, dateRange]);

  const seriesData = useMemo(() => formatCustomStockData(stockData), [stockData]);

  return (
    <ReactApexChart
      series={[{ data: seriesData }]}
      options={candleStickChart}
      type="candlestick"
    />
  );
};

export default Livechart;
