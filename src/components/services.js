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
        console.log("API Response:", data); // Log the API response

        // Ensure the symbol passed to the function is logged
        console.log("Symbol passed to fetchCompanyOutlook:", symbol);

        // Find the specific company information from the array
        const companyInfo = data.find(company => company.symbol.toUpperCase() === symbol.toUpperCase());
        console.log("Company Info:", companyInfo); // Log the specific company info
        return companyInfo || null;


    } catch (error) {
        console.error('Error fetching company outlook data:', error);
        throw error;
    }
};

