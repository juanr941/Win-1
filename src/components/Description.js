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
        <div>
            <img src={companyInfo.image} alt={`${companyInfo.companyName} logo`} />
            <h3 className="text-dark">{companyInfo.companyName}</h3>
            <p className="text-dark">{limitedInfo}</p>
            <p className="text-dark">Exchange: {companyInfo.exchange}</p>
            <p className="text-dark">Sector: {companyInfo.sector}</p>
        </div>
    );
};

export default Description

