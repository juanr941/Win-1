// import React from "react";
// import Search from "./Search";
// import ThemeIcon from "./Background";


// const Header = ({name}) => {
//     return (
//     <>
//     <div className="xl:px-32">

// <h1 className="text-5xl">{name}</h1>
// <Search/>
//     </div>
// <ThemeIcon/>
//     </>
//     );
// };

// export default Header
// { useState }

import React  from "react";
import Search from "./Search";
// import Conditions from "./conditions";
import ThemeIcon from "./Background";

const Header = ({ setSymbol }) => {
    return (
      <>
        <div className="xl:px-32">
          <Search setSymbol={setSymbol} />
        </div>
        <ThemeIcon />
      </>
    );
  };
  
  export default Header;