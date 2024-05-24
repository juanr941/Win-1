const API_KEY = process.env.REACT_APP_API_KEY;
console.log("API_KEY:", API_KEY);

const fetchCustomStockData2 =(symbol) =>{

    const url =`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=${API_KEY}`

    return fetch (url)
    .then(response=>response.json())
    .then(data =>{
        return data.historical;
    })
    .catch (error =>{
        console.error ('Error fetching data :',error);
    });
};

export default fetchCustomStockData2;



//api call to get the data
// export const fetchStockData = (symbol) => {
//     return fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`)
//         .then(response => response.json())
//         .then(data => {
//             // Handle the data or return it as needed
//             return data;
//         })
//         .catch(error => {
//             // Handle errors
//             console.error('Error fetching stock data:', error);
//         });
// };

// export default fetchStockData;


// time series weekly adjusted
// const fetchCustomStockData = () => {
//     // Replace the URL with the actual endpoint of your API
//     return fetch(`https://financialmodelingprep.com/api/v3/historical-chart/4hour/AAPL?from=2023-08-10&to=2023-09-10&apikey=${API_KEY}`)
//         .then(response => response.json())
//         .then(data => {
//             // Handle the data or return it as needed
//             return data;
//         })
//         .catch(error => {
//             // Handle errors
//             console.error('Error fetching custom stock data:', error);
//         });
// };

// export default fetchCustomStockData;

// if its longer time ussage how will it work?