import React, { useState, useEffect, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import { candleStickChart } from '../constants/example';
import fetchCustomStockData from './services'; // Import fetchCustomStockData function
import formatCustomStockData from './Utils2';

const Livechart = ({ symbol }) => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    if (symbol) {
      fetchCustomStockData(symbol)
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



// import React, { useState,useEffect, useMemo } from 'react'
// import ReactApexChart from 'react-apexcharts'
// import { candleStickChart } from '../constants/example'
// import { fetchStockData } from './services'
// import { formatStockdata } from './utils'

// const Livechart = ({symbol}) => {
//   const[stockData,setstockData] = useState([])

//   useEffect (()=>{
//   fetchStockData(symbol).then(data =>
//     setstockData(data)
  
//   )
// },[])



// //set a variable
// const seriesData = useMemo(() => formatStockdata(stockData), [stockData]);

//   console.log(seriesData);

//   return (
//     // Plot the data
//     <ReactApexChart
//       series={[{ data: seriesData }]}
//       options={candleStickChart}
//       type="candlestick"
//     /> 
//   );
// };

// export default Livechart;
