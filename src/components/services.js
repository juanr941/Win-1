const API_KEY = process.env.REACT_APP_API_KEY;

const filterDataByTimeframe = (data, timeframe) => {
    const now = new Date();
    let startDate;

    switch (timeframe) {
        case '1D':
            startDate = new Date();
            startDate.setDate(now.getDate() - 1);
            break;
        case '5D':
            startDate = new Date();
            startDate.setDate(now.getDate() - 5);
            break;
        case '1M':
            startDate = new Date();
            startDate.setMonth(now.getMonth() - 1);
            break;
        case '6M':
            startDate = new Date();
            startDate.setMonth(now.getMonth() - 6);
            break;
        case 'YTD':
            startDate = new Date(now.getFullYear(), 0, 1);
            break;
        case '1Y':
            startDate = new Date();
            startDate.setFullYear(now.getFullYear() - 1);
            break;
        case '5Y':
            startDate = new Date();
            startDate.setFullYear(now.getFullYear() - 5);
            break;
        case 'MAX':
        default:
            startDate = null; // No filter for MAX
            break;
    }

    if (startDate) {
        return data.filter(entry => new Date(entry.date) >= startDate);
    }

    return data;
};

export const fetchCustomStockData2 = async (symbol, timeframe = '1M') => {
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const filteredData = filterDataByTimeframe(data.historical, timeframe);
        return filteredData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchCustomStockData2;


export const fetchCustomStockData3 = async (symbol, timeframe = '1M') => {
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const filteredData = filterDataByTimeframe(data.historical, timeframe);
        return filteredData;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};




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


export const fetchDescription = async (symbol) => {
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
            const { image, companyName, description, exchange, sector } = data[0];
            return { image, companyName, description, exchange, sector };
        }
        return null;
    } catch (error) {
        console.error('Error fetching company description:', error);
        throw error;
    }
};



