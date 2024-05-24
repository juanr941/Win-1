export const formatCustomStockData = (stockData) => {
    const formattedData = [];

    stockData.forEach((dataPoint) => {
        const date = new Date(dataPoint.date);
        if (date >= new Date('2020-09-08') && date <= new Date('2024-05-16')) {
            formattedData.push({
                x: date.toISOString(), // Ensure the date is in ISO format
                y: [
                    dataPoint.open,
                    dataPoint.high,
                    dataPoint.low,
                    dataPoint.close,
                ]
            });
        }
    });

    formattedData.sort((a, b) => new Date(a.x) - new Date(b.x));

    return formattedData;
};

export default formatCustomStockData;


// export const formatCustomStockData2 = (stockData) => {
//     const formattedData = [];

//     // Iterate over each data point
//     stockData.forEach((dataPoint, index) => { // Add 'index' parameter here
//         // Date from the dataPoint
//         const date = new Date(dataPoint.date);
//         // Checking if the date falls within the specified range
//         if (date >= new Date('2020-09-08') && date <= new Date('2024-05-16')) {
//             formattedData.push({
//                 x: date.toISOString, // Use the parsed date 
//                 y: [
//                     dataPoint.open,
//                     dataPoint.high,
//                     dataPoint.low,
//                     dataPoint.close,
//                 ]
//             });
//         }
//         // Use 'index' here
//     });

//     return formattedData;
// }; 

// export default formatCustomStockData2;


// export const formatStockdata2 = (stockData2) => {
//     const formattedData2 = [];

//        {
//         Object.entries(stockData2['Weekly Adjusted Time Series']).map(
//             ([key, value]) => {
//                 return formattedData2.push({
//                     x: key,
//                     y: [
//                         value['1. open'],
//                         value['2. high'], 
//                         value['3. low'],
//                         value['4. close'],
//                     ]
//                 });
//             }
//         );
//     }

//     return formattedData2;
// };

//when the data is nested using the historical key 


