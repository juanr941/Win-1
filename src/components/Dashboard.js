import React, {useState} from "react";
import Card from "./Card";
// exampleGetStatistics
import { exampleCompanyDetails, } from "../constants/example";
// import Search from "./Search";
import Header from "./Header"; //search bar
import Details from "./details";
import Overview from "./Overview";
import Conditions from "./conditions";
import Livechart from "./livechart";

const Dashboard = () => {
    const [symbol, setSymbol] = useState(''); // Start with an empty string
  
    return (
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-afacad bg-neutral-100">
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
          <h1 className="text-5xl">{exampleCompanyDetails.name}</h1>
          <Header setSymbol={setSymbol} />
          
        </div>
        <div className="md:col-span-2 row-span-4">
          <Livechart symbol={symbol} />
        </div>
        <div>
          <Overview
        //   industry={industry}
        //     symbol={exampleCompanyDetails.ticker}
        //     price={Price}
        //     change={Change}
        //     changePercent={changes}
        //     currency={currency}
          />
        </div>
        <div className="row-span-2 xl:row-span-3 h-full">
          <Details details={exampleCompanyDetails} />
        </div>
        <div className="row-span-2 xl:row-span-3">
          <Conditions searchInput={symbol} />
        </div>
      </div>
    );
  };
  
  export default Dashboard;