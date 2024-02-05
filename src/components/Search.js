import React, { useState } from "react";
import { exampleSearchResults } from "../constants/example";

//use the search with the example results. 

const Search =() => {

    const[input,setInput] = useState("");
    const [Bestmatch, setBestMatch] = useState(exampleSearchResults.results)

    //deletefunction
    const clear = () => {
        setInput ("")
        //make it into an array
        setBestMatch([]);


    }
   const UpdateBestMatch =() =>{

    setBestMatch (exampleSearchResults.results)
   }

   return <div className ="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200">

        <input 
        type ="text" 
        value={input} 
        className ="w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Search stock..."
        //event when the 
        onChange={(event)=> {setInput (event.target.value);
        
        }}

        onKeyPress ={ (event)=> { 
            if (event.key ==="Enter") {
                UpdateBestMatch();
            }
        }}
 
        />


    </div>

};

export default Search