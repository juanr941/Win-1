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
    
    const getLimitedInfo = (description) => {
        const sentences = description.split('. ');
    
        if (sentences[0].length < 20 && sentences.length > 1) {
            // Capitalize the first letter of the second sentence
            let secondSentence = sentences[1];
            secondSentence = secondSentence.charAt(0).toUpperCase() + secondSentence.slice(1);
            
            // Find the index of the second dot in the second sentence
            const secondDotIndex = secondSentence.indexOf('.');
    
            if (secondDotIndex !== -1) {
                // Return up to the second dot in the second sentence
                return `${secondSentence.substring(0, secondDotIndex + 1)}.`;
            } else {
                // If no second dot found, return the whole second sentence
                return `${secondSentence}.`;
            }
        } else {
            
            return sentences[0] + '.';
        }
    };
    
    const limitedInfo = getLimitedInfo(companyInfo.description);
   


    return (
        <div className="flex items-start space-x-4 pr-3">
        <img src={companyInfo.image} alt={`${companyInfo.companyName} logo`} className="w-20 h-20 bg-black py-1 rounded-md" />
        <div>
            <h1 className="text-xl font-bold pt-3">{companyInfo.companyName}</h1>
            <p className="text-lg">{limitedInfo}</p>
        </div>
        <div>
        <p className="text-xl pt-3">
  <span className="font-bold">Exchange:</span> {companyInfo.exchange}
</p>
<p className="text-xl">
  <span className="font-bold">Sector:</span> {companyInfo.sector}
</p>
           
            </div>
    </div>
    );
};

export default Description

