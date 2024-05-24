import React, { useEffect, useState } from 'react';
import { formatStockdata2 } from './Utils2';
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
ChartJS.register( CategoryScale, LinearScale, PointElement,LineElement, Title,Tooltip, Filler, Legend
  );


  const ChartComponent = ({symbol}) => {
    const[stockData,setstockData2] = useState([])
  
    useEffect (()=>{
    fetchStockData2(symbol).then(data =>
      setstockData2(data)
    
    )
  },[])

  const seriesData = useMemo(() => formatStockdata2(stockData), [stockData]);

  console.log(seriesData);

  return (
    // Plot the data
    <Line
      series={[{ data: seriesData }]}
      type="line"
    /> 
  );
};

export default ChartComponent;

  


