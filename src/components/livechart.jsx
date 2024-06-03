import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { candleStickChart } from '../constants/example';
import { fetchCustomStockData2 } from './services'; // Import fetchCustomStockData2 as named export
import { formatCustomStockData } from './Utils2'; // Import formatCustomStockData as named export

const Livechart = ({ symbol }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    if (symbol) {
      fetchCustomStockData2(symbol)
        .then(data => {
          setStockData(data);
        })
        .catch(error => {
          console.error('Error fetching custom stock data:', error);
        });
    }
  }, [symbol]);

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
