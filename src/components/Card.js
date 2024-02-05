import React from "react";

//prop to take a children element
const Card =({children}) => {
    return <div  className="w-full h-full rounded md relative p-9 border-2">{children}</div>
}

export default Card;