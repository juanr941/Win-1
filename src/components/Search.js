import React, { useState } from "react";
import { exampleSearchResults } from "../constants/example";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";
// import { appendOffsetOfLegend } from "recharts/types/util/ChartUtils";
// import { getAllByPlaceholderText } from "@testing-library/react";

const Search = ({ setSymbol }) => {
    const [input, setInput] = useState("");
    const [bestMatch, setBestMatch] = useState([]);

    const clear = () => {
        setInput("");
        setBestMatch([]);
    };

    const updateBestMatch = () => {
        setBestMatch(exampleSearchResults.results || []);
        setSymbol(input);
    };

    return (
        <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200">
            <input
                type="text"
                value={input}
                className="w-full px-4 py-2 focus:outline-none rounded-md"
                placeholder="Search..."
                onChange={(event) => setInput(event.target.value)}
                onKeyPress={(event) => {
                    if (event.key === "Enter") {
                        updateBestMatch();
                    }
                }}
            />
            {input && (
                <button onClick={clear}>
                    <XIcon className="h-4 w-4 fill-gray-700" />
                </button>
            )}
            <button
                onClick={updateBestMatch}
                className="h-9 w-8 bg-purple-600 rounded-md flex justify-center items-center m-1 p-2"
            >
                <SearchIcon className="h-4 w-4 fill-gray-400" />
            </button>
            {input && bestMatch.length > 0 ? (
                <SearchResults results={bestMatch} />
            ) : null}
        </div>
    );
};

export default Search;


    //add the self.ticker,  
    // from app.py
    // class BuffettAnalysis:
    // def __init__(self, ticker, api_key):
    //     self.ticker = ticker
    //     self.api_key = api_key

    // def get_jsonparsed_data(self, url):
    //     response = requests.get(url)
    //     return response.json()

    // def get_financials(self):
    //     url = f"https://financialmodelingprep.com/api/v3/income-statement/{self.ticker}?apikey={self.api_key}"
    //     return self.get_jsonparsed_data(url)

    //make this analysis in services.js  but dont delete the api, keep this api. 
    // const performAnalysis = async () => {
    //     setIsLoading(true);
    //     const newResults = {};
    
    //     for (const type of analysisTypes) {
    //       try {
    //         const response = await fetch('http://localhost:8000/analyze', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({
    //             ticker: ticker,
    //             api_key: "MZNUxALEyarHKD7VgwIFq9BntSNq9MjA",
    //             analysis_type: type
    //           }),
    //         });
    
    //         const data = await response.json();
    //         newResults[type] = data;
    //       } catch (error) {
    //         console.error(`Error fetching ${type} analysis:`, error);
    //         newResults[type] = { error: 'Failed to fetch data' };
    //       }
    //     }

    // set this ticket from warren_peter 

    // eturn (
    //     <div id="app" className="md:flex antialiased">
    //       <main className="bg-gray-100 w-full overflow-y-auto">
    //         <section id="performance">
    //           <section className="m-4 bg-white border border-gray-300 border-solid rounded shadow">
    //             <header className="border-b border-solid border-gray-300 p-4 text-lg font-medium">
    //               Gurus Confidence
    //             </header>
    //             <div className="p-4">
    //               <input
    //                 type="text"
    //                 value={ticker}
    //                 onChange={(e) => setTicker(e.target.value)}
    //                 placeholder="Enter stock ticker (e.g., AAPL)"
    //                 className="p-2 border rounded"
    //               />
    //               <button
    //                 onClick={performAnalysis}
    //                 disabled={isLoading}
    //                 className="ml-2 p-2 bg-blue-500 text-white rounded"
    //               >
    //                 {isLoading ? 'Analyzing...' : 'Analyze Stock'}
    //               </button>
    //             </div>
    //             <section className="flex flex-row flex-wrap items-center text-center border-b border-solid border-gray-300">
    //               {analysisTypes.map((type) => (
    //                 <InfoCardWarren
    //                   key={type}
    //                   title={type}
    //                   conditionsMet={results[type]?.conditions_met || 0}
    //                   totalConditions={results[type]?.total_conditions || 0}
    //                   percentage={results[type]?.percentage || 0}
    //                 />
    //               ))}
    //             </section>
    //           </section>
    //         </section>
    //       </main>
    //     </div>


    