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

export const formatNumber = (num) => {
    if (num >= 1e12) {
        return (num / 1e12).toFixed(2) + 'T';
    } else if (num >= 1e9) {
        return (num / 1e9).toFixed(2) + 'B';
    } else if (num >= 1e6) {
        return (num / 1e6).toFixed(2) + 'M';
    } else if (num >= 1e3) {
        return (num / 1e3).toFixed(2) + 'K';
    }
    return num.toString();
};

