const API_KEY = process.env.REACT_APP_API_KEY;
console.log("API_KEY:", API_KEY);

export const fetchCustomStockData2 = async (symbol) => {
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.historical;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchCustomStockData2;

// export const fetchCompanyOutlook = async (symbol) => {
//     const url = `https://financialmodelingprep.com/api/v4/company-outlook?symbol=${symbol}&apikey=${API_KEY}`;

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         if (data) {
//             const { industry, exchange } = data;
//             return { industry, exchange };
//         }
//         return null;
//     } catch (error) {
//         console.error('Error fetching company outlook data:', error);
//         throw error;
//     }
// };
