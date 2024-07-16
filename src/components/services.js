const API_KEY = process.env.REACT_APP_API_KEY;

const getDateString = (date) => date.toISOString().split('T')[0];

const getStartDate = (timeframe) => {
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
      startDate = new Date(0); // Default to Unix epoch start for 'MAX'
      break;
  }

  return startDate;
};

export const fetchCustomStockData2 = async (symbol, timeframe = '5D') => {
    const startDate = getStartDate(timeframe);
    const endDate = new Date();
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${getDateString(startDate)}&to=${getDateString(endDate)}&apikey=${API_KEY}`;
  
    console.log(`Fetching data for ${symbol} from ${getDateString(startDate)} to ${getDateString(endDate)} with URL: ${url}`);
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('API Response:', data);
      return data.historical || [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

export const fetchCustomStockData3 = async (symbol, timeframe = '5D') => {
  const startDate = getStartDate(timeframe);
  const endDate = new Date();
  const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${getDateString(startDate)}&to=${getDateString(endDate)}&apikey=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.historical || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
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



