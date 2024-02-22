import React from "react";

const SearchResults =({results}) =>{

    return(
        <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200">
            {/* This search is based on the example.js I took from the api and is in the constants folder.  */}
        
        {results.map ((item) =>{
            return <li key = {item.symbol} className="
            cursor-pointer p-4 m-2 flex items-center justify-between
            rounded-md hover:bg-indigo-300">
                <span> {item.symbol}</span>
                <span>{item.description}</span>
            
            </li>;
        })}
        

        </ul>

    )
    //we check the example.js to verify the tools needed. 
}

export default SearchResults
