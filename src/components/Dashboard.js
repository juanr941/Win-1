import React from "react";
import Card from "./Card";
import { exampleCompanyDetails } from "../constants/example";
import Search from "./Search";

const Dashboard =() => {
    return( <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-afacad ">
    
    <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">

        <h1 className="text-5xl">{exampleCompanyDetails.name}</h1>
        <Search/>
        
    </div>
    <div className="md:col-span-2 row-span-4">
    <Card> Chart</Card>
</div>
<div>
        <Card> Overview</Card>
    </div>
    <div className="row-span-2 xl:row-span-3">
    <Card> Details</Card>
</div>
</div>

    );
};

export default Dashboard