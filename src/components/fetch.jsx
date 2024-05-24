// import fetchCustomStockData from './services'; 
import fetchCustomStockData2 from './services'; 
// import formatCustomStockData from'./Utils.js'
import formatCustomStockData2 from'./Utils.js'

// fetchCustomStockData()
//     .then(data => {
       
//         const formattedData = formatCustomStockData(data);
//         console.log(formattedData);
//     })
//     .catch(error => {
//         // Handle errors
//         console.error('Error:', error);
//     });

    /////////

    const FetchDataComponent = ({ symbol }) => {
        useEffect(() => {
            fetchCustomStockData2(symbol)
                .then(data => {
                    const formattedData = formatCustomStockData2(data);
                    console.log(formattedData); // Check the formatted data
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }, [symbol]);
    };
    
    export default FetchDataComponent;