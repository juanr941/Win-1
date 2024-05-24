export const convertDatetoUnixTimestamp =(date) =>{

    // This gives me timestamp in miliseconds, i want it in seconds as finhub, what about other api?

    return Math.floor (date.getTime()/1000);

};

export const convertUnixTimestampToDate =(unixTimestamp) => {
    const miliseconds = unixTimestamp*1000;
    return new Date(milliseconds) . toLocaleDateString();

};

//depending if we pass one or two days it will add this to the date, so that we can check for making the candlechart
export const createDate =(date,days,weeks,months,years)=>{
    let newDate = new Date(date);
    newDate.setDate (newDate.getDate()+days+7*weeks)
    newDate.setDate (newDate.getDate()+months)
    newDate.setFullYear(newDate.getFullYear()+years);
};