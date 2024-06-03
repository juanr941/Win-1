import React, { useState, useEffect } from 'react';
import { fetchCompanyOutlook } from './services';
import services from './services'
import { formatCompanyOutlook } from './Utils2';

const CompanyOutlookTable = ({ symbol }) => {
    const [companyOutlook, setCompanyOutlook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await services.fetchCompanyOutlook(symbol);
                const formattedData = formatCompanyOutlook(data);
                setCompanyOutlook(formattedData);
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
                            <th>Industry</th>
                            <th>Exchange</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{companyOutlook.industry}</td>
                            <td>{companyOutlook.exchange}</td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Loading company outlook...</p>
            )}
        </div>
    );
};

export default CompanyOutlookTable;
