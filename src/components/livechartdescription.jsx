import React, { useState, useEffect } from 'react';
import { fetchCompanyOutlook } from './services';
import { fetchCompanyPrice } from './services';
import { formatCompanyOutlook } from './Utils2';

const CompanyOutlookTable = ({ symbol }) => {
    const [companyOutlook, setCompanyOutlook] = useState(null);
    const [priceInfo, setPriceInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const outlookData = await fetchCompanyOutlook(symbol);
                setCompanyOutlook(outlookData);

                const priceData = await fetchCompanyPrice(symbol);
                setPriceInfo(priceData);
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
            <h1 className='text-strong'>{symbol}</h1>
            {companyOutlook && priceInfo ? (
                <table>
                    <tbody className='color-dark'>
                        <tr>
                            <th>Name</th>
                            <td>{companyOutlook.name}</td>
                        </tr>
                        <tr>
                            <th>Currency</th>
                            <td>{companyOutlook.currency}</td>
                        </tr>
                        <tr>
                            <th>Exchange</th>
                            <td>{companyOutlook.exchangeShortName}</td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>${priceInfo.price}</td>
                        </tr>
                        <tr>
                            <th>Day Low</th>
                            <td>${priceInfo.dayLow}</td>
                        </tr>
                        <tr>
                            <th>Day High</th>
                            <td>${priceInfo.dayHigh}</td>
                        </tr>
                        <tr>
                            <th>Year Low</th>
                            <td>${priceInfo.yearLow}</td>
                        </tr>
                        <tr>
                            <th>Year High</th>
                            <td>${priceInfo.yearHigh}</td>
                        </tr>
                        <tr>
                            <th>Market Cap</th>
                            <td>${priceInfo.marketCap}</td>
                        </tr>
                        <tr>
                            <th>Average Volume (50 days)</th>
                            <td>${priceInfo.priceAvg50}</td>
                        </tr>
                        <tr>
                            <th>Average Volume (200 days)</th>
                            <td>${priceInfo.priceAvg200}</td>
                        </tr>
                        <tr>
                            <th>Exchange</th>
                            <td>{priceInfo.exchange}</td>
                        </tr>
                        <tr>
                            <th>Volume</th>
                            <td>{priceInfo.volume}</td>
                        </tr>
                        <tr>
                            <th>Average Volume</th>
                            <td>{priceInfo.avgVolume}</td>
                        </tr>
                        <tr>
                            <th>Open</th>
                            <td>${priceInfo.open}</td>
                        </tr>
                        <tr>
                            <th>Previous Close</th>
                            <td>${priceInfo.previousClose}</td>
                        </tr>
                        <tr>
                            <th>EPS</th>
                            <td>{priceInfo.eps}</td>
                        </tr>
                        <tr>
                            <th>PE</th>
                            <td>{priceInfo.pe}</td>
                        </tr>
                    </tbody>
                </table>
            ) : <div>Loading data...</div>}
        </div>
    );
};

export default CompanyOutlookTable;
