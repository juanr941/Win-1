from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
import warnings
import pandas as pd
import numpy as np

warnings.filterwarnings('ignore', category=FutureWarning)

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()



# You should restrict the origins to those you want to allow in production
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003, localhost:3004"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)



class BuffettAnalysis:
    def __init__(self, ticker, api_key):
        self.ticker = ticker
        self.api_key = api_key

    def get_jsonparsed_data(self, url):
        response = requests.get(url)
        return response.json()

    def get_financials(self):
        url = f"https://financialmodelingprep.com/api/v3/income-statement/{self.ticker}?apikey={self.api_key}"
        return self.get_jsonparsed_data(url)

    def get_operating_margin(self):
        financials = self.get_financials()
        operating_income = financials[0]["operatingIncome"]
        revenue = financials[0]["revenue"]
        return (operating_income / revenue) * 100

    def calculate_profit_margin(self):
        financials = self.get_financials()
        net_income = financials[0]["netIncome"]
        total_revenue = financials[0]["revenue"]
        return (net_income / total_revenue) * 100

    def get_balance_sheet(self):
        url = f"https://financialmodelingprep.com/api/v3/balance-sheet-statement/{self.ticker}?apikey={self.api_key}"
        return self.get_jsonparsed_data(url)

    def ratio_liab_assets(self):
        balance_sheet = self.get_balance_sheet()
        total_liabilities = balance_sheet[0]["totalLiabilities"]
        total_assets = balance_sheet[0]["totalAssets"]
        return total_liabilities / total_assets

    def eps_growth_rate(self):
        url = f"https://financialmodelingprep.com/api/v3/historical/earning_calendar/{self.ticker}?apikey={self.api_key}"
        eps_data = self.get_jsonparsed_data(url)
        if len(eps_data) >= 2:
            latest_eps = eps_data[0]["eps"]
            previous_eps = eps_data[1]["eps"]
            return ((latest_eps - previous_eps) / previous_eps) * 100 if previous_eps != 0 else 0
        return 0

    def eps_quarters(self):
        url = f"https://financialmodelingprep.com/api/v3/income-statement/{self.ticker}?limit=4&apikey={self.api_key}"
        financials = self.get_jsonparsed_data(url)
        return tuple(quarter["eps"] for quarter in financials)

    def eps_years(self):
        url = f"https://financialmodelingprep.com/api/v3/income-statement/{self.ticker}?limit=6&apikey={self.api_key}"
        financials = self.get_jsonparsed_data(url)
        return [(statement["date"][:4], statement["eps"]) for statement in financials]

    def roe(self):
        url = f"https://financialmodelingprep.com/api/v3/ratios/{self.ticker}?apikey={self.api_key}"
        ratios = self.get_jsonparsed_data(url)
        return ratios[0]["returnOnEquity"]

    def evaluate_conditions(self):
        conditions_met = 0
        total_conditions = 9

        if self.get_operating_margin() > 15:
            conditions_met += 1
        if self.calculate_profit_margin() > 20:
            conditions_met += 1
        if self.ratio_liab_assets() < 0.5:
            conditions_met += 1
        if self.eps_growth_rate() > 15:
            conditions_met += 1
        eps_quarters = self.eps_quarters()
        conditions_met += sum(1 for eps in eps_quarters if eps > 0)
        if self.roe() > 12:
            conditions_met += 1

        eps_years_data = self.eps_years()
        total_conditions += len(eps_years_data)
        conditions_met += sum(1 for _, eps in eps_years_data if eps > 0)

        return conditions_met, total_conditions

