import React, { useEffect, useState } from 'react';
import { fetchDescription } from './services';

const Description = ({ symbol }) => {
    const [companyInfo, setCompanyInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchDescription(symbol);
                setCompanyInfo(data);
            } catch (err) {
                setError(err);
            }
        };

        if (symbol) {
            fetchData();
        }
    }, [symbol]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!companyInfo) {
        return <div>Loading...</div>;
    }
    const limitedInfo = companyInfo.description.split('. ')[0] + '.';


    return (
        <div className="flex items-start space-x-4 pr-3">
        <img src={companyInfo.image} alt={`${companyInfo.companyName} logo`} className="w-16 h-16" />
        <div>
            <h1 className="text-xl font-bold">{companyInfo.companyName}</h1>
            <p className="text-sm">{limitedInfo}</p>
        </div>
        <div>
        <p className="text-xl font-bold">Exchange: {companyInfo.exchange}</p>
            <p className="text-xl font-bold ">Sector: {companyInfo.sector}</p>
            </div>
    </div>
    );
};

export default Description

