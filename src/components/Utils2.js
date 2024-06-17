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

export const formatCompanyOutlook = (data) => {
    if (!data) return null;

    const { industry, exchange } = data;
    return { industry, exchange };
};
