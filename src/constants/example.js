import dayjs from "dayjs"

export const exampleSearchResults ={
  
        count: 4,
        result: [
          {
            description: "NGM",
            displaySymbol: "NGM",
            symbol: "NGM",
            type: "Ricpraw stock"
            
          }
        ]
      }

      export const candleStickChart = {
        chart: {
          height: '30%',
          type: 'candlestick',
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
                  background: '#00E396',
                },
                orientation: 'horizontal',
                offsetY: 1,
                text: 'Annotation Test',
              },
            },
          ],
        },
        tooltip: {
          enabled: true,
          formatter: function(val) {
            return Math.round(val).toString();
          },
        },
        xaxis: {
          type: 'datetime',
          labels: {
            formatter: function(val) {
              return dayjs(val).format('YYYY MMM DD');
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
            formatter: function(val) {
              return Math.round(val).toString();
            },
          },
        },
      };
      
      export const normalChart = {
        chart: {
          height: '30%',
          type: 'line',
        },
        xaxis: {
          type: 'datetime',
          labels: {
            formatter: function(val) {
              return dayjs(val).format('YYYY MMM DD');
            },
          },
        },
        yaxis: {
          tooltip: {
            enabled: true,
          },
        },
        tooltip: {
          x: {
            format: 'dd MMM yyyy',
          },
        },
        markers: {
          size: 0,
          style: 'hollow',
        },
      };
      


      export const exampleCompanyDetails =
    {
        country: "US",
        

      }

      export const exampleGetStatistics =
        {
          "quoteType": {
            "exchange": "NGM",
            
          },
          
        }

