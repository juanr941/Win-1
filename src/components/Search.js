import React, { useState } from "react";
import { exampleSearchResults } from "../constants/example";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResults from "./SearchResults";


const Search = ({ setSymbol }) => {
    const [input, setInput] = useState("");
    const [bestMatch, setBestMatch] = useState([]);
  
    const clear = () => {
      setInput("");
      setBestMatch([]);
    };
  
    const updateBestMatch = () => {
      setBestMatch(exampleSearchResults.results || []);
      setSymbol(input);
    };
  
    return (
      <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200">
        <input
          type="text"
          value={input}
          className="w-full px-4 py-2 focus:outline-none rounded-md"
          placeholder="Search..."
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              updateBestMatch();
            }
          }}
        />
        {input && (
          <button onClick={clear}>
            <XIcon className="h-4 w-4 fill-gray-700" />
          </button>
        )}
        <button
          onClick={updateBestMatch}
          className="h-9 w-8 bg-purple-600 rounded-md flex justify-center items-center m-1 p-2"
        >
          <SearchIcon className="h-4 w-4 fill-gray-400" />
        </button>
        {input && bestMatch.length > 0 ? (
          <SearchResults results={bestMatch} />
        ) : null}
      </div>
    );
  };
  
  export default Search;