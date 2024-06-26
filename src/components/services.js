const API_KEY = process.env.REACT_APP_API_KEY;
// console.log("API_KEY:", API_KEY);

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

export const fetchCompanyOutlook = async (symbol) => {
    const url = `https://financialmodelingprep.com/api/v3/search?query=${symbol}&apikey=${API_KEY}`;
   
    // https://financialmodelingprep.com/api/v3/search?query=AA

    try {
        const response = await fetch(url);
        const data = await response.json();
        // Find the specific company information from the array
        const companyInfo = data.find(company => company.symbol.toUpperCase() === symbol.toUpperCase());
        console.log("Company Info:", companyInfo); // Log the specific company info
        return companyInfo || null;

    } catch (error) {
        console.error('Error fetching company outlook data:', error);
        throw error;
    }
};


export const fetchCompanyPrice = async (symbol) => {
    const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Price API Response:", data); // Log the API response

        if (data && data.length > 0) {
            const {
                price, changesPercentage, currency, dayLow, dayHigh,
                yearHigh, yearLow, marketCap, priceAvg50, priceAvg200,
                exchange, volume, avgVolume, open, previousClose, eps, pe
            } = data[0];
            return {
                price, changesPercentage, currency, dayLow, dayHigh,
                yearHigh, yearLow, marketCap, priceAvg50, priceAvg200,
                exchange, volume, avgVolume, open, previousClose, eps, pe
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching company price data:', error);
        throw error;
    }
};


