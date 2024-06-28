import React, { useState, useEffect } from 'react';
import { fetchCompanyOutlook } from './services';
import { fetchCompanyPrice } from './services';
import TableRow from './tablerow';

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
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg pt-4 '>

            {companyOutlook && priceInfo ? (
                <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-100 table-auto">
                    <tbody>
                    <TableRow name="Open" value={`$${priceInfo.open}`} index={14} />
                        <TableRow name="Previous Close" value={`$${priceInfo.previousClose}`} index={15} />
                        <TableRow name="EPS" value={priceInfo.eps} index={16} />
                        <TableRow name="PE" value={priceInfo.pe} index={17} />
                        <TableRow name="Volume" value={priceInfo.volume} index={12} />
                        <TableRow name="Day Low" value={`$${priceInfo.dayLow}`} index={4} />
                        <TableRow name="Day High" value={`$${priceInfo.dayHigh}`} index={5} />
                        <TableRow name="Year Low" value={`$${priceInfo.yearLow}`} index={6} />
                        <TableRow name="Year High" value={`$${priceInfo.yearHigh}`} index={7} />
                        <TableRow name="Market Cap" value={`$${priceInfo.marketCap}`} index={8} />
                        <TableRow name="Average Volume" value={priceInfo.avgVolume} index={13} />
                        <TableRow name="Average Volume (50 days)" value={`$${priceInfo.priceAvg50}`} index={9} />
                        {/* <TableRow name="Average Volume (200 days)" value={`$${priceInfo.priceAvg200}`} index={10} /> */}
                     
                       
                        

                    </tbody>
                </table>
            ) : <div>Loading data...</div>}
        </div>
    );
};

export default CompanyOutlookTable;