class WilliamONeilAnalysisFMP:
    def __init__(self, ticker, api_key):
        self.ticker = ticker
        self.api_key = api_key
        self.base_url = "https://financialmodelingprep.com/api/v3"

    def get_jsonparsed_data(self, url):
        response = requests.get(url)
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception("API request failed with status code: {}".format(response.status_code))

    def fetch_quote(self):
        url = f"{self.base_url}/quote/{self.ticker}?apikey={self.api_key}"
        quote_data = self.get_jsonparsed_data(url)[0]
        return quote_data

    def fetch_ratios_ttm(self):
        url = f"{self.base_url}/ratios-ttm/{self.ticker}?apikey={self.api_key}"
        ratios_ttm_data = self.get_jsonparsed_data(url)[0]
        return ratios_ttm_data

    def fetch_company_rating(self):
        url = f"{self.base_url}/rating/{self.ticker}?apikey={self.api_key}"
        company_rating_data = self.get_jsonparsed_data(url)[0]
        return company_rating_data

    def evaluate_conditions(self):
        quote_data = self.fetch_quote()
        ratios_ttm_data = self.fetch_ratios_ttm()
        company_rating_data = self.fetch_company_rating()
        conditions_met = 0
        total_conditions = 5

        # Current Price
        if quote_data.get('price', 0) >= 20:
            conditions_met += 1

        # Return on Equity
        if ratios_ttm_data.get('returnOnEquityTTM', 0) >= 0.17:  # Converted to decimal for consistency
            conditions_met += 1

        # Price % Change vs 52 Week High
        price_change = ((quote_data['price'] - quote_data['yearHigh']) / quote_data['yearHigh']) * 100
        if price_change >= -15:
            conditions_met += 1

        # Earnings Strength (EPS Rating)
        if company_rating_data.get('ratingDetailsPEScore', 0) >= 80:
            conditions_met += 1

        return conditions_met, total_conditions

class BenjaminGrahamAnalysis:
    def __init__(self, ticker, api_key):
        self.ticker = ticker
        self.api_key = api_key

    def get_jsonparsed_data(self, url):
        response = requests.get(url)
        return response.json()

    def get_financials(self):
        url = f"https://financialmodelingprep.com/api/v3/income-statement/{self.ticker}?apikey={self.api_key}"
        return self.get_jsonparsed_data(url)

    def calculate_eps(self, year_offset=0):
        url = f"https://financialmodelingprep.com/api/v3/income-statement/{self.ticker}?limit={year_offset+1}&apikey={self.api_key}"
        financials = self.get_jsonparsed_data(url)
        if len(financials) > year_offset:
            return financials[year_offset]["eps"]
        else:
            return 0

    def calculate_trailing_eps(self, quarters=4):
        url = f"https://financialmodelingprep.com/api/v3/income-statement/{self.ticker}?limit={quarters}&apikey={self.api_key}"
        financials = self.get_jsonparsed_data(url)
        trailing_eps = [quarter["eps"] for quarter in financials]
        return trailing_eps

    def get_balance_sheet(self):
        url = f"https://financialmodelingprep.com/api/v3/balance-sheet-statement/{self.ticker}?apikey={self.api_key}"
        return self.get_jsonparsed_data(url)

    def ratio_liab_assets(self):
        balance_sheet = self.get_balance_sheet()
        total_liabilities = balance_sheet[0]["totalLiabilities"]
        total_assets = balance_sheet[0]["totalAssets"]
        return total_liabilities / total_assets if total_assets != 0 else 0

    def current_ratio(self):
        balance_sheet = self.get_balance_sheet()
        current_assets = balance_sheet[0]["totalCurrentAssets"]
        current_liabilities = balance_sheet[0]["totalCurrentLiabilities"]
        return current_assets / current_liabilities if current_liabilities != 0 else 0

    def dividend_yield(self):
        url = f"https://financialmodelingprep.com/api/v3/key-metrics/{self.ticker}?apikey={self.api_key}"
        key_metrics = self.get_jsonparsed_data(url)
        return key_metrics[0]["dividendYield"]

    def lt_debt_to_wc_ratio(self):
        url_ratios = f"https://financialmodelingprep.com/api/v3/ratios/{self.ticker}?apikey={self.api_key}"
        ratios = self.get_jsonparsed_data(url_ratios)
        url_metrics = f"https://financialmodelingprep.com/api/v3/key-metrics/{self.ticker}?apikey={self.api_key}"
        metrics = self.get_jsonparsed_data(url_metrics)
        
        long_term_debt = ratios[0]["longTermDebt"] if "longTermDebt" in ratios[0] else 0
        working_capital = metrics[0]["workingCapital"] if "workingCapital" in metrics[0] else 0

        return long_term_debt / working_capital if working_capital != 0 else 0

    def evaluate_conditions(self):
        conditions_met = 0
        total_conditions = 13

        if self.calculate_eps() > 0:
            conditions_met += 1
        if self.calculate_eps(1) > 0:
            conditions_met += 1
        if self.calculate_eps(2) > 0:
            conditions_met += 1
        if self.calculate_eps(3) > 0:
            conditions_met += 1
        if self.calculate_eps(4) > 0:
            conditions_met += 1

        trailing_eps = self.calculate_trailing_eps()
        if all(eps > 0 for eps in trailing_eps):
            conditions_met += 1

        if 0 < self.ratio_liab_assets() < 1.2:
            conditions_met += 1

        if self.current_ratio() >= 1.5:
            conditions_met += 1

        if self.dividend_yield() > 0:
            conditions_met += 1

        if trailing_eps[0] > self.calculate_eps(4):
            conditions_met += 1

        if self.calculate_eps() > self.calculate_eps(4):
            conditions_met += 1

        if 0 < self.lt_debt_to_wc_ratio() < 1.1:
            conditions_met += 1

        return conditions_met, total_conditions

