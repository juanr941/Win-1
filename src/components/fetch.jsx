
import fetchCustomStockData2 from './services'; 
import formatCustomStockData2, { fetchDescription } from'./Utils.js'
import fetchCompanyOutlook from './services';  



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

    const fetchCompanyOutlook = ({symbol})=> {
        useEffect (()=> {
            fetchDescription (symbol)
            .then(data => {
                const formattedDescription = fetchDescription(data);
                console.log(formattedDescription); // Check the formatted data
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [symbol]);
};



    
    export default {FetchDataComponent , fetchCompanyOutlook};