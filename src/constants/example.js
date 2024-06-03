import dayjs from "dayjs"

export const exampleSearchResults ={
  
        count: 4,
        result: [
          {
            description: "APPLE INC",
            displaySymbol: "AAPL",
            symbol: "AAPL",
            type: "Common Stock"
          },
          {
            description: "APPLE INC",
            displaySymbol: "AAPL.SW",
            symbol: "AAPL.SW",
            type: "Common Stock"
          },
          {
            description: "APPLE INC",
            displaySymbol: "APC.BE",
            symbol: "APC.BE",
            type: "Common Stock"
          },
          {
            description: "APPLE INC",
            displaySymbol: "APC.DE",
            symbol: "APC.DE",
            type: "Common Stock"
            
          },
          {
            description: "NGM",
            displaySymbol: "NGM",
            symbol: "NGM",
            type: "Ricpraw stock"
            
          }
        ]
      }


      // Here i pass the options but I delete the options part itself
export const candleStickChart = 
{

  xaxis: {
    type: 'category',
    labels: {
      formatter: function(val, timestamp, opts) {
        const { data } = opts;

        // Sort the data in ascending order based on the label values
        const sortedData = data.slice().sort((a, b) => {
          const aDate = new Date(a);
          const bDate = new Date(b);
          return aDate - bDate;
        });

        // Find the index of the current label in the sorted data
        const sortedIndex = sortedData.indexOf(val);

        // Format the label with the sorted timestamp
        const sortedTimestamp = data.indexOf(sortedData[sortedIndex]);
        return dayjs(sortedTimestamp).format('YYYY MMM DD');
      }
    }
  },

  // deleted the minutes: YYYY MMM DD HH:mm
    chart: {
      height: '30%',
      type: 'candlestick',
    },
    title: {
      text: 'CandleStick Chart - Category X-axis',
      align: 'left'
    },
    annotations: {
      xaxis: [
        {
          x: 'Oct 06 14:00',
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              fontSize: '12px',
              color: '#fff',
              background: '#00E396'
            },
            orientation: 'horizontal',
            offsetY: 5,
            text: 'Annotation Test'
          }
        }
      ]
    },
    tooltip: {
      enabled: true,
      formatter: function(val) {
        return Math.round(val).toString();

    }
      
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function(val) {
          return dayjs (val).format (' YYYY MMM DD');
        }
      },
       

    },
    yaxis: {
      tooltip: {
          enabled: true,
          formatter: function(val) {
            return Math.round(val).toString();

          }
      }
  }
  
  


  }



      export const exampleCompanyDetails =
    {
        country: "US",
        currency: "USD",
        exchange: "NASDAQ/NMS (GLOBAL MARKET)",
        ipo: "1980-12-12",
        marketCapitalization :1415993,
        Name: {},
        phone: "14089961010",
        shareOutstanding: 4375.47998046875,
        ticker: "AAPL",
        weburl: "https://www.apple.com/",
        logo: "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
        finnhubIndustry:"Technology",
        operatingIncome: " 2T",
        totalRevenue: "3T",
        netIncome:"5T",
        profitMargin:"30%",
        totalAssets:"2T",
        earningsPerShare:'60'

      }

      export const exampleGetStatistics =
        {
          "quoteType": {
            "exchange": "NGM",
            "shortName": "Amarin Corporation plc",
            "longName": "Amarin Corporation plc",
            "exchangeTimezoneName": "America/New_York",
            "exchangeTimezoneShortName": "EDT",
            "isEsgPopulated": false,
            "gmtOffSetMilliseconds": "-14400000",
            "underlyingSymbol": null,
            "quoteType": "EQUITY",
            "symbol": "AMRN",
            "underlyingExchangeSymbol": null,
            "headSymbol": null,
            "messageBoardId": "finmb_407863",
            "uuid": "c9af6797-92a0-34d5-9138-8aac9b223625",
            "market": "us_market"
          },
          "symbol": "AMRN",
          "price": {
            "quoteSourceName": "Delayed Quote",
            "regularMarketOpen": {
              "raw": 22.32,
              "fmt": "22.32"
            },
            "averageDailyVolume3Month": {
              "raw": 6081826,
              "fmt": "6.08M",
              "longFmt": "6,081,826"
            },
            "exchange": "NGM",
            "regularMarketTime": 1562173201,
            "volume24Hr": {},
            "regularMarketDayHigh": {
              "raw": 23.7898,
              "fmt": "23.79"
            },
            "shortName": "Amarin Corporation plc",
            "averageDailyVolume10Day": {
              "raw": 11567225,
              "fmt": "11.57M",
              "longFmt": "11,567,225"
            },
            "longName": "Amarin Corporation plc",
            "regularMarketChange": {
              "raw": 0.48999977,
              "fmt": "0.49"
            },
            "currencySymbol": "$",
            "regularMarketPreviousClose": {
              "raw": 22.37,
              "fmt": "22.37"
            },
            "postMarketTime": 1562187199,
            "preMarketPrice": {},
            "exchangeDataDelayedBy": 0,
            "postMarketChange": {
              "raw": 0,
              "fmt": "0.00"
            },
            "postMarketPrice": {
              "raw": 22.86,
              "fmt": "22.86"
            },
            "exchangeName": "NasdaqGM",
            "preMarketChange": {},
            "circulatingSupply": {},
            "regularMarketDayLow": {
              "raw": 22.1301,
              "fmt": "22.13"
            },
            "priceHint": {
              "raw": 2,
              "fmt": "2",
              "longFmt": "2"
            },
            "currency": "USD",
            "regularMarketPrice": {
              "raw": 22.86,
              "fmt": "22.86"
            },
            "regularMarketVolume": {
              "raw": 24204545,
              "fmt": "24.20M",
              "longFmt": "24,204,545.00"
            },
            "lastMarket": null,
            "regularMarketSource": "FREE_REALTIME",
            "openInterest": {},
            "marketState": "CLOSED",
            "underlyingSymbol": null,
            "marketCap": {
              "raw": 8789281792,
              "fmt": "8.79B",
              "longFmt": "8,789,281,792.00"
            },
            "quoteType": "EQUITY",
            "volumeAllCurrencies": {},
            "postMarketSource": "DELAYED",
            "strikePrice": {},
            "symbol": "AMRN",
            "postMarketChangePercent": {
              "raw": 0,
              "fmt": "0.00%"
            },
            "preMarketSource": "FREE_REALTIME",
            "maxAge": 1,
            "fromCurrency": null,
            "regularMarketChangePercent": {
              "raw": 0.021904325,
              "fmt": "2.19%"
            }
          },
          "summaryDetail": {
            "previousClose": {
              "raw": 22.37,
              "fmt": "22.37"
            },
            "regularMarketOpen": {
              "raw": 22.32,
              "fmt": "22.32"
            },
            "twoHundredDayAverage": {
              "raw": 17.943796,
              "fmt": "17.94"
            },
            "trailingAnnualDividendYield": {},
            "payoutRatio": {
              "raw": 0,
              "fmt": "0.00%"
            },
            "volume24Hr": {},
            "regularMarketDayHigh": {
              "raw": 23.7898,
              "fmt": "23.79"
            },
            "navPrice": {},
            "averageDailyVolume10Day": {
              "raw": 11567225,
              "fmt": "11.57M",
              "longFmt": "11,567,225"
            },
            "totalAssets": {},
            "regularMarketPreviousClose": {
              "raw": 22.37,
              "fmt": "22.37"
            },
            "fiftyDayAverage": {
              "raw": 18.387142,
              "fmt": "18.39"
            },
            "trailingAnnualDividendRate": {},
            "open": {
              "raw": 22.32,
              "fmt": "22.32"
            },
            "averageVolume10days": {
              "raw": 11567225,
              "fmt": "11.57M",
              "longFmt": "11,567,225"
            },
            "expireDate": {},
            "yield": {},
            "algorithm": null,
            "dividendRate": {},
            "exDividendDate": {},
            "beta": {
              "raw": 0.609387,
              "fmt": "0.61"
            },
            "circulatingSupply": {},
            "startDate": {},
            "regularMarketDayLow": {
              "raw": 22.1301,
              "fmt": "22.13"
            },
            "priceHint": {
              "raw": 2,
              "fmt": "2",
              "longFmt": "2"
            },
            "currency": "USD",
            "regularMarketVolume": {
              "raw": 24204545,
              "fmt": "24.2M",
              "longFmt": "24,204,545"
            },
            "lastMarket": null,
            "maxSupply": {},
            "openInterest": {},
            "marketCap": {
              "raw": 8789281792,
              "fmt": "8.79B",
              "longFmt": "8,789,281,792"
            },
            "volumeAllCurrencies": {},
            "strikePrice": {},
            "averageVolume": {
              "raw": 6081826,
              "fmt": "6.08M",
              "longFmt": "6,081,826"
            },
            "priceToSalesTrailing12Months": {
              "raw": 33.991493,
              "fmt": "33.99"
            },
            "dayLow": {
              "raw": 22.1301,
              "fmt": "22.13"
            },
            "ask": {
              "raw": 22.82,
              "fmt": "22.82"
            },
            "ytdReturn": {},
            "askSize": {
              "raw": 1000,
              "fmt": "1k",
              "longFmt": "1,000"
            },
            "volume": {
              "raw": 24204545,
              "fmt": "24.2M",
              "longFmt": "24,204,545"
            },
            "fiftyTwoWeekHigh": {
              "raw": 23.79,
              "fmt": "23.79"
            },
            "forwardPE": {
              "raw": 81.64286,
              "fmt": "81.64"
            },
            "maxAge": 1,
            "fromCurrency": null,
            "fiveYearAvgDividendYield": {},
            "fiftyTwoWeekLow": {
              "raw": 2.35,
              "fmt": "2.35"
            },
            "bid": {
              "raw": 22.81,
              "fmt": "22.81"
            },
            "tradeable": true,
            "dividendYield": {},
            "bidSize": {
              "raw": 800,
              "fmt": "800",
              "longFmt": "800"
            },
            "dayHigh": {
              "raw": 23.7898,
              "fmt": "23.79"
            }
          },
          "pageViews": {
            "shortTermTrend": "DOWN",
            "midTermTrend": "UP",
            "longTermTrend": "UP",
            "maxAge": 1
          },
          "defaultKeyStatistics": {
            "annualHoldingsTurnover": {},
            "enterpriseToRevenue": {
              "raw": 28.199,
              "fmt": "28.20"
            },
            "beta3Year": {},
            "profitMargins": {
              "raw": -0.45164,
              "fmt": "-45.16%"
            },
            "enterpriseToEbitda": {
              "raw": -67.266,
              "fmt": "-67.27"
            },
            "52WeekChange": {
              "raw": 6.6348124,
              "fmt": "663.48%"
            },
            "morningStarRiskRating": {},
            "forwardEps": {
              "raw": 0.28,
              "fmt": "0.28"
            },
            "revenueQuarterlyGrowth": {},
            "sharesOutstanding": {
              "raw": 330687008,
              "fmt": "330.69M",
              "longFmt": "330,687,008"
            },
            "fundInceptionDate": {},
            "annualReportExpenseRatio": {},
            "totalAssets": {},
            "bookValue": {
              "raw": 0.36,
              "fmt": "0.36"
            },
            "sharesShort": {
              "raw": 25242508,
              "fmt": "25.24M",
              "longFmt": "25,242,508"
            },
            "sharesPercentSharesOut": {
              "raw": 0.0763,
              "fmt": "7.63%"
            },
            "fundFamily": null,
            "lastFiscalYearEnd": {
              "raw": 1546214400,
              "fmt": "2018-12-31"
            },
            "heldPercentInstitutions": {
              "raw": 0.48367,
              "fmt": "48.37%"
            },
            "netIncomeToCommon": {
              "raw": -116781000,
              "fmt": "-116.78M",
              "longFmt": "-116,781,000"
            },
            "trailingEps": {
              "raw": -0.379,
              "fmt": "-0.38"
            },
            "lastDividendValue": {},
            "SandP52WeekChange": {
              "raw": 0.08638418,
              "fmt": "8.64%"
            },
            "priceToBook": {
              "raw": 63.5,
              "fmt": "63.50"
            },
            "heldPercentInsiders": {
              "raw": 0.00821,
              "fmt": "0.82%"
            },
            "nextFiscalYearEnd": {
              "raw": 1609372800,
              "fmt": "2020-12-31"
            },
            "yield": {},
            "mostRecentQuarter": {
              "raw": 1553990400,
              "fmt": "2019-03-31"
            },
            "shortRatio": {
              "raw": 4.77,
              "fmt": "4.77"
            },
            "sharesShortPreviousMonthDate": {
              "raw": 1557878400,
              "fmt": "2019-05-15"
            },
            "floatShares": {
              "raw": 282240973,
              "fmt": "282.24M",
              "longFmt": "282,240,973"
            },
            "beta": {
              "raw": 0.609387,
              "fmt": "0.61"
            },
            "enterpriseValue": {
              "raw": 7291542016,
              "fmt": "7.29B",
              "longFmt": "7,291,542,016"
            },
            "priceHint": {
              "raw": 2,
              "fmt": "2",
              "longFmt": "2"
            },
            "threeYearAverageReturn": {},
            "lastSplitDate": {
              "raw": 1200614400,
              "fmt": "2008-01-18"
            },
            "lastSplitFactor": "10/1",
            "legalType": null,
            "morningStarOverallRating": {},
            "earningsQuarterlyGrowth": {},
            "priceToSalesTrailing12Months": {},
            "dateShortInterest": {
              "raw": 1560470400,
              "fmt": "2019-06-14"
            },
            "pegRatio": {
              "raw": -5.47,
              "fmt": "-5.47"
            },
            "ytdReturn": {},
            "forwardPE": {
              "raw": 81.64286,
              "fmt": "81.64"
            },
            "maxAge": 1,
            "lastCapGain": {},
            "shortPercentOfFloat": {},
            "sharesShortPriorMonth": {
              "raw": 25577533,
              "fmt": "25.58M",
              "longFmt": "25,577,533"
            },
            "category": null,
            "fiveYearAverageReturn": {}
          },
          "financialData": {
            "ebitdaMargins": {
              "raw": -0.41922,
              "fmt": "-41.92%"
            },
            "profitMargins": {
              "raw": -0.45164,
              "fmt": "-45.16%"
            },
            "grossMargins": {
              "raw": 0.76395,
              "fmt": "76.39%"
            },
            "operatingCashflow": {
              "raw": -122987000,
              "fmt": "-122.99M",
              "longFmt": "-122,987,000"
            },
            "revenueGrowth": {
              "raw": 0.668,
              "fmt": "66.80%"
            },
            "operatingMargins": {
              "raw": -0.42179,
              "fmt": "-42.18%"
            },
            "ebitda": {
              "raw": -108398000,
              "fmt": "-108.4M",
              "longFmt": "-108,398,000"
            },
            "targetLowPrice": {
              "raw": 23,
              "fmt": "23.00"
            },
            "recommendationKey": "strong_buy",
            "grossProfits": {
              "raw": 174671000,
              "fmt": "174.67M",
              "longFmt": "174,671,000"
            },
            "freeCashflow": {
              "raw": -87424248,
              "fmt": "-87.42M",
              "longFmt": "-87,424,248"
            },
            "targetMedianPrice": {
              "raw": 30.5,
              "fmt": "30.50"
            },
            "currentPrice": {
              "raw": 22.86,
              "fmt": "22.86"
            },
            "earningsGrowth": {},
            "currentRatio": {
              "raw": 2.196,
              "fmt": "2.20"
            },
            "returnOnAssets": {
              "raw": -0.23187,
              "fmt": "-23.19%"
            },
            "numberOfAnalystOpinions": {
              "raw": 6,
              "fmt": "6",
              "longFmt": "6"
            },
            "targetMeanPrice": {
              "raw": 32.83,
              "fmt": "32.83"
            },
            "debtToEquity": {
              "raw": 59.148,
              "fmt": "59.15"
            },
            "returnOnEquity": {
              "raw": -1.88032,
              "fmt": "-188.03%"
            },
            "targetHighPrice": {
              "raw": 51,
              "fmt": "51.00"
            },
            "totalCash": {
              "raw": 211088992,
              "fmt": "211.09M",
              "longFmt": "211,088,992"
            },
            "totalDebt": {
              "raw": 83323000,
              "fmt": "83.32M",
              "longFmt": "83,323,000"
            },
            "totalRevenue": {
              "raw": 258572992,
              "fmt": "258.57M",
              "longFmt": "258,572,992"
            },
            "totalCashPerShare": {
              "raw": 0.638,
              "fmt": "0.64"
            },
            "financialCurrency": "USD",
            "maxAge": 86400,
            "revenuePerShare": {
              "raw": 0.839,
              "fmt": "0.84"
            },
            "quickRatio": {
              "raw": 1.796,
              "fmt": "1.80"
            },
            "recommendationMean": {
              "raw": 1.5,
              "fmt": "1.50"
            }
          },
          "calendarEvents": {
            "maxAge": 1,
            "earnings": {
              "earningsDate": [
                {
                  "raw": 1493769600,
                  "fmt": "2017-05-03"
                },
                {
                  "raw": 1494201600,
                  "fmt": "2017-05-08"
                }
              ],
              "earningsAverage": {
                "raw": -0.03,
                "fmt": "-0.03"
              },
              "earningsLow": {
                "raw": -0.05,
                "fmt": "-0.05"
              },
              "earningsHigh": {
                "raw": -0.01,
                "fmt": "-0.01"
              },
              "revenueAverage": {
                "raw": 96740000,
                "fmt": "96.74M",
                "longFmt": "96,740,000"
              },
              "revenueLow": {
                "raw": 91000000,
                "fmt": "91M",
                "longFmt": "91,000,000"
              },
              "revenueHigh": {
                "raw": 100220000,
                "fmt": "100.22M",
                "longFmt": "100,220,000"
              }
            },
            "exDividendDate": {},
            "dividendDate": {}
          },
          "quoteData": {
            "AMRN": {
              "sourceInterval": 15,
              "regularMarketOpen": {
                "raw": 22.32,
                "fmt": "22.32"
              },
              "exchange": "NGM",
              "regularMarketTime": {
                "raw": 1562173201,
                "fmt": "1:00PM EDT"
              },
              "fiftyTwoWeekRange": {
                "raw": "2.35 - 23.79",
                "fmt": "2.35 - 23.79"
              },
              "sharesOutstanding": {
                "raw": 330687008,
                "fmt": "330.687M",
                "longFmt": "330,687,008"
              },
              "regularMarketDayHigh": {
                "raw": 23.7898,
                "fmt": "23.79"
              },
              "shortName": "Amarin Corporation plc",
              "longName": "Amarin Corporation plc",
              "exchangeTimezoneName": "America/New_York",
              "regularMarketChange": {
                "raw": 0.48999977,
                "fmt": "0.49"
              },
              "regularMarketPreviousClose": {
                "raw": 22.37,
                "fmt": "22.37"
              },
              "fiftyTwoWeekHighChange": {
                "raw": -0.9300003,
                "fmt": "-0.93"
              },
              "exchangeTimezoneShortName": "EDT",
              "fiftyTwoWeekLowChange": {
                "raw": 20.51,
                "fmt": "20.51"
              },
              "exchangeDataDelayedBy": 0,
              "regularMarketDayLow": {
                "raw": 22.1301,
                "fmt": "22.13"
              },
              "priceHint": 2,
              "currency": "USD",
              "regularMarketPrice": {
                "raw": 22.86,
                "fmt": "22.86"
              },
              "regularMarketVolume": {
                "raw": 24204545,
                "fmt": "24.205M",
                "longFmt": "24,204,545"
              },
              "isLoading": false,
              "triggerable": true,
              "gmtOffSetMilliseconds": -14400000,
              "region": "US",
              "marketState": "CLOSED",
              "marketCap": {
                "raw": 8789281792,
                "fmt": "8.789B",
                "longFmt": "8,789,281,792"
              },
              "quoteType": "EQUITY",
              "invalid": false,
              "symbol": "AMRN",
              "language": "en-US",
              "fiftyTwoWeekLowChangePercent": {
                "raw": 8.72766,
                "fmt": "872.77%"
              },
              "regularMarketDayRange": {
                "raw": "22.1301 - 23.7898",
                "fmt": "22.13 - 23.79"
              },
              "messageBoardId": "finmb_407863",
              "fiftyTwoWeekHigh": {
                "raw": 23.79,
                "fmt": "23.79"
              },
              "fiftyTwoWeekHighChangePercent": {
                "raw": -0.039092068,
                "fmt": "-3.91%"
              },
              "uuid": "c9af6797-92a0-34d5-9138-8aac9b223625",
              "market": "us_market",
              "fiftyTwoWeekLow": {
                "raw": 2.35,
                "fmt": "2.35"
              },
              "regularMarketChangePercent": {
                "raw": 2.1904325,
                "fmt": "2.19%"
              },
              "fullExchangeName": "NasdaqGM",
              "tradeable": true
            }
          },
          "mktmData": {}
        }


export const exampleStockQuote =

{
  "c": 261.74,
  "h": 263.31,
  "l": 260.68,
  "o": 261.07,
  "pc": 259.45,
  "t": 1582641000 
}

export const exampleHistoricalData = 

{
  "c": [
    217.68,
    221.03,
    219.89
  ],
  "h": [
    222.49,
    221.5,
    220.94
  ],
  "l": [
    217.19,
    217.1402,
    218.83
  ],
  "o": [
    221.03,
    218.55,
    220
  ],
  "s": "ok",
  "t": [
    1569297600,
    1569384000,
    1569470400
  ],
  "v": [
    33463820,
    24018876,
    20730608
  ]
}