class JamesOShaughnessyAnalysisFMP:
    def __init__(self, ticker, api_key):
        self.ticker = ticker
        self.api_key = api_key

    def get_jsonparsed_data(self, url):
        response = requests.get(url)
        return response.json()

    def get_rsi(self, months):
        # Converting months to days for the period value in the API call
        days = months * 30  # Rough approximation of days
        url = f"https://financialmodelingprep.com/api/v3/technical_indicator/daily/{self.ticker}?type=rsi&period={days}&apikey={self.api_key}"
        rsi_data = self.get_jsonparsed_data(url)
        if rsi_data:
            # Retrieve the latest RSI value
            latest_rsi = rsi_data[-1]['rsi']
            return latest_rsi
        return 0

    def get_market_cap_and_ps_ratio(self):
        url = f"https://financialmodelingprep.com/api/v3/key-metrics/{self.ticker}?apikey={self.api_key}"
        metrics = self.get_jsonparsed_data(url)
        if metrics:
            market_cap = metrics[0].get('marketCap', 0)
            ps_ratio = metrics[0].get('priceToSalesRatio', 0)
        else:
            print("cant find")
            market_cap, ps_ratio = 0, 0
        return market_cap, ps_ratio

    def eps_growth_rate_last_year(self):
        url = f"https://financialmodelingprep.com/api/v3/income-statement/{self.ticker}?limit=2&apikey={self.api_key}"
        financials = self.get_jsonparsed_data(url)
        if len(financials) >= 2:
            eps_current = financials[0]['eps']
            eps_previous = financials[1]['eps']
            if eps_previous != 0:
                return ((eps_current - eps_previous) / eps_previous) * 100
        return 0

    def evaluate_conditions(self):
        conditions_met = 0
        total_conditions = 5

        # Market Cap and PS Ratio
        market_cap, ps_ratio = self.get_market_cap_and_ps_ratio()
        if 75000000 <= market_cap <= 750000000:
            conditions_met += 1
        if ps_ratio < 1.5:
            conditions_met += 1

        # Relative Strength Index (RSI) using the modified method
        if self.get_rsi(3) > 50:
            conditions_met += 1
        if self.get_rsi(6) > 50:
            conditions_met += 1

        # EPS Growth Rate
        print(self.eps_growth_rate_last_year())
        if self.eps_growth_rate_last_year() > 0:
            conditions_met += 1

        return conditions_met, total_conditions
class StockAnalysisRequest(BaseModel):
    ticker: str
    api_key: str
    analysis_type: str

@app.post("/analyze")
async def analyze_stock(request: StockAnalysisRequest):
    if not request.ticker:
        raise HTTPException(status_code=400, detail="Ticker and API Key are required")

    analysis_map = {
        'Buffett': BuffettAnalysis,
        'ONeil': WilliamONeilAnalysisFMP,
        'Graham': BenjaminGrahamAnalysis,
        'OShaughnessy': JamesOShaughnessyAnalysisFMP
    }

    if request.analysis_type not in analysis_map:
        raise HTTPException(status_code=404, detail="Analysis type not supported")

    analysis_class = analysis_map[request.analysis_type]
    try:
        api_key = "MZNUxALEyarHKD7VgwIFq9BntSNq9MjA"
        analysis = analysis_class(request.ticker, api_key)
        conditions_met, total_conditions = analysis.evaluate_conditions()
        percentage = conditions_met / total_conditions * 100
        return {
            "analysis_type": request.analysis_type,
            "conditions_met": conditions_met,
            "total_conditions": total_conditions,
            "percentage": percentage
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Example usage: 
# curl -X 'POST' 'http://127.0.0.1:8000/analyze' -H 'accept: application/json' -H 'Content-Type: application/json' -d '{"ticker": "AAPL", "api_key": "YOUR_API_KEY", "analysis_type": "Buffett"}'
