
import os
import yfinance as yf
import requests
import warnings
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

warnings.filterwarnings('ignore', category=FutureWarning)

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow all origins (not recommended for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BuffetFinancialAnalysis:
    def __init__(self, ticker):
        self.ticker = ticker
        self.stock = yf.Ticker(ticker)
        self.api_key = "7e414d8a9amsh559311588f7f45bp10656fjsn4a054a7f8fd2"

    def get_operating_margin(self):
        fin_statements = self.stock.financials
        operating_income = fin_statements.loc['Operating Income', :][0]
        revenue = fin_statements.loc['Total Revenue', :][0]
        operating_margin = operating_income / revenue if revenue != 0 else 0
        return operating_margin * 100

    def calculate_profit_margin(self):
        income_statement = self.stock.financials
        net_income = income_statement.loc['Net Income'].iloc[0]
        total_revenue = income_statement.loc['Total Revenue'].iloc[0]
        profit_margin = (net_income / total_revenue) * 100
        return profit_margin

    def ratio_liab_assets(self):
        balance_sheet = self.stock.balance_sheet
        total_liabilities = balance_sheet.loc['Total Liabilities Net Minority Interest'].iloc[0]
        total_assets = balance_sheet.loc['Total Assets'].iloc[0]
        liabilities_assets_ratio = total_liabilities / total_assets
        return liabilities_assets_ratio

    def api_request(self, url, params):
        headers = {
            "X-RapidAPI-Key": self.api_key,
            "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
        try:
            response = requests.get(url, headers=headers, params=params)
            response.raise_for_status()
            return response.json()
        except requests.exceptions.RequestException as e:
            raise HTTPException(status_code=503, detail=str(e))

    def eps_growth_rate(self):
        url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v4/get-statistics"
        params = {"symbol": self.ticker, "region": "US", "lang": "en-US"}
        statistics = self.api_request(url, params)
        trailing_eps = statistics["quoteSummary"]["result"][0]["defaultKeyStatistics"]["trailingEps"]["raw"]
        forward_eps = statistics["quoteSummary"]["result"][0]["defaultKeyStatistics"]["forwardEps"]["raw"]
        eps_growth_rate = ((forward_eps - trailing_eps) / trailing_eps) * 100 if trailing_eps != 0 else 0
        return eps_growth_rate

    def eps_quarters(self):
        url = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis"
        params = {"symbol": self.ticker, "region": "US"}
        analysis = self.api_request(url, params)
        eps_history = analysis["earningsHistory"]["history"]
        eps = [quarter['epsActual']['raw'] for quarter in eps_history[-4:]]
        return tuple(eps)

    def roe(self):
        stock_info = self.stock.info
        return stock_info.get('returnOnEquity', 0)

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
        eps_1, eps_2, eps_3, eps_4 = self.eps_quarters()
        if all(eps > 0 for eps in [eps_1, eps_2, eps_3, eps_4]):
            conditions_met += 4
        if self.roe() > 12:
            conditions_met += 1

        return conditions_met, total_conditions

class StockAnalysisRequest(BaseModel):
    ticker: str

@app.post("/analyze")
async def analyze_stock(request: StockAnalysisRequest):
    ticker = request.ticker
    if not ticker:
        raise HTTPException(status_code=400, detail="Ticker is required")

    try:
        analysis = BuffetFinancialAnalysis(ticker)
        conditions_met, total_conditions = analysis.evaluate_conditions()
        percentage = conditions_met / total_conditions * 100

        return {
            "conditions_met": conditions_met,
            "total_conditions": total_conditions,
            "percentage": percentage
            
        }
    except HTTPException as e:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

# Example usage, uncomment to test
# stock_name = "NVDA"
# analysis = BuffetFinancialAnalysis(stock_name)
# conditions_met, total_conditions = analysis.evaluate_conditions()
# print(f"Conditions met: {conditions_met}/{total_conditions} ({conditions_met/total_conditions * 100:.2f}%) confident in investing in {stock_name}")