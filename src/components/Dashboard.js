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
import CardFWarren from "./warren_peter";
import CompanyOutlookTable from "./livechartdescription";

const Dashboard = () => {
    const [symbol, setSymbol] = useState(''); // Start with an empty string
  
    return (
      
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-auto md:grid-rows-auto xl:grid-rows-auto gap-6 p-10 font-afacad bg-neutral-100">
 
  <div className="col-span-3 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
    <h1 className="text-5xl">{exampleCompanyDetails.name}</h1>
    <Header setSymbol={setSymbol} />
  </div>

 
 <div className="col-span-3 md:col-span-2 xl:col-span-3 row-span-1">
    <CardFWarren></CardFWarren>
  </div>


  <div className="col-span-3 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
    <h3 className="text-color:dark"> Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. </h3>
  </div>


  <div className="col-span-2 md:col-span-1 xl:col-span-2 row-span-1">
    <Livechart symbol={symbol} />
  </div>

 
  <div className="col-span-1 md:col-span-1 xl:col-span-1 row-span-1">
    <Overview />
    {/* <CompanyOutlookTable/> */}
    <div className="col-span-1 md:col-span-1 xl:col-span-1 row-span-1">
    <Details details={exampleCompanyDetails} />
  </div>
  </div>

  
  

 
  <div className="col-span-1 md:col-span-1 xl:col-span-1 row-span-1">
    <Conditions searchInput={symbol} />
  </div>
</div>


    );
  };
  
  export default Dashboard;