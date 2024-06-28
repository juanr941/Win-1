
import React  from "react";
import Search from "./Search";
// import Conditions from "./conditions";
import ThemeIcon from "./Background";

const Header = ({ setSymbol }) => {
    return (
      <>
       <ThemeIcon />
        <div className="flex-1 flex justify-center xl:px-32">
          <Search setSymbol={setSymbol} />
        </div>
       

        <div class="new-component xl:ml-8">

    </div>

    <div class="flex-1 flex justify-end items-center">
    <span class="text-lg"> We think what to put here. </span>
  </div>
      </>
    );
  };
  
  export default Header;