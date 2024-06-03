import React from "react";
import Card from "./Card";
// import { TrendingDownIcon } from "@heroicons/react/solid"; // Assuming this is the correct import

const Details = ({details}) => {
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Exchange",
    marketCapitalization: "Market Cap",
    operatingIncome: "Operating Income",
    totalRevenue: "Total Revenue",
    netIncome: "Net Income",
    profitMargin: "Profit Margin",
    totalAssets: "Total Assets",
    earningsPerShare: "Earnings per Share",
    // Add other properties as needed
  };



const convertMillionToBillion = (number)=>{
  return(number/100).toFixed(2);
};
  return (
    <Card>
      <ul className="w-full h-full flex flex-col justify-between divide-y-1">
        {Object.keys(detailsList).map((item) => {
            return(
          <li key={item} 
          className="flex justify-between items-center">
            <span>{detailsList[item]}</span>
            <span>
                {item === "marketCapitalization"?`${convertMillionToBillion(details[item])}B`:
                details[item]}
            </span>

          </li>
        );
        })}
       
      </ul>
    </Card>
  );
};

export default Details;
