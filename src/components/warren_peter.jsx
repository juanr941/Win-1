import React, { useState, useEffect } from 'react';
import InfoCardWarren from './warrenpetercard';

const CardFWarren = () => {
  const [results, setResults] = useState({});
  const [ticker, setTicker] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const analysisTypes = ['Buffett', 'ONeil', 'Graham', 'OShaughnessy'];

  const performAnalysis = async () => {
    setIsLoading(true);
    const newResults = {};

    for (const type of analysisTypes) {
      try {
        const response = await fetch('http://localhost:8000/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ticker: ticker,
            api_key: "MZNUxALEyarHKD7VgwIFq9BntSNq9MjA",
            analysis_type: type
          }),
        });

        const data = await response.json();
        newResults[type] = data;
      } catch (error) {
        console.error(`Error fetching ${type} analysis:`, error);
        newResults[type] = { error: 'Failed to fetch data' };
      }
    }

    setResults(newResults);
    setIsLoading(false);
  };

  return (
    <div id="app" className="md:flex antialiased">
      <main className="bg-gray-100 w-full overflow-y-auto">
        <section id="performance">
          <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
            <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
              Gurus Confidence
            </header>
            <div className="p-4">
              <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="Enter stock ticker (e.g., AAPL)"
                className="p-2 border rounded"
              />
              <button
                onClick={performAnalysis}
                disabled={isLoading}
                className="ml-2 p-2 bg-blue-500 text-white rounded"
              >
                {isLoading ? 'Analyzing...' : 'Analyze Stock'}
              </button>
            </div>
            <section className="flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300">
              {analysisTypes.map((type) => (
                <InfoCardWarren
                  key={type}
                  title={type}
                  conditionsMet={results[type]?.conditions_met || 0}
                  totalConditions={results[type]?.total_conditions || 0}
                  percentage={results[type]?.percentage || 0}
                />
              ))}
            </section>
          </section>
        </section>
      </main>
    </div>
  );
};

export default CardFWarren;
