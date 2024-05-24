import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Conditions({ searchInput }) {
  const [stockResult, setStockResult] = useState(null);

  useEffect(() => {
    if (searchInput) {
      analyzeStock(searchInput);
    }
  }, [searchInput]);

  const analyzeStock = async (ticker) => {
    if (!ticker) {
      alert('Please enter a stock ticker');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/analyze', { ticker });
      setStockResult(response.data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setStockResult({ error: "Failed to fetch stock data" });
    }
  };

  const renderResult = () => {
    if (!stockResult) return null;

    if (stockResult.error) {
      return <p>Error: {stockResult.error}</p>;
    }

    return (
      <div>
        <p>Conditions Met: {stockResult.conditions_met}/{stockResult.total_conditions}</p>
        <p>Percentage: {stockResult.percentage.toFixed(2)}%</p>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Analysis</h1>
        {renderResult()}
      </header>
    </div>
  );
}

export default Conditions;