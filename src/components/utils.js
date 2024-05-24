// import fetchStockData from "./services"
// how this is adjusted to the api reply first is the key which is the date and then the value. 
export const formatStockdata = (stockData) => {
    const formattedData = [];

    if (stockData['Weekly Adjusted Time Series']) {
        // Reverse the entries array to iterate from oldest to newest
        Object.entries(stockData['Weekly Adjusted Time Series']).reverse().map(
            ([key, value]) => {
                // Parsing the date from the key
                const date = new Date(key);
                // Checking if the date falls within the specified range
                if (date >= new Date('2023-10-23') && date <= new Date('2024-05-16')) {
                    return formattedData.push({
                        x: key,
                        y: [
                            value['1. open'],
                            value['2. high'], 
                            value['3. low'],
                            value['4. close'],
                        ]
                    });
                }
                return null;
            }
        );
    }
    return formattedData;
};



//check here the canddlestick charts and how the data is added. key is the date, value is the $$
// value['3. low'], 
// value['2. high'] 
