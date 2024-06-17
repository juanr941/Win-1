import React, { useState, useEffect } from 'react';
import { fetchCompanyOutlook } from './services';
import { formatCompanyOutlook } from './Utils2';

const CompanyOutlookTable = ({ symbol }) => {
    const [companyOutlook, setCompanyOutlook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data for symbol:", symbol); 
                const data = await fetchCompanyOutlook(symbol);
                console.log("Fetched Company Outlook:", data);
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
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Currency</th>
                            <th>Exchange</th>
                            {/* <th>Full-Time Employees</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip</th>
                            <th>DCF Difference</th>
                            <th>DCF</th> */}
                        </tr>
                    </thead>
                    <tbody className='color-dark'>
                        <tr>
                            <td>{companyOutlook.symbol}</td>
                            <td>{companyOutlook.name}</td>
                            <td>{companyOutlook.currency}</td>
                            <td>{companyOutlook.exchangeShortName}</td>
                            {/* <td>{companyOutlook.fullTimeEmployees}</td>
                            <td>{companyOutlook.phone}</td>
                            <td>{companyOutlook.address}</td>
                            <td>{companyOutlook.city}</td>
                            <td>{companyOutlook.state}</td>
                            <td>{companyOutlook.zip}</td>
                            <td>{companyOutlook.dcfDiff}</td>
                            <td>{companyOutlook.dcf}</td> */}
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default CompanyOutlookTable;
