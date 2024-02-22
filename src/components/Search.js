import React, { useState } from "react";
import { exampleSearchResults } from "../constants/example";
import { XIcon, SearchIcon} from "@heroicons/react/solid/index";
import SearchResults from "./SearchResults";

//use the search with the example results. 

const Search =() => {

    const[input,setInput] = useState("");
    const [Bestmatch, setBestMatch] = useState(exampleSearchResults.result)

    //deletefunction
    const clear = () => {
        setInput ("")
        //make it into an array
        setBestMatch([]);


    }
   const updateBestMatch =() =>{

    setBestMatch (exampleSearchResults.results)
   }

   return <div className ="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200">

        <input 
        type ="text" 
        value={input} 
        className ="w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Search..."
        //event when the 
        onChange={(event)=> {setInput (event.target.value);
        
        }}

        onKeyPress ={ (event)=> { 
            if (event.key ==="Enter") {
                updateBestMatch();
            }
        }}
 
        //only display if there is an input in the text field. 
        />
        
        { input &&(
        <button conClick={clear}>
            <XIcon className="h-4 w-4 fill-gray-700"/>
        </button> )}

        <button 
          onClick={updateBestMatch} 
          className="h-9 w-8 bg-indigo-600 rounded-md flex justify-center items-center m-1 p-2" >
            <SearchIcon className="h-4 w-4 fill-gray-400"/>
        </button>
        {input && Bestmatch.length > 0? <SearchResults results ={Bestmatch }/> :null}
    </div>

}; 

export default Search