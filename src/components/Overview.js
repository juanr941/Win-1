import React, { useState, useEffect } from 'react';
import { fetchCompanyOutlook } from './services';
import Card from "./Card";
import { fetchCompanyPrice } from './services';

export const CompanyOutlookTable = ({ symbol }) => {
    const [companyOutlook, setCompanyOutlook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const data = await fetchCompanyOutlook(symbol);
                setCompanyOutlook(data);

            } catch (err) {
                setError(err);
                console.error('Error:', err);
            }
        };

        if (symbol) {
            fetchData();
        }
    }, [symbol]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>Company Outlook for {symbol}</h1>
            {companyOutlook ? (
          <table>
          <tbody className='color-dark'>
              <tr>
                  <th>Symbol</th>
                  <td>{companyOutlook.symbol}</td>
              </tr> 
          </tbody>
      </table>
      
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

 export const Overview = ({ symbol }) => {
    const [priceData, setPriceData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching price data for symbol:", symbol); // Log the symbol
                const data = await fetchCompanyPrice(symbol);
                console.log("Fetched Company Price:", data); // Log the fetched data
                setPriceData(data);
            } catch (err) {
                setError(err);
                console.error('Error:', err);
            }
        };

        if (symbol) {
            fetchData();
        }
    }, [symbol]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!priceData) {
        return <div>Loading data...</div>;
    }

    const { price, changesPercentage, currency } = priceData;
    const change = (price * (changesPercentage / 100)).toFixed(2);
    const formattedChangePercentage = changesPercentage.toFixed(2);

    return (
        <Card>
            <span className="absolute left-4 top-4 text-dark-500 text-2xl xl:text-2xl 4xl:text-6xl">
                {/* Company name or other static text can go here */}
            </span>
            <div className="w-full items-center justify-around">
                <span className="text-4xl xl:text-4xl 2xl:text-4xl flex items-center">
                    <br />
                    ${price}
                    <span className="text-4xl xl:text-4xl 2xl:text-4xl text-neutral-400 m-2">
                        {currency}
                    </span>
                    <span className={`text-4xl xl:text-4xl 2xl:text-4xl ${change > 0 ? "text-lime-400" : "text-red-400"}`}>
                        {change} <span>({formattedChangePercentage}%)</span>
                    </span>
                </span>
            </div>
        </Card>
    );
};

export default Overview;