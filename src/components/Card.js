import React from "react";

//prop to take a children element
const Card =({children}) => {
    return <div  className="w-full  rounded md relative p-9 border-2 ">{children}</div>
}

export default Card;

//write a bar that will give certain point according to the different conditons if they are met
// or example, there are 15 conditions to check, if the stock satisfies 12-15 conditions, it should show green in the progress bar
//  And the progress bar should contain 15 points
//  And if the stock satisfies 8-12 conditions, it should show orange
//  And if the stock satisfies less than 7 conditions, it should show red
// red, orange, green, yellow. 

//1ST) person types stock name ( call api to do the chart)
//2) goes to python and returns the percentage that will be displayed on the chart. 
//3) can provide related ones