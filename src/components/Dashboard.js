import React, {useState} from "react";
import { exampleCompanyDetails, } from "../constants/example";
import Header from "./Header";
import Overview from "./Overview";
import Livechart from "./livechart";
import CardFWarren from "./warren_peter";
import CompanyOutlookTable from "./livechartdescription";
import Description from "./Description";

// import Search from "./Search";
// import Details from "./details";
// import Search from "./Search";
// import Card from "./Card";

const Dashboard = () => {
  const [symbol, setSymbol] = useState("");
// Start with an empty string
  
    return (

      
      
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-auto md:grid-rows-auto xl:grid-rows-auto gap-6 p-10 font-afacad bg-neutral-100">
        
   
 
  <div className="col-span-3 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
    <h1 className="text-5xl">{exampleCompanyDetails.name}</h1>
    <Header setSymbol={setSymbol} />
  </div>
  <div className="col-span-3 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
    <Description symbol ={symbol} />
    
  </div>

 
 <div className="col-span-3 md:col-span-2 xl:col-span-3 row-span-1">
    <CardFWarren></CardFWarren>
  </div>



  


  <div className="col-span-2 md:col-span-1 xl:col-span-2 row-span-1">
    <Livechart symbol={symbol} />
  </div>

 
  <div className="col-span-1 md:col-span-1 xl:col-span-1 row-span-1">
    <Overview symbol={symbol} />
    
    
    <div className="col-span-1 md:col-span-1 xl:col-span-1 row-span-1">
    <div>
            {/* <Search setSymbol={setSymbol} /> */}
            <div className="col-span-1 md:col-span-1 xl:col-span-1 row-span-1">
             
                <CompanyOutlookTable symbol={symbol} />
            </div>
        </div>
    {/* <Details details={exampleCompanyDetails} /> */}
  </div>
  </div>

  
  

 
  

</div>


    );
  };
  
  export default Dashboard;